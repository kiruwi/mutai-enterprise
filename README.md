# Mutai Enterprises Logistics Website

A modern, responsive logistics and freight-forwarding website for **Mutai Enterprises** – connecting businesses across Kenya and Uganda.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS** to deliver fast performance, SEO-friendly pages, and an intuitive developer experience.

---

## ✨  Features

- React / Next.js 14 with the App Router and `src/app` directory
- TypeScript for type-safe components and APIs
- Tailwind CSS utility-first styling with custom fonts & colour palette
- Fully responsive UI: hero, service cards, CTA banner, navbar & mobile menu
- Dynamic metadata (`export const metadata`) for every page
- Continuous deployment via **Netlify** on every push to `main`

---

## 🖥️  Local Development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the dev server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000` (or the next free port).

---

## 🏗️  Building Locally

The project is configured for a static export via `next build` (see `next.config.*`).

```bash
npm run build            # creates the optimized production build
```

The generated static files are placed in the `out/` directory and are what get deployed to GitHub Pages.

To preview the production build locally:

```bash
npx serve out  # or any static-file server
```

---

## 🚀  Deployment (Netlify)

Deployment is fully automated:

1. Commit & push to the `main` branch.
2. Netlify automatically builds and deploys your site:
   - Installs dependencies & builds the site (`npm run build`).
   - Deploys the `out/` directory to the Netlify CDN.
   
3. Your live site will be available at:

   ```
   https://<your-netlify-subdomain>.netlify.app
   ```

No manual steps required – Netlify handles the rest.

---

## 📂  Project Structure (high-level)

```
mutai-enterprise/
├─ src/
│  ├─ app/               # Next.js App Router pages & layouts
│  ├─ components/        # Re-usable UI components
│  ├─ images/            # Static images
│  └─ styles/            # Global & component-specific CSS
├─ public/               # Assets served as-is
├─ .github/workflows/    # GitHub Actions CI / CD
├─ tailwind.config.ts    # Tailwind customisation
├─ next.config.mjs       # Next.js configuration (static export)
└─ package.json          # Scripts & dependencies
```

---

## 📜  Available npm Scripts

| Script        | Purpose                                   |
| ------------- | ----------------------------------------- |
| `dev`         | Start the development server              |
| `build`       | Build for production / static export      |
| `start`       | Start the production server (if required) |
| `lint`        | Run ESLint checks                         |
| `test`        | Run unit tests via Jest                   |
| `format`      | Format code with Prettier                 |

---

## 🛠️  Tech Stack

- **Next.js 14** – React framework for production
- **TypeScript** – static typing
- **Tailwind CSS** – utility-first styling
- **Jest** / React-Testing-Library – unit testing
- **Netlify** – Continuous deployment & global CDN

---

## 🤝  Contributing

Pull requests are welcome! Feel free to open issues for bugs, feature ideas, or questions.

---

## 📄  License

This project is licensed under the **MIT License** – see the [`LICENSE`](LICENSE) file for details.