# GitHub Pages Deployment Guide

## Important: Update Base Path

Before deploying to GitHub Pages, you need to update your Vite configuration with the correct base path.

```typescript
// In vite.config.ts
export default defineConfig({
  base: '/your-repo-name/', // Replace with your actual GitHub repo name
  // ... rest of your configuration
})
```

## Deployment Process

1. Clone this repository to your local machine or GitHub account
2. Update the `base` path in `vite.config.ts` with your actual repo name
3. Push changes to the `main` branch
4. The GitHub Action will automatically build and deploy your site to GitHub Pages

## About the GitHub Action

The GitHub Action workflow defined in `.github/workflows/deploy.yml` handles:

1. Setting up Node.js
2. Installing dependencies
3. Building the project
4. Deploying the built files to GitHub Pages

Your site will be available at: `https://yourusername.github.io/your-repo-name/`