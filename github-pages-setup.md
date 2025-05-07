# GitHub Pages Setup Instructions

When deploying to GitHub Pages, you'll need to update your Vite configuration to include the base path. Here's what to add to your vite.config.ts file:

```typescript
export default defineConfig({
  base: '/your-repo-name/', // Replace 'your-repo-name' with your actual GitHub repository name
  // ... rest of your configuration
})
```

## Important Notes:

1. Replace `'your-repo-name'` with your actual GitHub repository name
2. The leading and trailing slashes are important, don't remove them
3. This base path ensures that all assets are loaded correctly when your site is hosted at `https://yourusername.github.io/your-repo-name/`

## Useful Resources:

- [Vite GitHub Pages Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)