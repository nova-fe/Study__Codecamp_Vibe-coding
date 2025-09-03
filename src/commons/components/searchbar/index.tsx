'use client';

import React, { forwardRef } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import styles from './styles.module.css';

// ========================================
// Type Definitions
// ========================================

export type SearchbarVariant = 'primary' | 'secondary' | 'tertiary';
export type SearchbarSize = 'small' | 'medium' | 'large';
export type SearchbarTheme = 'light' | 'dark';

export interface SearchbarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: SearchbarVariant;
  size?: SearchbarSize;
  theme?: SearchbarTheme;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  showClearButton?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  className?: string;
}

// ========================================
// Searchbar Component
// ========================================

export const Searchbar = forwardRef<HTMLInputElement, SearchbarProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      theme,
      onSearch,
      onClear,
      showClearButton = false,
      disabled = false,
      error = false,
      helperText,
      className = '',
      placeholder = '검색어를 입력해 주세요.',
      value,
      onChange,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const { theme: systemTheme } = useTheme();
    const resolvedTheme = theme || (systemTheme as SearchbarTheme) || 'light';

    // ========================================
    // Event Handlers
    // ========================================

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const target = e.target as HTMLInputElement;
        onSearch?.(target.value);
      }
      onKeyDown?.(e);
    };

    const handleClear = () => {
      onClear?.();
    };

    const handleSearchClick = () => {
      if (typeof value === 'string') {
        onSearch?.(value);
      }
    };

    // ========================================
    // CSS Classes
    // ========================================

    const containerClasses = [
      styles.container,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      styles[`theme-${resolvedTheme}`],
      disabled && styles.disabled,
      error && styles.error,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      styles.input,
      styles[`input-${variant}`],
      styles[`input-${size}`],
      styles[`input-theme-${resolvedTheme}`],
    ]
      .filter(Boolean)
      .join(' ');

    // ========================================
    // Render
    // ========================================

    return (
      <div className={styles.wrapper}>
        <div className={containerClasses}>
          {/* Search Icon */}
          <button
            type="button"
            className={styles.searchIcon}
            onClick={handleSearchClick}
            disabled={disabled}
            aria-label="검색"
          >
            <Image
              src="/icons/search_outline_light_m.svg"
              alt=""
              width={24}
              height={24}
              className={styles.iconImage}
            />
          </button>

          {/* Input Field */}
          <input
            ref={ref}
            type="text"
            className={inputClasses}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={helperText ? `${props.id}-helper` : undefined}
            {...props}
          />

          {/* Clear Button */}
          {showClearButton && value && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              disabled={disabled}
              aria-label="검색어 지우기"
            >
              <Image
                src="/icons/close_outline_light_s.svg"
                alt=""
                width={16}
                height={16}
                className={styles.iconImage}
              />
            </button>
          )}
        </div>

        {/* Helper Text */}
        {helperText && (
          <div
            id={`${props.id}-helper`}
            className={`${styles.helperText} ${error ? styles.helperTextError : ''}`}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Searchbar.displayName = 'Searchbar';

export default Searchbar;
