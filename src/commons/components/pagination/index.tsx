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

// 페이지 그룹 계산 함수 (5페이지 단위)
function getPageGroup(currentPage: number, maxVisible: number = 5): { start: number; end: number } {
  const currentGroup = Math.ceil(currentPage / maxVisible);
  const start = (currentGroup - 1) * maxVisible + 1;
  const end = currentGroup * maxVisible;
  
  return { start, end };
}

// 페이지 범위 계산 함수 (5페이지 단위로 표시)
function getPageRange(currentPage: number, totalPages: number, maxVisible: number = 5): number[] {
  const { start, end } = getPageGroup(currentPage, maxVisible);
  const actualEnd = Math.min(end, totalPages);
  
  return Array.from({ length: actualEnd - start + 1 }, (_, i) => start + i);
}

// 화살표 아이콘 컴포넌트들
function PrevIcon({ disabled = false, size = 'medium' }: { disabled?: boolean; size?: PaginationSize }) {
  const iconSize = size === 'small' ? 12 : size === 'medium' ? 16 : 20;
  
  return (
    <Image
      src={disabled ? "/icons/leftdisabled_outline_light_m.svg" : "/icons/leftenable_outline_light_m.svg"}
      alt="이전 페이지 그룹"
      width={iconSize}
      height={iconSize}
    />
  );
}

function NextIcon({ disabled = false, size = 'medium' }: { disabled?: boolean; size?: PaginationSize }) {
  const iconSize = size === 'small' ? 12 : size === 'medium' ? 16 : 20;
  
  return (
    <Image
      src={disabled ? "/icons/rightdisabled_outline_light_m.svg" : "/icons/rightenable_outline_light_m.svg"}
      alt="다음 페이지 그룹"
      width={iconSize}
      height={iconSize}
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
  const { start } = getPageGroup(currentPage, maxVisiblePages);
  
  // 이전/다음 그룹으로 이동 가능 여부
  const canGoPrevGroup = start > 1;
  const canGoNextGroup = start + maxVisiblePages - 1 < totalPages;
  
  // 화살표 표시 여부 (총 페이지가 1페이지일 때는 숨김)
  const shouldShowArrows = totalPages > 1 && showPrevNext;

  const handlePageClick = (page: number) => {
    if (page !== currentPage && onPageChange) {
      onPageChange(page);
    }
  };

  const handlePrevGroupClick = () => {
    if (canGoPrevGroup && onPageChange) {
      // 이전 그룹의 마지막 페이지로 이동
      const prevGroupEnd = start - 1;
      onPageChange(prevGroupEnd);
    }
  };

  const handleNextGroupClick = () => {
    if (canGoNextGroup && onPageChange) {
      // 다음 그룹의 첫 페이지로 이동
      const nextGroupStart = start + maxVisiblePages;
      onPageChange(nextGroupStart);
    }
  };

  return (
    <div className={getPaginationClasses(variant, size, theme, className)}>
      {/* 이전 그룹 버튼 */}
      {shouldShowArrows && (
        <button
          className={`${styles.navButton} ${!canGoPrevGroup ? styles.disabled : ''}`}
          onClick={handlePrevGroupClick}
          disabled={!canGoPrevGroup}
          aria-label="이전 페이지 그룹"
        >
          <PrevIcon disabled={!canGoPrevGroup} size={size} />
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

      {/* 다음 그룹 버튼 */}
      {shouldShowArrows && (
        <button
          className={`${styles.navButton} ${!canGoNextGroup ? styles.disabled : ''}`}
          onClick={handleNextGroupClick}
          disabled={!canGoNextGroup}
          aria-label="다음 페이지 그룹"
        >
          <NextIcon disabled={!canGoNextGroup} size={size} />
        </button>
      )}
    </div>
  );
}
