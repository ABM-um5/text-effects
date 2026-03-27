# 🚀 GitHub Setup Guide

## Auto-Deployment with GitHub Actions

This project includes automatic deployment to GitHub Pages. Here's how to set it up:

### Step 1: Push the GitHub Actions Workflow

The workflow file `deploy.yml` needs to be in your repository at `.github/workflows/deploy.yml`

**Move the deploy.yml file:**
```bash
# If you cloned locally:
mkdir -p .github/workflows
mv deploy.yml .github/workflows/deploy.yml
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow for auto-deployment"
git push
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - Wait for the automatic deployment workflow to run

### Step 3: Configure Branch Protection (Optional but Recommended)

1. In Settings → Branches
2. Add rule for main/master branch
3. Require workflow to pass before merge

### How It Works

**Trigger:** Every push to `main` or `master` branch

**Process:**
1. GitHub Actions automatically checks out your code
2. Uploads files as artifact
3. Deploys to GitHub Pages
4. Your site updates within 1-2 minutes

**Workflow File:** `.github/workflows/deploy.yml`

### Monitor Deployments

1. Go to **Actions** tab in your repository
2. See all workflow runs
3. Click on any run to see details
4. Check for ✅ (success) or ❌ (failure)

### Troubleshooting

**Workflow not running?**
- Confirm workflow file is at `.github/workflows/deploy.yml`
- Check that you're pushing to `main` or `master`
- Go to Settings → Actions → General → Ensure Actions are enabled

**Site not updating?**
- Wait 2-3 minutes for deployment
- Hard refresh your browser (Ctrl+Shift+R)
- Check the Actions tab for any errors
- Verify GitHub Pages is set to use GitHub Actions

**Permission Issues?**
- Go to Settings → Actions → General
- Ensure "Read and write permissions" is selected
- Re-run the workflow

## Manual Deployment

If GitHub Actions has issues, you can manually deploy:

```bash
# Push your code
git push origin main

# Then manually trigger in GitHub:
# Actions tab → Deploy to GitHub Pages → Run workflow
```

## Files You Should Have

```
your-repo/
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml
└── deploy.yml (optional - same content as above)
```

## What Gets Deployed

Everything in your repository root gets deployed, except:
- Files listed in `.gitignore`
- Hidden files/folders starting with `.`
- `node_modules/` (if ignored)

Since this is a static site, everything goes live!

## Domain Setup (Optional)

To use a custom domain:

1. Get a domain name (GoDaddy, Namecheap, etc.)
2. In your repo Settings → Pages → Custom domain
3. Enter your domain
4. Follow the DNS configuration steps provided
5. GitHub will handle SSL certificate automatically

---

**That's it!** Your site will auto-deploy on every push. 🎉
