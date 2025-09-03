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
function PlusIcon({ size = 24 }: { size?: number }) {
  return (
    <Image
      src="/icons/plus_outline_light_m.svg"
      alt="plus icon"
      width={size}
      height={size}
      style={{ filter: 'invert(1)' }} // 흰색으로 만들기 위해 invert 적용
    />
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
  const displayIcon = showDefaultIcon ? <PlusIcon /> : icon;

  return (
    <button
      className={getButtonClasses(variant, size, theme, className)}
      disabled={isDisabled}
      {...props}
    >
      <div className={styles.content}>
        {displayIcon && iconPosition === 'left' && (
          <span className={styles.icon}>{displayIcon}</span>
        )}
        
        <span className={styles.text}>
          {loading ? '로딩 중...' : children}
        </span>
        
        {displayIcon && iconPosition === 'right' && (
          <span className={styles.icon}>{displayIcon}</span>
        )}
      </div>
    </button>
  );
}
