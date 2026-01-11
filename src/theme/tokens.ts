/**
 * ATEX Design System Tokens
 * Single source of truth for all design tokens
 * Based on brand extraction from https://atex.sa/rec/smart-home
 */

// ============================================================================
// COLORS
// ============================================================================

export const colors = {
  // Primary Brand Color (Orange - ATEX Brand Color)
  primary: {
    DEFAULT: '#EA9436', // ATEX orange brand color
    hover: '#D68429',   // Slightly darker for hover
    active: '#C4751D',  // Active state
    light: '#F0A84D',   // Lighter variant
    lighter: '#F5BD6D', // Even lighter
  },

  // Secondary Color (Dark Slate)
  secondary: {
    DEFAULT: '#1E293B', // slate-800
    light: '#334155',   // slate-700
    lighter: '#475569', // slate-600
    dark: '#0F172A',    // slate-900
  },

  // Accent Color (Teal)
  accent: {
    DEFAULT: '#0D9488', // teal-600
    hover: '#0F766E',   // teal-700
    light: '#14B8A6',   // teal-500
  },

  // Background Colors
  background: {
    DEFAULT: '#FFFFFF',      // white
    secondary: '#F8FAFC',    // slate-50
    tertiary: '#F1F5F9',     // slate-100
  },

  // Surface Colors
  surface: {
    DEFAULT: '#FFFFFF',      // white
    hover: '#F8FAFC',        // slate-50
    elevated: '#F8FAFC',     // slate-50
  },

  // Border Colors
  border: {
    DEFAULT: '#E2E8F0',      // slate-200
    secondary: '#CBD5E1',    // slate-300
    focus: 'rgba(234, 148, 54, 0.5)', // primary with 50% opacity
  },

  // Text Colors
  text: {
    primary: '#1E293B',      // slate-800
    secondary: '#475569',    // slate-600
    muted: '#94A3B8',        // slate-400
    disabled: '#CBD5E1',     // slate-300
    inverse: '#FFFFFF',      // white
  },

  // Semantic Colors
  success: {
    DEFAULT: '#10B981',      // emerald-500
    light: '#D1FAE5',        // emerald-100
  },
  error: {
    DEFAULT: '#EF4444',      // red-500
    light: '#FEE2E2',        // red-100
  },
  warning: {
    DEFAULT: '#EA9436',      // Same as primary
    light: '#FEF3C7',        // amber-100
  },
  info: {
    DEFAULT: '#3B82F6',      // blue-500
    light: '#DBEAFE',        // blue-100
  },
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  // Font Families
  fontFamily: {
    arabic: "'IBM Plex Sans Arabic', 'Tajawal', 'Cairo', sans-serif",
    latin: "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    sans: "'Inter', 'IBM Plex Sans Arabic', 'Tajawal', 'Cairo', sans-serif",
  },

  // Font Weights
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Font Sizes (Rem-based)
  fontSize: {
    // Headings
    h1: '3rem',        // 48px - Hero titles
    h2: '2.25rem',     // 36px - Section titles
    h3: '1.75rem',     // 28px - Subsection titles
    h4: '1.5rem',      // 24px - Card titles
    h5: '1.25rem',     // 20px - Small headings
    h6: '1rem',        // 16px - Emphasized text
    
    // Body
    bodyLarge: '1.125rem', // 18px - Lead paragraphs
    body: '1rem',          // 16px - Standard body text
    bodySmall: '0.875rem', // 14px - Secondary content
    
    // Caption
    caption: '0.75rem',    // 12px - Labels, helper text
    micro: '0.625rem',     // 10px - Very small text
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,      // Headings
    normal: 1.5,     // Body text
    relaxed: 1.75,   // Lead paragraphs
  },

  // Letter Spacing
  letterSpacing: {
    tight: '-0.02em', // Large headings
    normal: 0,        // Body text
    wide: '0.05em',   // All caps, labels
  },
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  none: '0',
  small: '0.25rem',    // 4px - Tags, badges
  medium: '0.5rem',    // 8px - Cards, buttons, inputs (default)
  large: '0.75rem',    // 12px - Large cards, modals
  extraLarge: '1rem',  // 16px - Hero sections
  full: '9999px',      // Full round - Pills, avatars
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
  none: 'none',
  xsmall: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  small: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  extraLarge: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
} as const;

// ============================================================================
// SPACING (Rem-based, follows 8pt grid)
// ============================================================================

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px - Default
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px - Section padding
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px - Large sections
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px - Hero spacing
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
} as const;

// ============================================================================
// BUTTON STYLES
// ============================================================================

export const button = {
  height: {
    small: '2.5rem',   // 40px
    medium: '3rem',    // 48px
    large: '3.5rem',   // 56px
  },
  padding: {
    small: '0.5rem 1rem',      // 8px 16px
    medium: '0.75rem 1.5rem',  // 12px 24px
    large: '1rem 2rem',        // 16px 32px
  },
  borderRadius: '0.5rem',  // 8px
  transition: 'all 0.2s ease',
} as const;

// ============================================================================
// INPUT STYLES
// ============================================================================

export const input = {
  height: '3rem',              // 48px
  padding: '0.75rem 1rem',     // 12px 16px
  borderRadius: '0.5rem',      // 8px
  fontSize: '1rem',            // 16px
  transition: 'all 0.2s ease',
} as const;

// ============================================================================
// CARD STYLES
// ============================================================================

export const card = {
  borderRadius: '0.75rem',     // 12px
  padding: '1.5rem',           // 24px
  paddingSmall: '1rem',        // 16px
  paddingLarge: '2rem',        // 32px
  transition: 'all 0.2s ease',
  hoverTransform: 'translateY(-2px)',
} as const;

// ============================================================================
// ANIMATION
// ============================================================================

export const animation = {
  duration: {
    fast: 0.15,      // Micro-interactions
    normal: 0.2,     // Most animations
    slow: 0.3,       // Page transitions
    verySlow: 0.5,   // Hero animations
  },
  easing: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// ============================================================================
// LAYOUT
// ============================================================================

export const layout = {
  container: {
    small: '640px',   // sm
    medium: '768px',  // md
    large: '1024px',  // lg
    extraLarge: '1280px', // xl
    ultraLarge: '1536px', // 2xl
  },
  sectionPadding: {
    mobile: '3rem',       // 48px
    tablet: '4rem',       // 64px
    desktop: '6rem',      // 96px
  },
  contentPadding: {
    mobile: '1rem',       // 16px
    tablet: '1.5rem',     // 24px
    desktop: '2rem',      // 32px
  },
} as const;

// ============================================================================
// BREAKPOINTS (for JavaScript reference)
// ============================================================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// Z-INDEX
// ============================================================================

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  notification: 1080,
} as const;

// ============================================================================
// MOBILE-SPECIFIC TOKENS
// ============================================================================

export const mobile = {
  touchTarget: {
    minimum: '2.75rem',  // 44px
    preferred: '3rem',   // 48px
  },
  spacing: {
    section: '3rem',     // 48px
    container: '1rem',   // 16px
    card: '1rem',        // 16px
  },
  typography: {
    h1: '2rem',          // 32px
    h2: '1.5rem',        // 24px
    h3: '1.25rem',       // 20px
    body: '1rem',        // 16px
  },
} as const;

// ============================================================================
// COMPLETE TOKENS EXPORT
// ============================================================================

export const tokens = {
  colors,
  typography,
  borderRadius,
  shadows,
  spacing,
  button,
  input,
  card,
  animation,
  layout,
  breakpoints,
  zIndex,
  mobile,
} as const;

export type Tokens = typeof tokens;