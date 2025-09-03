/**
 * Typography Design System
 * 
 * 피그마 Typography 파운데이션 기준으로 구성
 * - 한국어: Pretendard 폰트 사용
 * - 영어/숫자: SUIT 폰트 사용
 * - 반응형 대응: 모바일/데스크톱 분기
 */

// ========================================
// Font Family 정의
// ========================================
export const FONT_FAMILY = {
  korean: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  english: 'SUIT Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", sans-serif',
  fallback: '-apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", sans-serif',
} as const;

// ========================================
// Font Weight 정의
// ========================================
export const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

// ========================================
// Typography Token 타입 정의
// ========================================
export interface TypographyToken {
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  fontFamily: string;
}

export interface ResponsiveTypographyToken {
  mobile: TypographyToken;
  desktop: TypographyToken;
}

// ========================================
// Web Headline Typography
// ========================================
export const WEB_HEADLINE = {
  headline01: {
    mobile: {
      fontSize: 48,
      lineHeight: 60,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 48,
      lineHeight: 60,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  headline02: {
    mobile: {
      fontSize: 36,
      lineHeight: 48,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 36,
      lineHeight: 48,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  headline03: {
    mobile: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
} as const satisfies Record<string, ResponsiveTypographyToken>;

// ========================================
// Headline Typography
// ========================================
export const HEADLINE = {
  headline01: {
    mobile: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  headline02: {
    mobile: {
      fontSize: 22,
      lineHeight: 30,
      fontWeight: FONT_WEIGHT.extrabold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 22,
      lineHeight: 30,
      fontWeight: FONT_WEIGHT.extrabold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  headline03: {
    mobile: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
} as const satisfies Record<string, ResponsiveTypographyToken>;

// ========================================
// Title Typography
// ========================================
export const TITLE = {
  title01: {
    mobile: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  title02: {
    mobile: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  title03: {
    mobile: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  subtitle01: {
    mobile: {
      fontSize: 14,
      lineHeight: 22,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 14,
      lineHeight: 22,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  subtitle02: {
    mobile: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
} as const satisfies Record<string, ResponsiveTypographyToken>;

// ========================================
// Body Typography
// ========================================
export const BODY = {
  body01: {
    mobile: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: FONT_WEIGHT.medium,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: FONT_WEIGHT.medium,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  body02_m: {
    mobile: {
      fontSize: 14,
      lineHeight: 22,
      fontWeight: FONT_WEIGHT.medium,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 14,
      lineHeight: 22,
      fontWeight: FONT_WEIGHT.medium,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  body03: {
    mobile: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: FONT_WEIGHT.medium,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: FONT_WEIGHT.medium,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  body01_regular: {
    mobile: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  body02_s: {
    mobile: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  body03_regular: {
    mobile: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.korean,
    },
  },
} as const satisfies Record<string, ResponsiveTypographyToken>;

// ========================================
// Caption Typography
// ========================================
export const CAPTION = {
  caption01: {
    mobile: {
      fontSize: 12,
      lineHeight: 14,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 12,
      lineHeight: 14,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  caption02_m: {
    mobile: {
      fontSize: 10,
      lineHeight: 12,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 10,
      lineHeight: 12,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  caption02_s: {
    mobile: {
      fontSize: 10,
      lineHeight: 12,
      fontWeight: FONT_WEIGHT.medium,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 10,
      lineHeight: 12,
      fontWeight: FONT_WEIGHT.medium,
      fontFamily: FONT_FAMILY.korean,
    },
  },
  caption03: {
    mobile: {
      fontSize: 8,
      lineHeight: 10,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
    desktop: {
      fontSize: 8,
      lineHeight: 10,
      fontWeight: FONT_WEIGHT.semibold,
      fontFamily: FONT_FAMILY.korean,
    },
  },
} as const satisfies Record<string, ResponsiveTypographyToken>;

// ========================================
// 통합 Typography 객체
// ========================================
export const TYPOGRAPHY = {
  webHeadline: WEB_HEADLINE,
  headline: HEADLINE,
  title: TITLE,
  body: BODY,
  caption: CAPTION,
} as const;

// ========================================
// Typography 유틸리티 함수
// ========================================

/**
 * Typography 토큰을 CSS 스타일 객체로 변환
 */
export function getTypographyStyle(token: TypographyToken): React.CSSProperties {
  return {
    fontSize: `${token.fontSize}px`,
    lineHeight: `${token.lineHeight}px`,
    fontWeight: token.fontWeight,
    fontFamily: token.fontFamily,
  };
}

/**
 * 반응형 Typography 토큰에서 특정 뷰포트에 해당하는 스타일 가져오기
 */
export function getResponsiveTypographyStyle(
  token: ResponsiveTypographyToken,
  viewport: 'mobile' | 'desktop' = 'desktop'
): React.CSSProperties {
  return getTypographyStyle(token[viewport]);
}

/**
 * Typography 토큰을 CSS 변수 문자열로 변환
 */
export function getTypographyCSS(token: TypographyToken): string {
  return `
    font-size: ${token.fontSize}px;
    line-height: ${token.lineHeight}px;
    font-weight: ${token.fontWeight};
    font-family: ${token.fontFamily};
  `.trim();
}

// ========================================
// Typography 키 타입 정의 (TypeScript 지원)
// ========================================
export type TypographyCategory = keyof typeof TYPOGRAPHY;
export type WebHeadlineKey = keyof typeof WEB_HEADLINE;
export type HeadlineKey = keyof typeof HEADLINE;
export type TitleKey = keyof typeof TITLE;
export type BodyKey = keyof typeof BODY;
export type CaptionKey = keyof typeof CAPTION;

export type TypographyKey = 
  | `webHeadline.${WebHeadlineKey}`
  | `headline.${HeadlineKey}`
  | `title.${TitleKey}`
  | `body.${BodyKey}`
  | `caption.${CaptionKey}`;

/**
 * 문자열 키로 Typography 토큰 가져오기
 */
export function getTypographyToken(key: TypographyKey): ResponsiveTypographyToken {
  const [category, tokenKey] = key.split('.') as [TypographyCategory, string];
  
  // Type-safe token retrieval
  switch (category) {
    case 'webHeadline':
      return WEB_HEADLINE[tokenKey as WebHeadlineKey];
    case 'headline':
      return HEADLINE[tokenKey as HeadlineKey];
    case 'title':
      return TITLE[tokenKey as TitleKey];
    case 'body':
      return BODY[tokenKey as BodyKey];
    case 'caption':
      return CAPTION[tokenKey as CaptionKey];
    default:
      throw new Error(`Invalid typography category: ${category}`);
  }
}
