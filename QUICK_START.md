# 🚀 QUICK START GUIDE

## Step 1: Test Locally (Before Uploading)

Open `index.html` directly in your browser to test all features work:
- ✅ Click effect buttons
- ✅ Combine effects
- ✅ Copy text
- ✅ Download PNG
- ✅ Toggle dark mode

## Step 2: Update Your GitHub Repository

### Option A: Command Line (Recommended)
```bash
# Navigate to your repo folder
cd your-text-effects-repo

# Copy these files to your repo:
# - index.html
# - style.css
# - script.js
# - manifest.json
# - .gitignore
# - README.md
# - deploy.yml

# Create the workflows directory
mkdir -p .github/workflows

# Move the workflow file
mv deploy.yml .github/workflows/deploy.yml

# Add all files
git add .

# Commit
git commit -m "🚀 Major upgrade: 15+ effects, dark mode, favorites, history, PWA support"

# Push to GitHub
git push origin main
```

### Option B: GitHub Web Interface
1. Upload each file to your repo root:
   - index.html
   - style.css
   - script.js
   - manifest.json
   - .gitignore
   - README.md
2. Create folder: `.github/workflows`
3. Upload `deploy.yml` to that folder

## Step 3: Enable GitHub Actions Deployment

1. Go to your repo on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** GitHub Actions
5. Wait 2-3 minutes
6. Your site updates automatically! ✨

## Step 4: Visit Your Live Site

📍 Go to: `https://yourusername.github.io/text-effects/`

That's it! Every future push automatically deploys. 🎉

---

## Troubleshooting

**Site shows old version?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Wait 5 minutes for caching to clear
- Check the **Actions** tab for deployment status

**GitHub Actions workflow not running?**
- Confirm `.github/workflows/deploy.yml` exists in your repo
- Go to Settings → Actions → Enable workflows
- Check that you're pushing to `main` or `master` branch

**Download button not working?**
- Only works on HTTPS sites (GitHub Pages is HTTPS ✓)
- Some browsers block downloads - try another browser

**Dark mode not saving?**
- This uses localStorage - works in all modern browsers
- Incognito/private mode may not persist
- Check browser settings allow localStorage

---

## Features Checklist

After uploading, verify these work:

- [ ] All 15 effects display as buttons
- [ ] Clicking effect buttons transforms text
- [ ] Can combine multiple effects
- [ ] "Copy" button works
- [ ] "Download" button saves PNG
- [ ] Favorites section works
- [ ] History shows recent transformations
- [ ] Dark mode toggle works
- [ ] Search/filter effects works
- [ ] Live preview toggle works
- [ ] Mobile responsive (zoom on phone)
- [ ] Works offline (disconnect internet, try again)

---

## Next: Customize It!

### Add Your Own Effects

1. Open `script.js`
2. Find `effectsLibrary` object
3. Add a new effect:
```javascript
myEffect: {
    name: 'My Effect',
    icon: '🎨',
    description: 'What it does',
    fn: (text) => {
        // Transform text here
        return transformedText;
    }
}
```

### Change Colors

1. Open `style.css`
2. Find `:root { ... }` section
3. Change `--button-bg`, `--accent-color`, etc.

### Update Descriptions

1. Edit README.md with your changes
2. Push to GitHub
3. Changes appear automatically!

---

## Auto-Deployment Flow

```
You push to GitHub
        ↓
GitHub Actions triggered
        ↓
Workflow runs (30 seconds)
        ↓
Files uploaded
        ↓
Deployed to GitHub Pages
        ↓
Your site updates ✨
```

Every push auto-deploys. No manual steps needed!

---

## Support

- **GitHub Pages issues?** See [GitHub Pages docs](https://docs.github.com/en/pages)
- **GitHub Actions issues?** See [GitHub Actions docs](https://docs.github.com/en/actions)
- **Feature questions?** Check README.md

---

Made with ❤️ | Now with auto-deployment! 🚀
