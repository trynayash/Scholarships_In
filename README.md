# NSP Reimagined

A hackathon prototype by Yash Suthar that redesigns the student side of India's National Scholarship Portal. It is a front-end demo only. It is not an official government site and is not affiliated with the Government of India.

## What it does

- Home page with a hero carousel, an application journey, a document checklist and an FAQ preview
- A scholarship directory with search, filters and sorting, and a detail page for each scheme
- A five-question finder that builds a local shortlist
- Demo pages for One-Time Registration, "My applications" (with a status timeline), a document centre and help

All data comes from `src/data/mock.ts` (five sample schemes, one sample application and one demo profile). Nothing is submitted or stored on a server.

## Tech stack

- Frontend (`artifacts/nsp-reimagined`): React, TypeScript, Vite, Tailwind CSS, Wouter, Framer Motion
- pnpm workspace started from a Replit template. It also contains an Express API server with only a health check route and some unused shared packages in `lib/`.

## Run it locally

You need Node.js and pnpm.

```bash
git clone https://github.com/trynayash/Scholarships_In.git
cd Scholarships_In
pnpm install
pnpm --filter @workspace/nsp-reimagined run dev
```

The dev server runs on port 5173 unless `PORT` is set.

Build the frontend (this is what Vercel runs):

```bash
pnpm vercel-build
```
