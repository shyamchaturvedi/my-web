# How to Deploy to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com).
It makes use of `vercel.json` for "Clean URLs" (e.g. `your-site.com/about` instead of `about.html`).

## Prerequisite: GitHub
1. Create a repository on GitHub.
2. Push all the files in this folder to that repository.
   - `index.html`
   - `about.html`
   - `courses.html`
   - `faculty.html`
   - `contact.html`
   - `style.css`
   - `script.js`
   - `vercel.json`
   - `images/` folder

## Steps to Deploy
1. Go to **Vercel.com** and Sign Up/Log In.
2. Click **"Add New"** > **"Project"**.
3. Import your GitHub repository.
4. Vercel will auto-detect it's a static site.
5. Click **Deploy**.

## Testing Locally
Because this site uses "Clean URLs" (links like `/about` instead of `about.html`), **it will not work correctly if you just double-click index.html** in your file explorer. The links will be broken.

To test locally, you need a local server.
If you have Node.js installed, run:
```bash
npx serve
```
Then open `http://localhost:3000`.
