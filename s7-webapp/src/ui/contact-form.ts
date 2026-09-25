import type { RenderCtx } from '../app/types';
import { isConfigured, mailtoFallback, submitMessage, type ContactMessage } from '../lib/contact-submit';

/**
 * The contact form.
 *
 * Validation is ours rather than the browser's (`novalidate` on the form), for
 * two reasons: the messages are translated, and a native bubble cannot be
 * styled or read out in the page's own language.
 *
 * Failure is reported honestly. If the message cannot be stored, the visitor
 * is told so and handed a pre-filled email instead — never a fake success.
 */

/** Deliberately permissive: the only authority on an address is sending to it. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MIN_MESSAGE = 20;
/** A send is held back until the form has been open at least this long. */
const MIN_SECONDS = 3;

export function initContactForm(root: ParentNode, ctx: RenderCtx): () => void {
  const form = root.querySelector<HTMLFormElement>('#contactForm');
  const done = root.querySelector<HTMLElement>('#cf-done');
  const status = root.querySelector<HTMLElement>('#cf-status');
  const submit = root.querySelector<HTMLButtonElement>('#cf-submit');
  const again = root.querySelector<HTMLButtonElement>('#cf-again');
  if (!form || !done || !status || !submit) return () => {};

  const t = ctx.t.contact;
  const label = submit.querySelector<HTMLElement>('.cf-label');
  const openedAt = Date.now();
  let sending = false;
  let controller: AbortController | null = null;

  const field = (name: string) =>
    form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;

  const setError = (name: string, message: string | null): void => {
    const input = field(name);
    const err = root.querySelector<HTMLElement>(`#cf-${name}-err`);
    if (!input) return;
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    input.closest('.fld')?.classList.toggle('is-bad', Boolean(message));
    if (err) {
      err.textContent = message ?? '';
      err.hidden = !message;
    }
  };

  const validate = (name: string): boolean => {
    const input = field(name);
    if (!input) return true;
    const value = input.value.trim();

    if (!value) {
      setError(name, t.vRequired);
      return false;
    }
    if (name === 'email' && !EMAIL.test(value)) {
      setError(name, t.vEmail);
      return false;
    }
    if (name === 'message' && value.length < MIN_MESSAGE) {
      setError(name, t.vMessage);
      return false;
    }
    setError(name, null);
    return true;
  };

  const onBlur = (e: Event): void => {
    const el = e.target as HTMLElement;
    const name = (el as HTMLInputElement).name;
    if (name === 'name' || name === 'email' || name === 'message') validate(name);
  };

  // Clear an error as soon as the visitor starts fixing it, rather than
  // leaving it shouting until they submit again.
  const onInput = (e: Event): void => {
    const el = e.target as HTMLInputElement;
    if (el.closest('.fld')?.classList.contains('is-bad')) validate(el.name);
  };

  const collect = (): ContactMessage => {
    return {
      name: field('name')?.value.trim() ?? '',
      email: field('email')?.value.trim() ?? '',
      company: field('company')?.value.trim() ?? '',
      topic: (form.elements.namedItem('topic') as HTMLSelectElement | null)?.value ?? '',
      message: field('message')?.value.trim() ?? '',
      lang: ctx.lang,
    };
  };

  const setSending = (on: boolean): void => {
    sending = on;
    submit.disabled = on;
    form.classList.toggle('is-sending', on);
    if (label) label.textContent = on ? t.sending : t.submit;
  };

  const fail = (): void => {
    status.className = 'ct-status is-error';
    const href = mailtoFallback(t.email, collect());
    status.innerHTML =
      `<strong>${t.errorTitle}</strong> ${t.errorBody} ` +
      `<a href="${href}">${t.email}</a>`;
  };

  const onSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();
    if (sending) return;

    // Validation comes first. A spam check that runs before it can tell a
    // person who clicked quickly that their empty form was sent.
    const ok = ['name', 'email', 'message'].map(validate).every(Boolean);
    if (!ok) {
      const bad = form.querySelector<HTMLElement>('.fld.is-bad input, .fld.is-bad textarea');
      bad?.focus();
      return;
    }

    // The honeypot is invisible and off the tab order, so only a script fills
    // it. Showing the same success it would have seen anyway tells the script
    // nothing, and costs a real visitor nothing because they never reach here.
    if (field('website')?.value) {
      form.hidden = true;
      done.hidden = false;
      return;
    }

    status.className = 'ct-status';
    status.textContent = '';
    setSending(true);

    const payload = collect();

    if (!isConfigured()) {
      // No storage configured for this build: hand over a pre-filled email
      // rather than dropping the message on the floor.
      setSending(false);
      window.location.href = mailtoFallback(t.email, payload);
      return;
    }

    // A form completed faster than a person could read it is almost certainly
    // automated. Rather than reject it — which would eventually catch someone
    // pasting a prepared message — the send simply waits out the remainder.
    // Bots get throttled; people get a send that takes a moment longer.
    const elapsed = (Date.now() - openedAt) / 1000;
    if (elapsed < MIN_SECONDS) {
      await new Promise<void>((r) => setTimeout(r, (MIN_SECONDS - elapsed) * 1000));
    }

    controller = new AbortController();
    try {
      await submitMessage(payload, controller.signal);
      form.hidden = true;
      done.hidden = false;
      done.querySelector('h2')?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      (done.querySelector('button') as HTMLElement | null)?.focus();
    } catch (err) {
      console.error('[s7] contact form:', err);
      fail();
    } finally {
      setSending(false);
      controller = null;
    }
  };

  const onAgain = (): void => {
    form.reset();
    ['name', 'email', 'message'].forEach((n) => setError(n, null));
    status.textContent = '';
    status.className = 'ct-status';
    done.hidden = true;
    form.hidden = false;
    field('name')?.focus();
  };

  form.addEventListener('submit', onSubmit);
  form.addEventListener('blur', onBlur, true);
  form.addEventListener('input', onInput);
  again?.addEventListener('click', onAgain);

  return () => {
    controller?.abort();
    form.removeEventListener('submit', onSubmit);
    form.removeEventListener('blur', onBlur, true);
    form.removeEventListener('input', onInput);
    again?.removeEventListener('click', onAgain);
  };
}
