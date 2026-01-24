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
        xl2: '1440px',
        xl3: '1536px',
        xl4: '1920px',
      },
    },
  },
  plugins: [],
} satisfies Config;
