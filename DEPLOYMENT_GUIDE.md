# 🚀 Portfolio Deployment Guide

Your **Java Full Stack Portfolio** is ready for the world!

## ✅ Pre-Flight Checklist
- [x] **Resume Linked**: `Urmi Original Resume (3)   hcl.pdf` is linked in the Hero section.
- [x] **Project Links**: Check that `spotify/majorone.html` works locally (for GitHub Pages, ensure file paths are case-sensitive!).
- [x] **Contact Info**: verified as `urmiprajapati707@gmail.com`.
- [ ] **Activate Contact Form**: **CRITICAL** - Send a test message and click "Activate" in the email from FormSubmit.co.
- [x] **SEO**: Keywords updated for "Java Full Stack Developer".

## 🌍 How to Deploy to GitHub Pages (Best Option)

1.  **Initialize Git** (if not done):
    ```bash
    git init
    git add .
    git commit -m "Final portfolio release"
    ```

2.  **Push to GitHub**:
    *   Create a new repo on GitHub named `portfolio` (or similar).
    *   Run:
        ```bash
        git remote add origin https://github.com/urmiprajapati04/portfolio.git
        git branch -M main
        git push -u origin main
        ```

3.  **Activate Pages**:
    *   Go to Repository **Settings** > **Pages**.
    *   Under **Source**, select `main` branch.
    *   Click **Save**.

4.  **Important Note for Assets**:
    *   Ensure image names in code match exactly (e.g., `URMI.jpg` vs `urmi.jpg` matters on the web).
    *   The `href="spotify/majorone.html"` link will work only if the `spotify` folder is pushed to GitHub.

## 🎉 You're Live!
Share your link: `https://urmiprajapati04.github.io/portfolio/`
