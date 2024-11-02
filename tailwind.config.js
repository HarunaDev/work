/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': "var(--primary-color)",
        'secondary-color': "var(--secondary-color)",
        'alt-color': "var(--alt-color)",
        'auth-bg': "var(--auth-bg)",
        'dark-heading': "var(--dark-heading)",
        'light-heading': "var(--light-heading)",
        'warning': "var(--warning)",
        'yellow': "var(--yellow)",
        'db-dark-heading': "var(--db-dark-heading)",
        'db-light-heading': "var(--db-light-heading)",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('autoprefixer')
  ],
}

