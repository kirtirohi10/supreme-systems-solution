# Backup & Disaster Recovery Guide

This guide describes the procedures to backup, archive, and restore the Supremesystemssolution website in case of server failure, migration, or deletion.

---

## 1. Source Code Backups
Because this is a serverless frontend project, the complete state of the site is represented by its text source code and static assets (images).

### A. Manual Local Backup
To create a complete backup archive on your local computer:
1. Open your terminal in the project root.
2. Ensure you delete `node_modules` and `.next` temporary folders to keep the size small:
   * **Windows Command Prompt:**
     ```cmd
     rmdir /s /q node_modules .next
     ```
   * **macOS / Linux Terminal:**
     ```bash
     rm -rf node_modules .next
     ```
3. Compress the remaining folders and files into a standard `.zip` file.
4. Upload this ZIP to a secure cloud storage account (e.g. Google Drive, OneDrive).

### B. Automated GitHub Backups (Highly Recommended)
Using GitHub is the safest way to store version history:
1. Create a free account at [GitHub](https://github.com).
2. Follow the initialization steps in the `version_control.md` guide to upload the repository.
3. Every time you push a change to GitHub, a complete, immutable backup is instantly created in the cloud.

---

## 2. Product Database Backups
The database is a static TypeScript file located at [products.ts](file:///C:/Users/Kirti%20Rohilla/.gemini/antigravity-ide/scratch/supreme-system-solutions/src/data/products.ts).
* **Backup Procedure:** Whenever you modify or add a product, make sure to commit the changes to your Git repository or copy the text of `src/data/products.ts` into a separate backup text file.
* **No Database Dumps Needed:** Because we do not run MySQL or PostgreSQL, you do **not** need to perform database dumps, schedule cron backup scripts, or pay for database hosting storage.

---

## 3. Asset Backups
All product photos, logo graphics, and icons reside in `public/images/`.
* **Important:** Original manufacturing photographs should be kept in a high-resolution, uncompressed repository (e.g. Dropbox). Web-served images are compressed for loading speed, so the images in the `public/` directory may have lower fidelity than your original camera prints.

---

## 4. Disaster Recovery & Restoration Procedure
If the hosting provider (e.g., Vercel) suffers an outage, or if your website deployment is deleted:

1. **Prerequisites:** Ensure you have access to your GitHub repository or your local ZIP backup file.
2. **Re-create Project on Host:**
   * Log into your Vercel or Netlify account.
   * Click **New Project** and connect your GitHub account.
   * Import the repository.
3. **Trigger Build:**
   * Next.js will automatically compile and deploy the site.
4. **Point Domain:**
   * If DNS settings were unchanged, the domain will automatically map to the new deployment once propagation completes.
5. **No Data Loss:** Because there are no dynamic databases on the server, the site will be restored to 100% functionality with zero data loss or synchronization requirements.
