/**
 * Color Design Tokens
 * Figma Foundation Node ID: 3459:1130
 * 
 * 이 파일은 프로젝트 전체에서 사용될 색상 토큰을 정의합니다.
 * 라이트모드와 다크모드를 모두 지원하며, CSS 변수와 매핑됩니다.
 */

// ========================================
// Core Color Palette
// ========================================

export const BLUE = {
  '05': '#F0F7FF',
  '10': '#DBEEFF', 
  '20': '#BDDBFF',
  '30': '#93BEFF',
  '40': '#6DA5FA', // System color
  '50': '#497CFF',
  '60': '#3A5CF3', // System color
  '70': '#274AE1',
  '80': '#1530A6',
  '90': '#0B2184',
} as const;

export const GRAY = {
  'WHITE': '#FFFFFF',
  '05': '#F2F2F2',
  '10': '#E4E4E4',
  '20': '#D4D3D3',
  '30': '#C7C7C7',
  '40': '#ABABAB',
  '50': '#919191',
  '60': '#777777',
  '70': '#5F5F5F',
  '80': '#333333',
  '90': '#1C1C1C',
  'BLACK': '#000000',
} as const;

export const RED = {
  '05': '#FDD7DC',
  '10': '#F797A4',
  '20': '#F4677A',
  '30': '#F03851', // Error color
  '40': '#E4112E',
  '50': '#B40E24',
  '60': '#850A1B',
} as const;

export const GREEN = {
  '05': '#D3F3E0',
  '10': '#92E6B9',
  '20': '#15D66F',
  '30': '#12B75F', // Success color
  '40': '#109C51',
  '50': '#0E723C',
  '60': '#084424',
} as const;

export const YELLOW = {
  '05': '#FFE499',
  '10': '#FFD666',
  '20': '#FFC933',
  '30': '#FFB300',
  '40': '#EBA500',
  '50': '#D69600',
  '60': '#B27D00',
} as const;

export const COOL_GRAY = {
  '01': '#F8F8FA',
  '05': '#F6F6F9',
  '10': '#EDEEF2',
  '20': '#DDDFE5',
  '30': '#D2D4DD',
  '40': '#C7C9D5',
  '50': '#BBBECD',
  '60': '#B0B3C4',
} as const;

// ========================================
// Gradient Definitions
// ========================================

export const GRADIENTS = {
  PRIMARY: 'linear-gradient(135deg, #6DA5FA 0%, #92EAF5 100%)',
  SKELETON: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 48.5%, transparent 100%)',
} as const;

// ========================================
// Semantic Color Tokens (Light Mode)
// ========================================

export const SEMANTIC_COLORS_LIGHT = {
  // Background Colors
  background: {
    primary: GRAY.WHITE,
    secondary: GRAY['05'],
    tertiary: GRAY['10'],
    elevated: GRAY.WHITE,
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  
  // Text Colors
  text: {
    primary: GRAY.BLACK,
    secondary: GRAY['60'],
    tertiary: GRAY['50'],
    disabled: GRAY['40'],
    inverse: GRAY.WHITE,
  },
  
  // Brand Colors
  brand: {
    primary: BLUE['60'],
    secondary: BLUE['40'],
    tertiary: BLUE['20'],
    background: BLUE['05'],
  },
  
  // Status Colors
  status: {
    success: GREEN['30'],
    successBackground: GREEN['05'],
    error: RED['30'],
    errorBackground: RED['05'],
    warning: YELLOW['30'],
    warningBackground: YELLOW['05'],
    info: BLUE['50'],
    infoBackground: BLUE['05'],
  },
  
  // Border Colors
  border: {
    primary: GRAY['20'],
    secondary: GRAY['10'],
    focus: BLUE['60'],
    error: RED['30'],
    success: GREEN['30'],
  },
  
  // Interactive Colors
  interactive: {
    primary: BLUE['60'],
    primaryHover: BLUE['70'],
    primaryActive: BLUE['80'],
    secondary: GRAY['10'],
    secondaryHover: GRAY['20'],
    secondaryActive: GRAY['30'],
  },
} as const;

// ========================================
// Semantic Color Tokens (Dark Mode)
// ========================================

export const SEMANTIC_COLORS_DARK = {
  // Background Colors
  background: {
    primary: GRAY.BLACK,
    secondary: GRAY['90'],
    tertiary: GRAY['80'],
    elevated: GRAY['90'],
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
  
  // Text Colors
  text: {
    primary: GRAY.WHITE,
    secondary: GRAY['40'],
    tertiary: GRAY['50'],
    disabled: GRAY['60'],
    inverse: GRAY.BLACK,
  },
  
  // Brand Colors
  brand: {
    primary: BLUE['40'],
    secondary: BLUE['50'],
    tertiary: BLUE['30'],
    background: BLUE['90'],
  },
  
  // Status Colors
  status: {
    success: GREEN['20'],
    successBackground: GREEN['60'],
    error: RED['20'],
    errorBackground: RED['60'],
    warning: YELLOW['20'],
    warningBackground: YELLOW['60'],
    info: BLUE['30'],
    infoBackground: BLUE['90'],
  },
  
  // Border Colors
  border: {
    primary: GRAY['70'],
    secondary: GRAY['80'],
    focus: BLUE['40'],
    error: RED['20'],
    success: GREEN['20'],
  },
  
  // Interactive Colors
  interactive: {
    primary: BLUE['40'],
    primaryHover: BLUE['30'],
    primaryActive: BLUE['20'],
    secondary: GRAY['80'],
    secondaryHover: GRAY['70'],
    secondaryActive: GRAY['60'],
  },
} as const;

// ========================================
// Theme Color Tokens
// ========================================

export const THEME_COLORS = {
  light: SEMANTIC_COLORS_LIGHT,
  dark: SEMANTIC_COLORS_DARK,
} as const;

// ========================================
// Color Utility Functions
// ========================================

/**
 * CSS 변수명을 생성하는 유틸리티 함수
 */
export const getCSSVariableName = (category: string, name: string) => {
  return `--color-${category}-${name}`;
};

/**
 * CSS 변수를 사용하여 색상을 참조하는 유틸리티 함수
 */
export const useCSSVariable = (category: string, name: string) => {
  return `var(${getCSSVariableName(category, name)})`;
};

// ========================================
// Type Definitions
// ========================================

export type ColorPalette = typeof BLUE | typeof GRAY | typeof RED | typeof GREEN | typeof YELLOW | typeof COOL_GRAY;
export type SemanticColors = typeof SEMANTIC_COLORS_LIGHT;
export type ThemeMode = 'light' | 'dark';
export type ColorCategory = keyof SemanticColors;
export type ColorName<T extends ColorCategory> = keyof SemanticColors[T];

// ========================================
// Exports for easy access
// ========================================

export const COLORS = {
  BLUE,
  GRAY,
  RED,
  GREEN,
  YELLOW,
  COOL_GRAY,
  GRADIENTS,
} as const;

export default THEME_COLORS;
