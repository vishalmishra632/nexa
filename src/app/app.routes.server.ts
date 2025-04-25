// src/app/app.routes.server.ts
import { ServerRoute, RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    // …other static routes, if any…

    // switch these from Prerender → Server
    { path: 'solution-details/:type', renderMode: RenderMode.Server },
    { path: 'case-study/:type', renderMode: RenderMode.Server },
    { path: 'blog-details/:slug', renderMode: RenderMode.Server },

    // catch-all: everything else SSR
    { path: '**', renderMode: RenderMode.Server },
];
