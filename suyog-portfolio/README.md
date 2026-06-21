# Suyog Nagaokar — Portfolio

A portfolio site for a Data Engineering Leader, built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Includes an "Ask the AI" widget powered by the Claude API, grounded in the real resume content (no hallucinated answers — the system prompt is built from `lib/data.ts`).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Claude API** (`claude-sonnet-4-6`) via a server-side route at `app/api/chat/route.ts` — no API key is ever exposed to the browser

## Local development

```bash
npm install
cp .env.example .env.local
# edit .env.local and add your ANTHROPIC_API_KEY
npm run dev
```

Visit `http://localhost:3000`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to vercel.com/new and import the repo.
3. In the project's Settings -> Environment Variables, add:
   - `ANTHROPIC_API_KEY` = your key from console.anthropic.com
4. Deploy. Vercel will auto-detect Next.js and handle the build.

That's it -- the `/api/chat` route runs as a Vercel Edge Function automatically.

## Editing your content

Everything personal -- name, experience, skills, stats, AI prompt suggestions -- lives in one file:

```
lib/data.ts
```

Edit that file and every section of the site (and the AI assistant's knowledge) updates automatically. No need to touch component files for content changes.

## Updating your photo or résumé

- Headshot: replace `public/headshot.png` (keep it roughly square, 600x600px+)
- Résumé PDF: replace `public/Suyog_Nagaokar_Resume.pdf` -- if you rename it, also update the link in `components/Hero.tsx`

## Project structure

```
app/
  api/chat/route.ts   -> Claude API endpoint for the AI widget
  layout.tsx          -> root layout, fonts, metadata
  page.tsx             -> assembles all sections
  globals.css           -> design tokens (colors, fonts, animations)
components/
  Header.tsx              -> sticky nav
  Hero.tsx                 -> headline, photo, stats, pipeline diagram
  PipelineFlow.tsx           -> animated SVG signature element
  About.tsx                   -> bio, education, certifications, awards
  Experience.tsx                -> work history timeline
  Skills.tsx                     -> skills grid
  AskAI.tsx                       -> the Claude-powered chat widget
  Footer.tsx                       -> contact section
lib/
  data.ts   -> ALL content lives here
public/
  headshot.png
  Suyog_Nagaokar_Resume.pdf
```
