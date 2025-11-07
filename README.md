# Emmytech Digital Solutions — Portfolio (Vite + React + Tailwind)

Starter portfolio scaffold built with Vite, React, Tailwind CSS and Framer Motion. Includes sample sections: Navbar, Hero, About, Skills, Services, Projects, Blog, Testimonials, Contact, Footer, theme toggle and scroll-to-top.

Getting started (PowerShell):

```powershell
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

EmailJS integration
- Replace placeholders in `Contact.jsx` with your EmailJS Service ID, Template ID and Public/User ID, or set env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_USER_ID`.

Deployment
- Deploy to Vercel by pointing the project root. Vite builds to `dist/` by default.

Notes
- Tailwind is configured with dark-mode using the `class` strategy. The app toggles a `light` class on the root for light mode.
- This is a starter scaffold. Replace placeholder images, links, resume and project details with real content.
