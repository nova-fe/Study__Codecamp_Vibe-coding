/**
 * URL Constants
 * 
 * 이 파일은 프로젝트 전체에서 사용될 URL 경로와 관련 설정을 정의합니다.
 * 다이나믹 라우팅을 고려하여 설계되었습니다.
 */

// ========================================
// URL Path Enum
// ========================================

/**
 * URL 경로 enum - 모든 라우트 경로를 정의합니다
 */
export enum UrlPath {
  LOGIN = '/auth/login',
  SIGNUP = '/auth/signup',
  DIARIES = '/diaries',
  DIARY_DETAIL = '/diaries/[id]',
  PICTURES = '/pictures',
}

// ========================================
// Access Level Enum
// ========================================

/**
 * 접근 권한 레벨 enum
 */
export enum AccessLevel {
  PUBLIC = 'PUBLIC',      // 누구나 접근 가능
  MEMBER_ONLY = 'MEMBER_ONLY', // 회원전용
}

// ========================================
// UI Component Visibility Interface
// ========================================

/**
 * UI 컴포넌트 노출 여부 인터페이스
 */
export interface UIVisibility {
  header: {
    show: boolean;
    logo: boolean;
    darkModeToggle: boolean;
  };
  banner: boolean;
  navigation: boolean;
  footer: boolean;
}

// ========================================
// URL Configuration Interface
// ========================================

/**
 * URL 설정 정보 인터페이스
 */
export interface UrlConfig {
  path: string;
  accessLevel: AccessLevel;
  uiVisibility: UIVisibility;
}

// ========================================
// URL Configuration Mapping
// ========================================

/**
 * URL별 상세 설정 매핑
 */
export const URL_CONFIG: Record<UrlPath, UrlConfig> = {
  [UrlPath.LOGIN]: {
    path: '/auth/login',
    accessLevel: AccessLevel.PUBLIC,
    uiVisibility: {
      header: {
        show: false,
        logo: false,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: false,
    },
  },
  [UrlPath.SIGNUP]: {
    path: '/auth/signup',
    accessLevel: AccessLevel.PUBLIC,
    uiVisibility: {
      header: {
        show: false,
        logo: false,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: false,
    },
  },
  [UrlPath.DIARIES]: {
    path: '/diaries',
    accessLevel: AccessLevel.PUBLIC,
    uiVisibility: {
      header: {
        show: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: true,
      navigation: true,
      footer: true,
    },
  },
  [UrlPath.DIARY_DETAIL]: {
    path: '/diaries/[id]',
    accessLevel: AccessLevel.MEMBER_ONLY,
    uiVisibility: {
      header: {
        show: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: false,
      navigation: false,
      footer: true,
    },
  },
  [UrlPath.PICTURES]: {
    path: '/pictures',
    accessLevel: AccessLevel.PUBLIC,
    uiVisibility: {
      header: {
        show: true,
        logo: true,
        darkModeToggle: false,
      },
      banner: true,
      navigation: true,
      footer: true,
    },
  },
} as const;

/**
 * URL 경로 배열 (순회용)
 */
export const URL_PATHS = Object.values(UrlPath);

// ========================================
// Dynamic Routing Utility Functions
// ========================================

/**
 * 다이나믹 라우팅을 위한 ID 매개변수를 포함한 URL 생성 함수
 */
export const getDiaryDetailUrl = (id: string | number): string => {
  return `/diaries/${id}`;
};

// ========================================
// URL Utility Functions
// ========================================

/**
 * URL 경로에 따른 접근 권한을 반환하는 유틸리티 함수
 */
export const getAccessLevel = (urlPath: UrlPath): AccessLevel => {
  return URL_CONFIG[urlPath].accessLevel;
};

/**
 * URL 경로에 따른 UI 노출 설정을 반환하는 유틸리티 함수
 */
export const getUIVisibility = (urlPath: UrlPath): UIVisibility => {
  return URL_CONFIG[urlPath].uiVisibility;
};

/**
 * URL 경로에 따른 전체 설정을 반환하는 유틸리티 함수
 */
export const getUrlConfig = (urlPath: UrlPath): UrlConfig => {
  return URL_CONFIG[urlPath];
};

/**
 * 현재 경로가 회원전용인지 확인하는 유틸리티 함수
 */
export const isMemberOnlyPath = (urlPath: UrlPath): boolean => {
  return getAccessLevel(urlPath) === AccessLevel.MEMBER_ONLY;
};

/**
 * 현재 경로가 공개 접근 가능한지 확인하는 유틸리티 함수
 */
export const isPublicPath = (urlPath: UrlPath): boolean => {
  return getAccessLevel(urlPath) === AccessLevel.PUBLIC;
};

/**
 * 헤더를 표시해야 하는지 확인하는 유틸리티 함수
 */
export const shouldShowHeader = (urlPath: UrlPath): boolean => {
  return getUIVisibility(urlPath).header.show;
};

/**
 * 로고를 표시해야 하는지 확인하는 유틸리티 함수
 */
export const shouldShowLogo = (urlPath: UrlPath): boolean => {
  return getUIVisibility(urlPath).header.logo;
};

/**
 * 다크모드 토글을 표시해야 하는지 확인하는 유틸리티 함수
 */
export const shouldShowDarkModeToggle = (urlPath: UrlPath): boolean => {
  return getUIVisibility(urlPath).header.darkModeToggle;
};

/**
 * 배너를 표시해야 하는지 확인하는 유틸리티 함수
 */
export const shouldShowBanner = (urlPath: UrlPath): boolean => {
  return getUIVisibility(urlPath).banner;
};

/**
 * 네비게이션을 표시해야 하는지 확인하는 유틸리티 함수
 */
export const shouldShowNavigation = (urlPath: UrlPath): boolean => {
  return getUIVisibility(urlPath).navigation;
};

/**
 * 푸터를 표시해야 하는지 확인하는 유틸리티 함수
 */
export const shouldShowFooter = (urlPath: UrlPath): boolean => {
  return getUIVisibility(urlPath).footer;
};

// ========================================
// Route Matching Utility Functions
// ========================================

/**
 * 현재 경로가 다이나믹 라우트인지 확인하는 유틸리티 함수
 */
export const isDynamicRoute = (path: string): boolean => {
  return path.includes('[') && path.includes(']');
};

/**
 * 실제 경로를 UrlPath enum과 매칭하는 유틸리티 함수
 */
export const matchUrlPath = (actualPath: string): UrlPath | null => {
  // 정확한 매칭 먼저 시도
  const exactMatch = Object.values(UrlPath).find(urlPath => urlPath === actualPath);
  if (exactMatch) return exactMatch;

  // 다이나믹 라우트 매칭
  if (actualPath.startsWith('/diaries/') && actualPath !== '/diaries') {
    return UrlPath.DIARY_DETAIL;
  }

  return null;
};

// ========================================
// Type Exports
// ========================================

export type UrlConfigType = typeof URL_CONFIG;
export type UrlPathKey = keyof typeof URL_CONFIG; 