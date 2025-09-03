'use client';

import React, { useState, forwardRef, useCallback } from 'react';
import styles from './styles.module.css';

// ========================================
// Type Definitions
// ========================================

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /** Toggle variant */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Toggle size */
  size?: 'small' | 'medium' | 'large';
  /** Theme mode */
  theme?: 'light' | 'dark';
  /** Toggle value (controlled) */
  checked?: boolean;
  /** Default toggle value (uncontrolled) */
  defaultChecked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Label text */
  label?: string;
  /** Change event handler */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Additional CSS class */
  className?: string;
}

// ========================================
// CSS Class Builder Functions
// ========================================

function getToggleClasses(
  variant: ToggleProps['variant'],
  size: ToggleProps['size'],
  theme: ToggleProps['theme'],
  checked: boolean,
  disabled: boolean,
  className?: string
): string {
  const classes = [
    styles.toggle,
    styles[variant!],
    styles[size!],
    styles[theme!],
    checked ? styles.checked : styles.unchecked,
    disabled ? styles.disabled : '',
    className || ''
  ];

  return classes.filter(Boolean).join(' ');
}

// ========================================
// Toggle Component
// ========================================

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      theme = 'light',
      checked,
      defaultChecked,
      disabled = false,
      label,
      onChange,
      className,
      id,
      ...rest
    },
    ref
  ) => {
    // Internal state for uncontrolled component
    const [internalChecked, setInternalChecked] = useState(defaultChecked || false);
    
    // Determine if controlled or uncontrolled
    const isControlled = checked !== undefined;
    const checkedValue = isControlled ? checked : internalChecked;

    // Handle toggle change
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked;
        
        if (!isControlled) {
          setInternalChecked(newChecked);
        }
        
        onChange?.(newChecked, event);
      },
      [isControlled, onChange]
    );

    // Generate unique ID if not provided
    const inputId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={styles.container}>
        <div className={styles.toggleWrapper}>
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className={styles.input}
            checked={checkedValue}
            disabled={disabled}
            onChange={handleChange}
            {...rest}
          />
          <label
            htmlFor={inputId}
            className={getToggleClasses(variant, size, theme, checkedValue, disabled, className)}
          >
            <span className={styles.slider}>
              <span className={styles.knob} />
            </span>
          </label>
        </div>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
