/**
 * Enum Constants
 * 
 * 이 파일은 프로젝트 전체에서 사용될 enum 상수들을 정의합니다.
 */

import { RED, BLUE, GRAY, YELLOW, GREEN } from './color';

// ========================================
// Emotion Enum
// ========================================

/**
 * 감정 enum - 감정의 종류를 정의합니다
 */
export enum EmotionType {
  HAPPY = 'HAPPY',
  SAD = 'SAD',
  ANGRY = 'ANGRY',
  SURPRISE = 'SURPRISE',
  ETC = 'ETC',
}

/**
 * 감정별 이미지 사이즈 enum
 */
export enum EmotionImageSize {
  MEDIUM = 'M',
  SMALL = 'S',
}

/**
 * 감정별 상세 정보 인터페이스
 */
export interface EmotionInfo {
  label: string;
  color: string;
  images: {
    medium: string;
    small: string;
  };
}

/**
 * 감정별 상세 정보 매핑
 */
export const EMOTION_CONFIG: Record<EmotionType, EmotionInfo> = {
  [EmotionType.HAPPY]: {
    label: '행복해요',
    color: RED['60'], // red60
    images: {
      medium: 'emotion-happy-m.svg',
      small: 'emotion-happy-s.svg',
    },
  },
  [EmotionType.SAD]: {
    label: '슬퍼요',
    color: BLUE['60'], // blue60
    images: {
      medium: 'emotion-sad-m.svg',
      small: 'emotion-sad-s.svg',
    },
  },
  [EmotionType.ANGRY]: {
    label: '화나요',
    color: GRAY['60'], // gray60
    images: {
      medium: 'emotion-angry-m.svg',
      small: 'emotion-angry-s.svg',
    },
  },
  [EmotionType.SURPRISE]: {
    label: '놀랐어요',
    color: YELLOW['60'], // yellow60
    images: {
      medium: 'emotion-surprise-m.svg',
      small: 'emotion-surprise-s.svg',
    },
  },
  [EmotionType.ETC]: {
    label: '기타',
    color: GREEN['60'], // green60
    images: {
      medium: 'emotion-etc-m.svg',
      small: 'emotion-etc-s.svg',
    },
  },
} as const;

/**
 * 감정 타입 배열 (순회용)
 */
export const EMOTION_TYPES = Object.values(EmotionType);

// ========================================
// Emotion Utility Functions
// ========================================

/**
 * 감정 타입에 따른 라벨을 반환하는 유틸리티 함수
 */
export const getEmotionLabel = (emotionType: EmotionType): string => {
  return EMOTION_CONFIG[emotionType].label;
};

/**
 * 감정 타입에 따른 색상을 반환하는 유틸리티 함수
 */
export const getEmotionColor = (emotionType: EmotionType): string => {
  return EMOTION_CONFIG[emotionType].color;
};

/**
 * 감정 타입과 사이즈에 따른 이미지 파일명을 반환하는 유틸리티 함수
 */
export const getEmotionImage = (
  emotionType: EmotionType,
  size: EmotionImageSize = EmotionImageSize.MEDIUM
): string => {
  return size === EmotionImageSize.MEDIUM
    ? EMOTION_CONFIG[emotionType].images.medium
    : EMOTION_CONFIG[emotionType].images.small;
};

/**
 * 감정 타입에 따른 전체 정보를 반환하는 유틸리티 함수
 */
export const getEmotionInfo = (emotionType: EmotionType): EmotionInfo => {
  return EMOTION_CONFIG[emotionType];
};

// ========================================
// Type Exports
// ========================================

export type EmotionConfigType = typeof EMOTION_CONFIG;
export type EmotionKey = keyof typeof EMOTION_CONFIG;
