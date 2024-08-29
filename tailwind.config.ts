import { nextui } from '@nextui-org/react';

import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,js,jsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  theme: {
    fontFamily: {
      poppins: ['var(--font-poppins)', 'sans-serif'],
    },
    lineHeight: {
      5.5: '1.375rem',
    },
    container: {
      center: true,
      screens: {
        xl: '1248px',
        l: '1184px',
        ml: '1004px',
        ipad: '768px',
        iph: '375px',
        xs: '360px',
      },
      padding: {
        xl: '32px',
        ipad: '24px',
        iph: '12px',
      },
    },
    screens: {
      xl: '1248px',
      l: '1184px',
      ipad: '1100px',
      ml: '1004px',
      m: '716px',
      iph: '480px',
      md: '492px',
      sm: '460px',
      xs: '360px',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        lg: '0px 8px 16px -8px rgba(0, 0, 0, 0.12), 0px 16px 40px 16px rgba(0, 0, 0, 0.04)',
        blog: '0px 21px 24px 0px rgba(0, 0, 0, 0.05)',
        box: '0px 8px 8px 0px rgba(0, 0, 85, 0.02), 0px 16px 16px 0px rgba(0, 0, 85, 0.02)',
        workflow: '0px 8px 8px 0px rgba(0, 0, 85, 0.02), 0px 16px 16px 0px rgba(0, 0, 85, 0.02);',
        head: '0px 4px 12px 0px rgba(0, 0, 0, 0.08)',
        cookie: '0px 8px 8px 0px rgba(0, 0, 85, 0.02), 0px 16px 20px 4px rgba(0, 0, 85, 0.02)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    nextui({
      layout: {
        radius: {
          small: '2px',
          medium: '4px',
          large: '6px',
        },
      },
    }),
  ],
} satisfies Config;

export default config;
