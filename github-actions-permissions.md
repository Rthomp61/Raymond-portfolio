# Fixing GitHub Actions Permission Issues

If you encounter a permission error like this when deploying to GitHub Pages:

```
remote: Permission to Rthomp61/Raymond-portfolio.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/Rthomp61/Raymond-portfolio.git/': The requested URL returned error: 403
```

Follow these steps to fix it:

## 1. Update Repository Workflow Permissions

1. Go to your GitHub repository (Rthomp61/Raymond-portfolio)
2. Click on "Settings" (tab near the top right)
3. In the left sidebar, click on "Actions" under "Code and automation"
4. Scroll down to the "Workflow permissions" section
5. Select "Read and write permissions" 
6. Check the box that says "Allow GitHub Actions to create and approve pull requests"
7. Click "Save"

![Workflow Permissions Settings](https://docs.github.com/assets/cb-39569/mw-1440/images/help/settings/actions-workflow-permissions-repository.webp)

## 2. Enable GitHub Pages in Repository Settings

1. Still in your repository settings, click on "Pages" in the left sidebar
2. Under "Source", select "GitHub Actions" 
3. Click "Save"

## 3. Generate a Personal Access Token (Alternative Method)

If updating the workflow permissions doesn't resolve the issue, you can use a Personal Access Token:

1. Go to your GitHub profile settings (click your profile picture → Settings)
2. Scroll down and click on "Developer settings" (at the bottom of the left sidebar)
3. Click on "Personal access tokens" → "Tokens (classic)"
4. Click "Generate new token" → "Generate new token (classic)"
5. Give it a name like "GitHub Pages Deployment"
6. Select at minimum these scopes: `repo`, `workflow`
7. Click "Generate token"
8. **COPY THE TOKEN IMMEDIATELY** - you won't be able to see it again!

## 4. Add the Token as a Repository Secret

1. Go back to your repository settings
2. Click on "Secrets and variables" → "Actions" in the left sidebar
3. Click "New repository secret"
4. Name: `DEPLOY_TOKEN`
5. Value: Paste the personal access token you copied
6. Click "Add secret"

## 5. Update Your Workflow File

Update your `.github/workflows/deploy.yml` file to use the token:

```yaml
- name: Deploy
  uses: JamesIves/github-pages-deploy-action@v4
  with:
    folder: dist
    token: ${{ secrets.DEPLOY_TOKEN }}
```

## Troubleshooting

- Make sure you've properly set up the GitHub Pages source in your repository settings
- Try using a different deployment action, such as `peaceiris/actions-gh-pages@v3`
- Check if your repository has branch protection rules that might be interfering
- Verify that your GitHub account has verified its email address