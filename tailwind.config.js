/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      colors: {
        instagram: {
          pink: '#E1306C', // Couleur rose d'Instagram
          orange: '#F58529', // Couleur orange d'Instagram
          purple: '#8a3ab9', // Couleur violette d'Instagram
        },
      },
    },
  },
}

