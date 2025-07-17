## Relevant Files

- `web/public/superrustico.mp4` – The main video file to be displayed on the landing page.
- `web/src/pages/index.tsx` – The main landing page component that renders the video.
- `web/src/theme.ts` – MUI theme configuration for consistent styling.
- `web/.env.local.example` – Example environment variable file (included for convention).
- `web/package.json` – Project configuration and scripts.
- `README.md` – Project overview and setup instructions.
- `.gitignore` – Specifies files and folders to be ignored by Git.

### Notes

- Unit tests are not required for this MVP, but if added, they should be placed alongside the code files they are testing (e.g., `index.test.tsx` in the same directory as `index.tsx`).
- Use `npx jest` to run tests if/when they are added.

---

## Tasks

- [x] 1.0 Project Root & Git Initialization
  - [x] 1.1 Create the project root directory (`superrustico`) and navigate into it.
  - [x] 1.2 Initialize a new Git repository.
  - [x] 1.3 Set the default branch to `main`.

- [x] 2.0 Create Essential Folders and Files
  - [x] 2.1 Create the `web` directory inside the project root.
  - [x] 2.2 Create a `.gitignore` file in the root with standard Node.js and environment ignores.
  - [x] 2.3 Create a `README.md` in the root with a brief project description.

- [ ] 3.0 Set Up Next.js Web App with MUI
  - [ ] 3.1 Navigate to the `web` directory.
  - [x] 3.2 Initialize a new Next.js app with TypeScript and recommended options.
  - [ ] 3.3 Install Material UI and its dependencies.
  - [ ] 3.4 Create `src/theme.ts` with a basic MUI theme.
  - [ ] 3.5 Create `.env.local.example` in `web/` (even if empty, for convention).
  - [ ] 3.6 (Optional) Update `package.json` scripts for linting.

- [ ] 4.0 Add and Reference the Video File
  - [ ] 4.1 Copy the video file (e.g., `superrustico.mp4`) into `web/public/`.
  - [ ] 4.2 Implement the landing page in `web/src/pages/index.tsx` to display the video centered on a black background, auto-playing and looping, with no controls or extra UI.

- [x] 5.0 Version Control & GitHub Setup
  - [x] 5.1 Create a new GitHub repository using the GitHub CLI.
  - [x] 5.2 Add all files and make the initial commit.
  - [x] 5.3 Push the code to the remote repository on GitHub.

- [x] 6.0 Deploy to Vercel and Configure Domain
  - [x] 6.1 Link the project to Vercel using the Vercel CLI.
  - [x] 6.2 Deploy the site to production with Vercel.
  - [x] 6.3 Configure the custom domain `superrustico.com` in the Vercel dashboard.

- [ ] 7.0 Final Verification and Testing
  - [x] 7.1 Visit the deployed site and verify the video loads, auto-plays, loops, and there are no controls or extra UI.
  - [ ] 7.2 Confirm the site is accessible at `superrustico.com` and works on major browsers. 