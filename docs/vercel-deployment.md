# Vercel multi-service deployment

Import this repository into one Vercel project with its Root Directory set to
the repository root. The root `vercel.json` defines independent builds:

| Service | Public route | Build output / entrypoint |
| --- | --- | --- |
| `aj-consulting` | `/` and all non-API paths | `dist/public` |
| `api-server` | `/api` and `/api/*` | Express default export in `src/app.ts` |
| `mockup-sandbox` | None (internal only) | `dist` |

The owner confirmed these service names, public routes, and absence of bindings
on 2026-10-11.
The sandbox is deliberately not exposed as part of the public consulting website.

## Builds and routing

- Use pnpm and the committed workspace lockfile. Each service's install command
  discovers the workspace and installs its shared packages.
- Frontend build commands supply `PORT` and `BASE_PATH`, required by the existing
  Vite configs. These are build-time values, not service-discovery bindings.
- The website is mounted at `/`. Its service routes serve existing static assets
  first, then `index.html` so direct visits to `/services`, `/about`, and `/contact`
  work with the client-side router.
- API rewrites preserve `/api`, matching the Express router's existing mount.
- Vercel uses the exported Express app, not the Replit port-listener entrypoint.
  Existing Replit workflows are unchanged.

## Bindings

No bindings are declared: neither frontend uses the API, and the API has no
outbound service calls. Static browser code cannot read runtime service bindings.
If server-side code later calls another service, declare a binding on that
calling service and read its injected URL in server-side functions only.

## Verification

Builds can be checked locally without Vercel credentials:

```sh
pnpm --filter @workspace/aj-consulting exec env PORT=5173 BASE_PATH=/ pnpm run build
pnpm --filter @workspace/api-server run build
pnpm --filter @workspace/mockup-sandbox exec env PORT=5174 BASE_PATH=/ pnpm run build
```

For a full routing check, run a current Vercel CLI from the repository root:

```sh
vercel dev -L
```

Verify `/`, `/services`, `/about`, `/contact`, `/favicon.svg`, and `/api/healthz`.
Confirm that sandbox previews are not exposed. Successful package builds alone
do not verify Vercel's service routing or cloud deployment.
