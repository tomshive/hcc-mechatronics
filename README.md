# HCC Mechatronics — Website

Built from the Figma design (HCC Mechatronics) — React + Vite + Tailwind CSS.

## What's included

- **Homepage** (`/`) — hero, technician bio, services, gallery, why-choose-us, maintenance
  plans, testimonials, and a "Send a Message" quick contact form.
- **Hire Service page** (`/hire-service`) — a detailed intake form (contact info, vehicle
  details, service needed, budget, urgency, problem description).
- Both forms: (1) POST the lead to a PHP backend so it's logged on your server, and (2)
  immediately open WhatsApp with the details pre-filled, so the customer finishes the
  conversation with you directly.

## 1. Run it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## 2. Replace the placeholder photos

I could not pull your actual Figma photo exports into this build, so 6 images are
placeholders (clearly labeled) in `public/images/`. Replace these files with real exports
from Figma:

| File | What it should be |
|---|---|
| `public/images/hero-car.svg` | Hero background — the car photo behind "Certified Hybrid, EV & Automotive Specialist" |
| `public/images/technician.svg` | Portrait of Oluseun (Meet The Technician section) |
| `public/images/why-choose.svg` | Technician working photo (Why Choose HCC section) |
| `public/images/gallery-1.svg` | Large workshop/engine bay photo |
| `public/images/gallery-2.svg` | Workshop photo (top right) |
| `public/images/gallery-3.svg` | Workshop photo (bottom right) |

In Figma: select the layer → right-click → **Export** → PNG/JPG at 2x. Rename to
`.jpg`/`.png` and update the `src="/images/..."` reference in the relevant component
(`Hero.jsx`, `TechnicianSection.jsx`, `WhyChooseSection.jsx`, `GallerySection.jsx`,
`FutureProofBanner.jsx`).

## 3. Wire up the WhatsApp number

Everything reads from one place: `src/siteConfig.js`

```js
export const SITE = {
  phoneDisplay: "+234 812 517 9993",
  phoneWhatsApp: "2348125179993", // digits only, country code first
  ...
};
```

Update this if the number changes — every WhatsApp link across both pages updates
automatically.

## 4. Deploy the PHP lead-logging backend (cPanel)

1. Upload `php/submit-lead.php` to your hosting, e.g. `public_html/php/submit-lead.php`.
2. Open it and set `$notifyEmail` to the inbox that should get a notification per lead
   (optional — leads are logged either way).
3. In `src/useLeadSubmit.js`, set `LEAD_ENDPOINT` to the **full URL** of the uploaded
   file, e.g.:
   ```js
   export const LEAD_ENDPOINT = "https://tomshivehq.com/php/submit-lead.php";
   ```
4. The script auto-creates a `leads/leads.csv` file next to itself (with a `.htaccess`
   blocking public access) — open it in Excel/Sheets any time to see submissions.
5. Rebuild the site (`npm run build`) after changing `LEAD_ENDPOINT`.

Note: if the PHP request fails for any reason (offline, misconfigured URL), the form
still opens WhatsApp — the lead is never blocked from reaching you, it just might not be
logged that one time.

## 5. Build for production & deploy

```bash
npm run build
```

This outputs static files to `dist/`. Upload the **contents** of `dist/` to your
hosting's public folder (e.g. `public_html/`). Since this is a single-page app with
routing (`react-router-dom`), add this `.htaccess` in the same folder so
`/hire-service` works on refresh/direct link:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Project structure

```
src/
  components/       Reusable homepage sections (Navbar, Hero, Footer, etc.)
  pages/
    Home.jsx         Homepage — composes all sections
    HireService.jsx  Detailed hire-service intake form
  siteConfig.js       Business info, nav links, services, plans, testimonials — edit here
  useLeadSubmit.js     Shared hook: logs lead to PHP + opens WhatsApp
php/
  submit-lead.php      Lead-logging backend for cPanel
public/images/          Photo placeholders — swap with real Figma exports
```
