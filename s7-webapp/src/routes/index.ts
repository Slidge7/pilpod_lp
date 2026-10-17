import type { Route } from '../app/types';
import { home } from './home';
import { services } from './services';
import { pilpod } from './pilpod';
import { reqtone } from './reqtone';
import { x3Home, x3Features, x3Docs, x3Privacy, x3PrivacyExtension } from './x3';
import { contact } from './contact';
import { notFound } from './notfound';

/** Every addressable page. Order is irrelevant; paths are matched exactly. */
export const routes: readonly Route[] = [home, services, pilpod, reqtone, x3Home, x3Features, x3Docs, x3Privacy, x3PrivacyExtension, contact];

/** Served for anything the table above does not claim. */
export const fallback: Route = notFound;

/** Routes that get their own file in dist/ at build time. */
export const prerenderable: readonly Route[] = [home, services, pilpod, reqtone, x3Home, x3Features, x3Docs, x3Privacy, x3PrivacyExtension, contact, notFound];
