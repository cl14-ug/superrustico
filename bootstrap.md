# Superrustico.com MVP Bootstrap Instructions (Streamlined)

## 0. Prerequisites

- **Node.js LTS** installed (`node -v`)
- **npm** installed (`npm -v`)
- **Git** installed (`git --version`)
- **GitHub CLI** (`gh`) installed and authenticated (`gh --version`, `gh auth login`)
- **Vercel CLI** installed and authenticated (`vercel --version`, `vercel login`)

## 1. Project Setup

1. **Create project root and initialize Git:**
   ```sh
   mkdir superrustico && cd superrustico
   git init
   git branch -M main
   ```

2. **Create essential folders:**
   ```sh
   mkdir web
   ```

3. **.gitignore:**  
   Create a `.gitignore` in the root with at least:
   ```
   node_modules/
   .env
   .env.local
   ```

4. **README:**  
   Create a `README.md` with:
   ```
   # superrustico.com
   Minimalist video landing page MVP.
   ```

## 2. Web App (Next.js + MUI)

1. **Initialize Next.js app in `web/`:**
   ```sh
   cd web
   npx create-next-app@latest . --typescript --eslint --app --src-dir --import-alias "@/*" --use-npm
   ```

2. **Install Material UI:**
   ```sh
   npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
   ```

3. **Set up basic MUI theme:**  
   Create `src/theme.ts`:
   ```typescript
   import { createTheme } from '@mui/material/styles';
   export const theme = createTheme({ palette: { mode: 'light', primary: { main: '#1976d2' } } });
   ```

4. **Environment variables:**  
   Create `.env.local.example`:
   ```
   # No env vars needed for MVP, but file included for convention
   ```

5. **Update `package.json` scripts (optional):**
   - `"lint": "next lint"`

6. **Implement the landing page:**  
   - Use a single page with a black background and a centered, auto-playing, looping MP4 video.
   - No navigation, text, or controls.

## 3. Version Control & GitHub

1. **Create GitHub repo and push:**
   ```sh
   gh repo create superrustico --private --source=. --remote=origin --push --confirm
   git remote -v  # verify
   git add .
   git commit -m "feat: initial project scaffold for superrustico.com MVP"
   git push -u origin main
   ```

## 4. Deployment (Vercel)

1. **Link and deploy with Vercel:**
   ```sh
   vercel link --yes
   vercel --prod
   ```
   - Set up the domain `superrustico.com` in the Vercel dashboard.

## 5. Final Checks

- **Test** the site at the deployed URL and on the custom domain.
- **Verify** the video loads, auto-plays, loops, and there are no controls or extra UI.
- **No further backend, mobile, or CI/CD setup is required for this MVP.**

---

**Note:**  
- Supabase setup, mobile app scaffolding, shared code, and advanced CI/CD are not required for this MVP per the PRD.
- You may add them later as the project evolves.