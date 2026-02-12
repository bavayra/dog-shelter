import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '412px',
        'tablet-sm': '480px',
        md: '768px',
        'tablet-lg': '820px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1536px',
        '4xl': '1920px',
        '5xl': '2048px',
        '6xl': '2560px',
      },
      container: { center: true, padding: '0' },
    },
  },
  plugins: [],
} satisfies Config;
