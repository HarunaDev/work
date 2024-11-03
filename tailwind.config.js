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
        'db-yellow': "var(--db-yellow)",
        'db-dark-heading': "var(--db-dark-heading)",
        'db-light-heading': "var(--db-light-heading)",
        'db-nav-icon': "var(--db-nav-icon)",
        'dashboard-bg': "var(--dashboard-bg)",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('autoprefixer')
  ],
}

