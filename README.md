# AS Residential

Modern, mobile-first marketing site for a residential construction company — custom homes, renovations, and additions. Built with React, TypeScript, Vite, and Tailwind CSS.

**Live site:** https://astridbonoan.github.io/AS-Residential.io/

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages (Deploy from a branch)

This repo uses GitHub Actions to build the site and publish static files to the **`gh-pages`** branch. In your repository settings:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Choose branch **`gh-pages`** and folder **`/ (root)`**
4. Save

Every push to `main` runs `.github/workflows/deploy-pages.yml`, which builds with Vite and updates `gh-pages`.

**Required:** In **Settings → Actions → General → Workflow permissions**, choose **Read and write permissions** so the workflow can push to the `gh-pages` branch.

## Quote form (optional Formspree)

By default, submitting the quote form opens the visitor’s email client with a pre-filled message. To receive submissions in an inbox, create a [Formspree](https://formspree.io) form and add a GitHub Actions secret or local env file:

```env
VITE_FORMSPREE_FORM_ID=your_form_id
```

For GitHub Actions, add `VITE_FORMSPREE_FORM_ID` to the workflow `env` block or repository secrets and pass it at build time.

## Customize

- Contact details: `src/data/site.ts`
- Colors and fonts: `tailwind.config.js`
