import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

// Pagination variant 타입 정의
export type PaginationVariant = 'primary' | 'secondary' | 'tertiary';
export type PaginationSize = 'small' | 'medium' | 'large';
export type PaginationTheme = 'light' | 'dark';

// Pagination 컴포넌트 Props 타입 정의
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  variant?: PaginationVariant;
  size?: PaginationSize;
  theme?: PaginationTheme;
  onPageChange?: (page: number) => void;
  maxVisiblePages?: number;
  showPrevNext?: boolean;
  className?: string;
}

// CSS 클래스 조합 함수
function getPaginationClasses(
  variant: PaginationVariant = 'primary',
  size: PaginationSize = 'medium',
  theme: PaginationTheme = 'light',
  className?: string
): string {
  const classes = [
    styles.pagination,
    styles[variant],
    styles[size],
    styles[theme],
    className
  ].filter(Boolean);
  
  return classes.join(' ');
}

// 페이지 범위 계산 함수
function getPageRange(currentPage: number, totalPages: number, maxVisible: number): number[] {
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const halfVisible = Math.floor(maxVisible / 2);
  let startPage = Math.max(1, currentPage - halfVisible);
  const endPage = Math.min(totalPages, startPage + maxVisible - 1);

  // startPage 조정
  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
}

// 화살표 아이콘 컴포넌트들
function PrevIcon({ disabled = false }: { disabled?: boolean }) {
  return (
    <Image
      src={disabled ? "/icons/leftdisabled_outline_light_m.svg" : "/icons/leftenable_outline_light_m.svg"}
      alt="이전 페이지"
      width={24}
      height={24}
    />
  );
}

function NextIcon({ disabled = false }: { disabled?: boolean }) {
  return (
    <Image
      src={disabled ? "/icons/rightdisabled_outline_light_m.svg" : "/icons/rightenable_outline_light_m.svg"}
      alt="다음 페이지"
      width={24}
      height={24}
    />
  );
}

// Pagination 컴포넌트 구현
export default function Pagination({
  currentPage,
  totalPages,
  variant = 'primary',
  size = 'medium',
  theme = 'light',
  onPageChange,
  maxVisiblePages = 5,
  showPrevNext = true,
  className
}: PaginationProps) {
  const pageRange = getPageRange(currentPage, totalPages, maxVisiblePages);
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePageClick = (page: number) => {
    if (page !== currentPage && onPageChange) {
      onPageChange(page);
    }
  };

  const handlePrevClick = () => {
    if (canGoPrev && onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (canGoNext && onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={getPaginationClasses(variant, size, theme, className)}>
      {/* 이전 버튼 */}
      {showPrevNext && (
        <button
          className={`${styles.navButton} ${!canGoPrev ? styles.disabled : ''}`}
          onClick={handlePrevClick}
          disabled={!canGoPrev}
          aria-label="이전 페이지"
        >
          <PrevIcon disabled={!canGoPrev} />
        </button>
      )}

      {/* 페이지 숫자 버튼들 */}
      <div className={styles.pageContainer}>
        {pageRange.map((page) => (
          <button
            key={page}
            className={`${styles.pageButton} ${page === currentPage ? styles.active : ''}`}
            onClick={() => handlePageClick(page)}
            aria-label={`페이지 ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            <span className={styles.pageText}>{page}</span>
          </button>
        ))}
      </div>

      {/* 다음 버튼 */}
      {showPrevNext && (
        <button
          className={`${styles.navButton} ${!canGoNext ? styles.disabled : ''}`}
          onClick={handleNextClick}
          disabled={!canGoNext}
          aria-label="다음 페이지"
        >
          <NextIcon disabled={!canGoNext} />
        </button>
      )}
    </div>
  );
}
