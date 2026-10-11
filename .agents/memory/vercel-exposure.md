---
name: Vercel exposure policy
description: Owner-approved scope for public access in the multi-service Vercel project.
---

Keep the design sandbox internal rather than exposing it on the consulting site's public domain.

**Why:** On 2026-10-11 the owner explicitly approved publishing the website and API while keeping the sandbox internal.

**How to apply:** Preserve this access boundary when changing Vercel routing. Ask before adding public sandbox routes. Bindings should reflect actual server-side calls, not merely services sharing a repository.
