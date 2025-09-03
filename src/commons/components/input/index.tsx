'use client';

import React, { forwardRef } from 'react';
import styles from './styles.module.css';

// ========================================
// Types & Interfaces
// ========================================

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input variant 설정 */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Input size 설정 */
  size?: 'small' | 'medium' | 'large';
  /** Theme 설정 */
  theme?: 'light' | 'dark';
  /** 라벨 텍스트 */
  label?: string;
  /** 에러 메시지 */
  error?: string;
  /** 성공 메시지 */
  success?: string;
  /** 헬퍼 텍스트 */
  helper?: string;
  /** 전체 너비 사용 여부 */
  fullWidth?: boolean;
}

// ========================================
// Input Component
// ========================================

const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  label,
  error,
  success,
  helper,
  fullWidth = false,
  disabled = false,
  className = '',
  placeholder = '회고를 남겨보세요.',
  id,
  ...props
}, ref) => {
  // ========================================
  // Class Names 생성
  // ========================================

  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const containerClasses = [
    styles.container,
    fullWidth && styles.fullWidth
  ].filter(Boolean).join(' ');

  const inputClasses = [
    styles.input,
    styles[`input--${variant}`],
    styles[`input--${size}`],
    styles[`input--${theme}`],
    error && styles['input--error'],
    success && styles['input--success'],
    disabled && styles['input--disabled'],
    className
  ].filter(Boolean).join(' ');

  const labelClasses = [
    styles.label,
    styles[`label--${size}`],
    styles[`label--${theme}`],
    disabled && styles['label--disabled']
  ].filter(Boolean).join(' ');

  const messageClasses = [
    styles.message,
    styles[`message--${size}`],
    styles[`message--${theme}`],
    error && styles['message--error'],
    success && styles['message--success']
  ].filter(Boolean).join(' ');

  // ========================================
  // Message Display Logic
  // ========================================

  const displayMessage = error || success || helper;
  const messageType = error ? 'error' : success ? 'success' : 'helper';

  // ========================================
  // Render
  // ========================================

  return (
    <div className={containerClasses}>
      {label && (
        <label 
          htmlFor={inputId}
          className={labelClasses}
        >
          {label}
        </label>
      )}
      
      <input
        ref={ref}
        id={inputId}
        className={inputClasses}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={displayMessage ? `${inputId}-message` : undefined}
        {...props}
      />
      
      {displayMessage && (
        <div 
          id={`${inputId}-message`}
          className={messageClasses}
          role={messageType === 'error' ? 'alert' : 'status'}
          aria-live={messageType === 'error' ? 'assertive' : 'polite'}
        >
          {displayMessage}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
