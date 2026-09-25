import type { Route } from '../app/types';
import { home } from './home';
import { reqtone } from './reqtone';
import { notFound } from './notfound';

/** Every addressable page. Order is irrelevant; paths are matched exactly. */
export const routes: readonly Route[] = [home, reqtone];

/** Served for anything the table above does not claim. */
export const fallback: Route = notFound;

/** Routes that get their own file in dist/ at build time. */
export const prerenderable: readonly Route[] = [home, reqtone, notFound];
