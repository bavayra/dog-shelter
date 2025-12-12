module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // custom color palette created with tailwindshades.app
        primary: {
          DEFAULT: '#5071BA',
          50: '#F6F8FC', // custom very light - bgs or highlights
          100: '#EEF1F8', // custom light - bgs or containers
          200: '#B9C6E3', // custom light-medium - bgs or medium elements
          500: '#5071BA', // custom medium - base
          700: '#304470', // custom dark - interactive elements
          900: '#182238', // custom very dark - text
        },
        accent: {
          DEFAULT: '#5881CF',
          500: '#5881CF',
        },
        neutral: {
          DEFAULT: '#979CB0',
          50: '#D0D7F2',
          100: '#C1C7E0',
          300: '#ABB0C7',
          500: '#979CB0',
          700: '#747787',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
