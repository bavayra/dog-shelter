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
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1536px',
        '4xl': '1920px',
        '5xl': '2048px',
        '5xl-mid': {
          raw: '(min-width: 2048px) and (min-height: 1152px) and (max-height: 1536px)',
        },
        '5xl-tall': {
          raw: '(min-width: 2048px) and (min-height: 1537px)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
