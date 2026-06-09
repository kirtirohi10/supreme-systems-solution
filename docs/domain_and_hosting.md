# Domain & Hosting Connection Guide

This guide explains how to connect custom domains, manage DNS configurations, secure the site with SSL certificates, and migrate hosting providers.

---

## 1. Domain Registration & Management
To host the site live under a custom URL (e.g. `supremesystemssolution.com`), you must purchase a domain from a domain registrar.
* **Popular Registrars:** Namecheap, GoDaddy, Hostinger, Name.com, Cloudflare.
* **Domain Renewal:** Domain names are purchased on a lease basis (typically 1 to 10 years). You must configure **Auto-Renew** in your registrar's dashboard to prevent the domain from expiring. If a domain expires, your site will go offline, and the domain may be auctioned off.

---

## 2. Connecting a Custom Domain to Vercel (Recommended Host)
1. Sign in to your **Vercel Dashboard** and open your project.
2. Go to **Settings** > **Domains**.
3. Enter your domain name in the input box (e.g., `supremesystemssolution.com` or `www.supremesystemssolution.com`) and click **Add**.
4. Vercel will analyze your domain and show the required DNS records.

---

## 3. Configuring DNS Records
To link your domain name to your Vercel hosting, log in to your domain registrar's DNS management console and configure the following records:

| Record Type | Host / Name | Value / Destination | TTL | Description |
|---|---|---|---|---|
| **A** | `@` (or blank) | `76.76.21.21` | Auto (or 3600) | Points root domain directly to Vercel's IP |
| **CNAME** | `www` | `cname.vercel-dns.com` | Auto (or 3600) | Maps the www subdomain to Vercel |

*Note: Allow up to 2–24 hours for DNS changes to propagate across the internet.*

---

## 4. HTTPS & SSL Certificates
* **How SSL works:** Secure Sockets Layer (SSL) encrypts the connection between the user's browser and your hosting server. It displays the padlock icon in the browser address bar and serves the site over `https://`.
* **Automatic SSL:** Vercel and Netlify issue and renew free SSL certificates automatically via **Let's Encrypt**. Once DNS propagation is complete, your HTTPS certificate will be generated automatically. No manual renewal is required.
* **VPS Manual SSL:** If deploying on a VPS, configure Nginx and use `certbot` to generate a free certificate:
  ```bash
  sudo apt install certbot python3-certbot-nginx
  sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
  ```

---

## 5. Migrating Hosting Providers
If you decide to migrate the site from Vercel to another provider (e.g. Netlify, Hostinger, AWS, VPS):
1. **Set Up New Hosting:** Import your source code repository into the new provider and run a test build. Verify the preview URL works correctly.
2. **Update DNS Name Servers:** If the new host manages DNS, change the Name Servers (NS) in your domain registrar to point to the new host.
3. **Alternatively, Update A/CNAME Records:** If you keep your registrar DNS, change the A/CNAME record values to point to the new hosting IP/target.
4. **Transition Period:** Wait 24 hours to ensure all DNS routes update. Do not cancel the old hosting subscription until this time has elapsed.
