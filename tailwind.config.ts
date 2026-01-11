import type { Config } from 'tailwindcss';
import { colors, typography, borderRadius, shadows, spacing, animation } from './src/theme/tokens';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Colors from tokens
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        background: colors.background,
        surface: colors.surface,
        border: colors.border,
        text: colors.text,
        success: colors.success,
        error: colors.error,
        warning: colors.warning,
        info: colors.info,
      },

      // Typography from tokens
      fontFamily: {
        arabic: typography.fontFamily.arabic.split(', '),
        latin: typography.fontFamily.latin.split(', '),
        sans: typography.fontFamily.sans.split(', '),
      },

      fontSize: {
        h1: typography.fontSize.h1,
        h2: typography.fontSize.h2,
        h3: typography.fontSize.h3,
        h4: typography.fontSize.h4,
        h5: typography.fontSize.h5,
        h6: typography.fontSize.h6,
        'body-large': typography.fontSize.bodyLarge,
        body: typography.fontSize.body,
        'body-small': typography.fontSize.bodySmall,
        caption: typography.fontSize.caption,
        micro: typography.fontSize.micro,
      },

      fontWeight: {
        light: String(typography.fontWeight.light),
        regular: String(typography.fontWeight.regular),
        medium: String(typography.fontWeight.medium),
        semibold: String(typography.fontWeight.semibold),
        bold: String(typography.fontWeight.bold),
      },

      lineHeight: {
        tight: String(typography.lineHeight.tight),
        normal: String(typography.lineHeight.normal),
        relaxed: String(typography.lineHeight.relaxed),
      },

      letterSpacing: {
        tight: typography.letterSpacing.tight,
        normal: String(typography.letterSpacing.normal),
        wide: typography.letterSpacing.wide,
      },

      // Border radius from tokens
      borderRadius: borderRadius,

      // Shadows from tokens
      boxShadow: shadows,

      // Spacing from tokens
      spacing,

      // Animation durations and easing
      transitionDuration: {
        fast: `${animation.duration.fast}s`,
        normal: `${animation.duration.normal}s`,
        slow: `${animation.duration.slow}s`,
        'very-slow': `${animation.duration.verySlow}s`,
      },

      transitionTimingFunction: {
        ease: animation.easing.ease,
        'ease-in': animation.easing.easeIn,
        'ease-out': animation.easing.easeOut,
        'ease-in-out': animation.easing.easeInOut,
      },

      // Container sizes
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
      },

      // Max widths
      maxWidth: {
        container: '1280px',
      },

      // Keyframes for animations
      keyframes: {
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scale: {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      animation: {
        fade: 'fade 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.3s ease-out',
        'fade-in-down': 'fade-in-down 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        scale: 'scale 0.2s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },

      // Background images
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;