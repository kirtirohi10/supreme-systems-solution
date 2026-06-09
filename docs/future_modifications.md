# Future Modification Guide (Beginner-Friendly)

This guide provides simple, step-by-step instructions for non-technical administrators or junior developers to edit the site's content, update contact information, manage products, and modify search engine optimization (SEO) configurations.

---

## 1. Updating Company & Contact Information
The company address, phone numbers, and emails are hardcoded in the templates. To change them, open these files and search for the current values:

### A. Phone Number (`+91 9811922446`)
* **Files containing this value:**
  1. `src/components/Navbar.tsx` (Mobile call button/link)
  2. `src/components/Footer.tsx` (Footer contacts column)
  3. `src/app/page.tsx` (Hero CTA and Contact Section links)
  4. `src/app/contact/page.tsx` (Primary contact card details)

### B. Email Address (`info.supremesystemssolution@gmail.com`)
* **Files containing this value:**
  1. `src/components/Footer.tsx`
  2. `src/app/page.tsx` (Inquiry section)
  3. `src/app/contact/page.tsx` (Email buttons)

### C. Physical Address
* **Files containing this value:**
  1. `src/components/Footer.tsx`
  2. `src/app/contact/page.tsx`
  * *Note:* If you move to a new factory, update the Google Maps embed URL inside `src/app/contact/page.tsx` and `src/app/page.tsx` by grabbing the new `iframe` link from Google Maps share options.

---

## 2. Modifying Product Specifications & Catalog
The product catalog data is decoupled from the UI rendering and resides in a single database file: [products.ts](file:///C:/Users/Kirti%20Rohilla/.gemini/antigravity-ide/scratch/supreme-system-solutions/src/data/products.ts).

### How to Edit an Existing Product:
1. Open [products.ts](file:///C:/Users/Kirti%20Rohilla/.gemini/antigravity-ide/scratch/supreme-system-solutions/src/data/products.ts).
2. Locate the product block (e.g., `slug: 'toroidal-inductors'`).
3. You can edit any parameter:
   * **`name`**: Product title display.
   * **`description`**: Paragraph description.
   * **`imageUrl`**: Location of image (e.g. `/images/showcase-1.jpg`).
   * **`features`**: Array of feature bullet points.
   * **`industries`**: Array of target market fields.
   * **`benefits`**: Array of customer benefits.
   * **`customizations`**: Custom specifications parameters.

### How to Add a New Product:
1. Copy an existing product block from [products.ts](file:///C:/Users/Kirti%20Rohilla/.gemini/antigravity-ide/scratch/supreme-system-solutions/src/data/products.ts).
2. Append it to the array.
3. Make sure to choose a unique `slug` (e.g., `high-voltage-transformer`).
4. Save the file. The new product will instantly show up in the `/products` search grid, home page showcase, and dynamic details route.

---

## 3. Replacing Images
To replace an image:
1. Save the new image in `public/images/`.
2. Give it a descriptive name (use only lowercase, hyphens, and standard extension like `.png` or `.jpg`).
3. Open the file that displays the image (e.g., [products.ts](file:///C:/Users/Kirti%20Rohilla/.gemini/antigravity-ide/scratch/supreme-system-solutions/src/data/products.ts) for products, or [ProductSlider.tsx](file:///C:/Users/Kirti%20Rohilla/.gemini/antigravity-ide/scratch/supreme-system-solutions/src/components/ProductSlider.tsx) for slideshow).
4. Update the path string to point to your new image (e.g. `/images/my-new-image.png`).

---

## 4. Editing Homepage Layout Sections
The homepage is located at `src/app/page.tsx`. It consists of separate sections, easily located by code comments:
* **Section 1: Hero Section (Line 46):** Edit headings, subtexts, and CTA buttons here.
* **Section 2: Stats Counter (Line 114):** Change metrics values (e.g. "25+ Years" or "10M+ Coils").
* **Section 3: Company Intro (Line 138):** Edit brief overview text and the factory floor illustration.
* **Section 4: Product Showcase (Line 194):** Grabs product entries from `products.ts` and shows them.
* **Section 5: Why Choose Us (Line 268):** Core value selling statements.
* **Section 6: Timeline (Line 356):** Breakdown of client onboarding workflow.
* **Section 7: Industries (Line 422):** Quick links and descriptions of client industries.
* **Section 9: Contact Form (Line 490):** Map embed code and inquiry inputs.

---

## 5. Adding New Static Pages
If you want to add a page (e.g., a "Certifications" page at `/certifications`):
1. Create a folder named `certifications` inside `src/app/`.
2. Create a file named `page.tsx` inside that folder.
3. Add basic page boilerplate structure:
   ```tsx
   import React from 'react';

   export default function CertificationsPage() {
     return (
       <div className="max-w-7xl mx-auto px-4 py-20">
         <h1 className="text-4xl font-bold font-display">Certifications</h1>
         <p className="mt-4">Page content goes here...</p>
       </div>
     );
   }
   ```
4. Save the file. Next.js automatically creates the route at `http://localhost:3000/certifications`.
5. Link it in `src/components/Navbar.tsx` and `src/components/Footer.tsx` so users can navigate to it.

---

## 6. Modifying Search Engine Optimization (SEO) & Metadata
To adjust how Google displays your pages in search results:
* **Global Metadata:** Edit `src/app/layout.tsx` to update the default site-wide title template and description.
* **Static Pages SEO:** Each static page contains a metadata export at the top. For example, in `src/app/about/page.tsx`:
  ```tsx
  export const metadata = {
    title: 'About Us | Supreme Systems Solution',
    description: 'Learn about our heritage of precision manufacturing...',
  };
  ```
  Edit these text strings to optimize keywords for search engine rankings.
