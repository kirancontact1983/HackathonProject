# GitHub Pages deployment

1. Create an empty GitHub repository.
2. From inside this `Code/` folder, push only its contents:

```bash
git init
git add .
git commit -m "Tax Clarity Companion demo"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

3. In GitHub open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Open `https://<user>.github.io/<repo>/` after the first deployment completes.

The empty `.nojekyll` file, relative paths and hash routing keep the prototype safe for project-site URLs.
