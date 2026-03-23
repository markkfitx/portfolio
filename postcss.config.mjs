/**
 * Tailwind CSS v4 runs as a PostCSS plugin (no separate tailwind.config content array).
 * Theme and `@source` live in `app/globals.css`.
 * @see https://tailwindcss.com/docs/installation/framework-guides/nextjs
 * @type {import("postcss-load-config").Config}
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
