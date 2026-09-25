/**
 * Sending a contact message.
 *
 * Firestore has a plain REST API, so a message can be stored with one `fetch`
 * and no SDK. The Firebase JavaScript SDK would be ~100 kB gzipped to do the
 * same job — five times the entire rest of this site — which is not a trade
 * the S7 Standard would accept for one form.
 *
 * The API key below is a Firebase *web* key. It is not a secret: it identifies
 * the project, it is visible in every Firebase web app, and it grants nothing
 * on its own. What actually protects the collection is the security rule in
 * firestore.rules, which allows `create` on well-formed documents and forbids
 * reading, updating and deleting outright.
 */

const PROJECT = import.meta.env.VITE_FIREBASE_PROJECT_ID || 'service7-8bd8b';
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY || '';
const COLLECTION = 'messages';

export const FIRESTORE_ORIGIN = 'https://firestore.googleapis.com';

/** False when no API key was supplied at build time; the form then falls back to email. */
export const isConfigured = (): boolean => API_KEY.length > 0;

export interface ContactMessage {
  readonly name: string;
  readonly email: string;
  readonly company: string;
  readonly topic: string;
  readonly message: string;
  readonly lang: string;
}

/** Firestore's REST shape: every value is tagged with its type. */
function toFields(m: ContactMessage): Record<string, unknown> {
  return {
    name: { stringValue: m.name },
    email: { stringValue: m.email },
    company: { stringValue: m.company },
    topic: { stringValue: m.topic },
    message: { stringValue: m.message },
    lang: { stringValue: m.lang },
    createdAt: { timestampValue: new Date().toISOString() },
  };
}

export class SubmitError extends Error {}

/**
 * Store one message. Resolves on success, throws on anything else — the caller
 * shows the fallback address rather than pretending it went through.
 */
export async function submitMessage(m: ContactMessage, signal?: AbortSignal): Promise<void> {
  if (!isConfigured()) {
    throw new SubmitError('Contact storage is not configured (VITE_FIREBASE_API_KEY is unset).');
  }

  const url =
    `${FIRESTORE_ORIGIN}/v1/projects/${PROJECT}/databases/(default)/documents/` +
    `${COLLECTION}?key=${encodeURIComponent(API_KEY)}`;

  let res: Response;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: toFields(m) }),
      signal: signal ?? null,
    });
  } catch (cause) {
    throw new SubmitError('The request never reached Firestore.', { cause });
  }

  if (!res.ok) {
    // Surface the status for the console; the visitor sees the friendly copy.
    throw new SubmitError(`Firestore replied ${res.status} ${res.statusText}`);
  }
}

/** A pre-filled mailto, used when storage is unavailable. */
export function mailtoFallback(to: string, m: ContactMessage): string {
  const subject = `[${m.topic}] ${m.name}${m.company ? ` — ${m.company}` : ''}`;
  const body = `${m.message}\n\n—\n${m.name}\n${m.email}${m.company ? `\n${m.company}` : ''}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
