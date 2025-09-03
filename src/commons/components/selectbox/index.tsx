import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

// SelectBox variant 타입 정의
export type SelectBoxVariant = 'primary' | 'secondary' | 'tertiary';
export type SelectBoxSize = 'small' | 'medium' | 'large';
export type SelectBoxTheme = 'light' | 'dark';

// Option 타입 정의
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// SelectBox 컴포넌트 Props 타입 정의
interface SelectBoxProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  variant?: SelectBoxVariant;
  size?: SelectBoxSize;
  theme?: SelectBoxTheme;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  className?: string;
  onChange?: (value: string, option: SelectOption) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

// CSS 클래스 조합 함수
function getSelectBoxClasses(
  variant: SelectBoxVariant = 'primary',
  size: SelectBoxSize = 'medium',
  theme: SelectBoxTheme = 'light',
  isOpen: boolean = false,
  error: boolean = false,
  disabled: boolean = false,
  className?: string
): string {
  const classes = [
    styles.selectbox,
    styles[variant],
    styles[size],
    styles[theme],
    isOpen && styles.open,
    error && styles.error,
    disabled && styles.disabled,
    className
  ].filter(Boolean);
  
  return classes.join(' ');
}

// 드롭다운 아이콘 컴포넌트
function DropdownIcon({ isOpen, size = 24 }: { isOpen: boolean; size?: number }) {
  return (
    <Image
      src="/icons/arrow_drop_down.svg"
      alt="dropdown arrow"
      width={size}
      height={size}
      className={`${styles.dropdownIcon} ${isOpen ? styles.rotated : ''}`}
    />
  );
}

// SelectBox 컴포넌트 구현
export default function SelectBox({
  options,
  value,
  defaultValue,
  placeholder = '선택해주세요',
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  disabled = false,
  error = false,
  errorMessage,
  helperText,
  className,
  onChange,
  onFocus,
  onBlur,
}: SelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
  const selectBoxRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        onBlur?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onBlur]);

  // value prop 변경 감지
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  // 선택된 옵션 찾기
  const selectedOption = options.find(option => option.value === selectedValue);

  // 옵션 선택 핸들러
  const handleOptionSelect = (option: SelectOption) => {
    if (option.disabled) return;
    
    setSelectedValue(option.value);
    setIsOpen(false);
    onChange?.(option.value, option);
    onBlur?.();
  };

  // 키보드 이벤트 핸들러
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setIsOpen(!isOpen);
        if (!isOpen) {
          onFocus?.();
        }
        break;
      case 'Escape':
        setIsOpen(false);
        onBlur?.();
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onFocus?.();
        } else {
          // 다음 옵션으로 포커스 이동 로직
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          onFocus?.();
        } else {
          // 이전 옵션으로 포커스 이동 로직
        }
        break;
    }
  };

  // 셀렉트박스 클릭 핸들러
  const handleSelectBoxClick = () => {
    if (disabled) return;
    
    if (!isOpen) {
      onFocus?.();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div
        ref={selectBoxRef}
        className={getSelectBoxClasses(variant, size, theme, isOpen, error, disabled, className)}
        onClick={handleSelectBoxClick}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={isOpen ? "selectbox-options" : undefined}
        aria-disabled={disabled}
        aria-invalid={error}
      >
        <div className={styles.content}>
          <span className={styles.value}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <DropdownIcon 
            isOpen={isOpen} 
            size={size === 'small' ? 16 : size === 'medium' ? 20 : 24} 
          />
        </div>
      </div>

      {isOpen && (
        <div ref={optionsRef} className={styles.dropdown}>
          <ul id="selectbox-options" className={styles.options} role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                className={`${styles.option} ${option.disabled ? styles.optionDisabled : ''} ${
                  option.value === selectedValue ? styles.optionSelected : ''
                }`}
                onClick={() => handleOptionSelect(option)}
                role="option"
                aria-selected={option.value === selectedValue}
                aria-disabled={option.disabled}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Helper Text or Error Message */}
      {(helperText || errorMessage) && (
        <div className={styles.messageContainer}>
          {error && errorMessage ? (
            <span className={styles.errorMessage}>{errorMessage}</span>
          ) : helperText ? (
            <span className={styles.helperText}>{helperText}</span>
          ) : null}
        </div>
      )}
    </div>
  );
}
