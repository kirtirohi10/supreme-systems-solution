# Version Control & Release Management Guide

This document describes how to initialize, manage, and coordinate website updates using Git version control and GitHub.

---

## 1. Local Git Initialization
If the project folder is not already tracking changes with Git, initialize it locally:

1. Open your terminal in the project root.
2. Initialize the Git repository:
   ```bash
   git init
   ```
3. Create a `.gitignore` file (this is already present in your project root) to ensure temporary build artifacts and node dependencies are excluded from code tracking:
   ```text
   # .gitignore template
   node_modules/
   .next/
   out/
   .env.local
   .env.development.local
   .env.test.local
   .env.production.local
   npm-debug.log*
   yarn-debug.log*
   yarn-error.log*
   .vercel
   ```
4. Add and commit all files:
   ```bash
   git add .
   git commit -m "feat: initial project handover commit"
   ```

---

## 2. GitHub Setup & Remote Integration
To host the repository in the cloud:
1. Log in to [GitHub](https://github.com) and click **New Repository**.
2. Name the repository (e.g., `supreme-system-solutions`). Keep the repo **Private** to protect your source code, and leave options to add README, .gitignore, or License unselected.
3. Link your local project to the GitHub remote repository and push:
   ```bash
   git remote add origin https://github.com/your-username/supreme-system-solutions.git
   git branch -M main
   git push -u origin main
   ```

---

## 3. Branching Recommendations
To maintain stability on the live website, follow this branching architecture:

```text
  ┌──────────────────────────────────────────────────────────┐
  │                        main                              │  <--- Live website (production builds from here)
  └────────────────────────────▲─────────────────────────────┘
                               │ (Pull Request Merge)
  ┌────────────────────────────┴─────────────────────────────┐
  │                     development                          │  <--- Pre-production staging (compile checks)
  └────────────────────────────▲─────────────────────────────┘
                               │ (Merge after review)
  ┌────────────────────────────┴─────────────────────────────┐
  │                 feature/add-new-products                 │  <--- Developer edits (work branches)
  └──────────────────────────────────────────────────────────┘
```

* **`main`**: represents the production code. Vercel automatically deploys any changes pushed to `main` to your live domain. Never commit directly to `main`.
* **`development`**: serves as the integration branch for new changes. Deployments on this branch can point to a staging preview URL to review edits before going live.
* **`feature/...`**: developer-specific branches created to execute small changes (e.g. `feature/edit-phone-numbers`, `feature/update-home-text`). Once changes compile successfully, they are merged into `development`.

---

## 4. Release Management Workflow
Whenever you want to release updates to the live domain:
1. Make code edits on your feature branch.
2. Merge the feature branch into `development` and run `npm run build` locally to verify there are no compilation syntax errors.
3. On GitHub, create a **Pull Request (PR)** from `development` to `main`.
4. Review the differences. If verified, approve the merge.
5. Vercel will automatically detect the merge to `main`, run build routines, and deploy the new version live with zero downtime.
