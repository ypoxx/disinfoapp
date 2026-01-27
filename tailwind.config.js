/** @type {import('tailwindcss').Config} */
import telekomPreset from '@telekom/design-tokens/dist/tailwindcss-preset/design-tokens.config.js';
import defaultColors from 'tailwindcss/colors';

export default {
  presets: [telekomPreset],
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Restore default Tailwind colors that may be overridden by preset
      colors: {
        // Essential colors for DiscoverFeed
        black: defaultColors.black,
        white: defaultColors.white,
        gray: defaultColors.gray,
        slate: defaultColors.slate,
        zinc: defaultColors.zinc,
        neutral: defaultColors.neutral,
        stone: defaultColors.stone,
        red: defaultColors.red,
        orange: defaultColors.orange,
        amber: defaultColors.amber,
        yellow: defaultColors.yellow,
        lime: defaultColors.lime,
        green: defaultColors.green,
        emerald: defaultColors.emerald,
        teal: defaultColors.teal,
        cyan: defaultColors.cyan,
        sky: defaultColors.sky,
        blue: defaultColors.blue,
        indigo: defaultColors.indigo,
        violet: defaultColors.violet,
        purple: defaultColors.purple,
        fuchsia: defaultColors.fuchsia,
        pink: defaultColors.pink,
        rose: defaultColors.rose,
        // Bridge existing semantic colors to Telekom tokens for compatibility
        border: 'var(--telekom-color-ui-border-standard)',
        input: 'var(--telekom-color-ui-border-standard)',
        ring: 'var(--telekom-color-functional-focus-standard)',
        background: 'var(--telekom-color-background-canvas)',
        foreground: 'var(--telekom-color-text-and-icon-standard)',
        card: {
          DEFAULT: 'var(--telekom-color-background-surface)',
          foreground: 'var(--telekom-color-text-and-icon-standard)',
        },
        popover: {
          DEFAULT: 'var(--telekom-color-background-surface)',
          foreground: 'var(--telekom-color-text-and-icon-standard)',
        },
        muted: {
          DEFAULT: 'var(--telekom-color-ui-subtle)',
          foreground: 'var(--telekom-color-text-and-icon-additional)',
        },
        accent: {
          DEFAULT: 'var(--telekom-color-ui-subtle)',
          foreground: 'var(--telekom-color-text-and-icon-standard)',
        },
        destructive: {
          DEFAULT: 'var(--telekom-color-functional-danger-standard)',
          foreground: 'var(--telekom-color-text-and-icon-white-standard)',
        },
        secondary: {
          DEFAULT: 'var(--telekom-color-ui-subtle)',
          foreground: 'var(--telekom-color-text-and-icon-standard)',
        },
        // Semantic status colors
        success: {
          DEFAULT: 'var(--telekom-color-functional-success-standard)',
          subtle: 'var(--telekom-color-functional-success-subtle)',
          foreground: 'var(--telekom-color-text-and-icon-functional-success)',
        },
        warning: {
          DEFAULT: 'var(--telekom-color-functional-warning-standard)',
          subtle: 'var(--telekom-color-functional-warning-subtle)',
          foreground: 'var(--telekom-color-text-and-icon-functional-warning)',
        },
        danger: {
          DEFAULT: 'var(--telekom-color-functional-danger-standard)',
          subtle: 'var(--telekom-color-functional-danger-subtle)',
          foreground: 'var(--telekom-color-text-and-icon-functional-danger)',
        },
        info: {
          DEFAULT: 'var(--telekom-color-functional-informational-standard)',
          subtle: 'var(--telekom-color-functional-informational-subtle)',
          foreground: 'var(--telekom-color-text-and-icon-functional-informational)',
        },
      },
      borderRadius: {
        lg: 'var(--telekom-radius-large)',
        md: 'var(--telekom-radius-standard)',
        sm: 'var(--telekom-radius-small)',
      },
      boxShadow: {
        sm: 'var(--telekom-shadow-raised-standard)',
        DEFAULT: 'var(--telekom-shadow-raised-standard)',
        md: 'var(--telekom-shadow-floating-standard)',
        lg: 'var(--telekom-shadow-overlay)',
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
        'slide-up': {
          from: { transform: 'translateY(10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          from: { transform: 'translateY(-10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
