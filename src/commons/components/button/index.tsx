import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

// Button variant 타입 정의
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonTheme = 'light' | 'dark';

// Button 컴포넌트 Props 타입 정의
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  theme?: ButtonTheme;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  showDefaultIcon?: boolean; // 피그마 기본 플러스 아이콘 표시 여부
}

// CSS 클래스 조합 함수
function getButtonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'medium',
  theme: ButtonTheme = 'light',
  className?: string
): string {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    styles[theme],
    className
  ].filter(Boolean);
  
  return classes.join(' ');
}

// 기본 플러스 아이콘 컴포넌트 - public/icons 파일 활용
function PlusIcon({ size = 24, shouldInvert = true }: { size?: number; shouldInvert?: boolean }) {
  return (
    <Image
      src="/icons/plus_outline_light_m.svg"
      alt="plus icon"
      width={size}
      height={size}
      style={{ filter: shouldInvert ? 'invert(1)' : 'none' }} // 흰색으로 만들기 위해 invert 적용
    />
  );
}

// 아이콘에 흰색 필터를 적용하는 래퍼 컴포넌트
function IconWrapper({ 
  children, 
  variant, 
  theme, 
  disabled 
}: { 
  children: React.ReactNode; 
  variant: ButtonVariant; 
  theme: ButtonTheme; 
  disabled?: boolean;
}) {
  // Primary 버튼이거나 disabled 상태일 때 흰색 아이콘 사용
  const shouldInvertIcon = (variant === 'primary' && theme === 'light') || 
                          (variant === 'primary' && theme === 'dark' && disabled) ||
                          disabled;

  return (
    <div style={{ filter: shouldInvertIcon ? 'invert(1)' : 'none' }}>
      {children}
    </div>
  );
}

// Button 컴포넌트 구현
export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  icon,
  iconPosition = 'left',
  loading = false,
  showDefaultIcon = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  
  // 기본 아이콘 또는 커스텀 아이콘 결정
  const displayIcon = showDefaultIcon ? 
    <PlusIcon 
      size={size === 'small' ? 16 : size === 'medium' ? 24 : 28} 
      shouldInvert={(variant === 'primary') || isDisabled}
    /> : 
    icon;

  return (
    <button
      className={getButtonClasses(variant, size, theme, className)}
      disabled={isDisabled}
      {...props}
    >
      <div className={styles.content}>
        {displayIcon && iconPosition === 'left' && (
          <span className={styles.icon}>
            <IconWrapper variant={variant} theme={theme} disabled={isDisabled}>
              {displayIcon}
            </IconWrapper>
          </span>
        )}
        
        <span className={styles.text}>
          {loading ? '로딩 중...' : children}
        </span>
        
        {displayIcon && iconPosition === 'right' && (
          <span className={styles.icon}>
            <IconWrapper variant={variant} theme={theme} disabled={isDisabled}>
              {displayIcon}
            </IconWrapper>
          </span>
        )}
      </div>
    </button>
  );
}
