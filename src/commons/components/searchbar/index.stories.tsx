import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { Searchbar } from './index';

const meta: Meta<typeof Searchbar> = {
  title: 'Commons/Components/Searchbar',
  component: Searchbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Searchbar 컴포넌트는 다양한 variant, size, theme을 지원하는 범용 검색 입력 컴포넌트입니다.

## Features
- 3가지 variant: primary, secondary, tertiary
- 3가지 size: small, medium, large  
- 2가지 theme: light, dark
- 검색 아이콘과 클리어 버튼 지원
- 에러 상태 및 헬퍼 텍스트 지원
- 키보드 이벤트 처리 (Enter키 검색)
- 접근성 지원 (ARIA attributes)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '검색바의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '검색바의 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '검색바의 테마',
    },
    placeholder: {
      control: 'text',
      description: '검색바의 플레이스홀더 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '검색바 비활성화 여부',
    },
    error: {
      control: 'boolean',
      description: '에러 상태 여부',
    },
    showClearButton: {
      control: 'boolean',
      description: '클리어 버튼 표시 여부',
    },
    helperText: {
      control: 'text',
      description: '도움말 또는 에러 메시지',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    placeholder: '검색어를 입력해 주세요.',
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    placeholder: 'Primary 검색',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    placeholder: 'Secondary 검색',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    placeholder: 'Tertiary 검색',
    variant: 'tertiary',
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    placeholder: 'Small 검색',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    placeholder: 'Medium 검색',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large 검색',
    size: 'large',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    placeholder: 'Light theme 검색',
    theme: 'light',
  },
};

export const DarkTheme: Story = {
  args: {
    placeholder: 'Dark theme 검색',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 상태 스토리들
export const WithClearButton: Story = {
  args: {
    placeholder: '클리어 버튼이 있는 검색',
    showClearButton: true,
    value: '검색어 입력됨',
  },
};

export const WithError: Story = {
  args: {
    placeholder: '검색어를 입력해 주세요',
    error: true,
    helperText: '검색어는 최소 2자 이상 입력해야 합니다.',
    value: 'a',
  },
};

export const WithHelper: Story = {
  args: {
    placeholder: '키워드로 검색하세요',
    helperText: '제목, 내용, 태그를 검색할 수 있습니다.',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '비활성화된 검색',
    disabled: true,
    value: '검색 불가',
  },
};

// 인터랙티브 스토리들
export const Interactive: Story = {
  render: function InteractiveSearchbar() {
    const [value, setValue] = useState('');
    const [searchResult, setSearchResult] = useState<string>('');
    
    const handleSearch = (searchValue: string) => {
      setSearchResult(`"${searchValue}"로 검색했습니다.`);
    };
    
    const handleClear = () => {
      setValue('');
      setSearchResult('');
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '320px' }}>
        <Searchbar
          placeholder="검색어를 입력하고 Enter를 누르세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSearch={handleSearch}
          onClear={handleClear}
          showClearButton={!!value}
        />
        {searchResult && (
          <div style={{ 
            padding: '12px', 
            backgroundColor: '#f0f9ff', 
            borderRadius: '8px',
            fontSize: '14px',
            color: '#0369a1'
          }}>
            {searchResult}
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '검색 기능이 동작하는 인터랙티브 예시입니다. Enter 키를 누르거나 검색 아이콘을 클릭하여 검색할 수 있습니다.',
      },
    },
  },
};

// 조합 스토리들
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '320px' }}>
      <Searchbar variant="primary" placeholder="Primary 검색" />
      <Searchbar variant="secondary" placeholder="Secondary 검색" />
      <Searchbar variant="tertiary" placeholder="Tertiary 검색" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 variant를 한번에 보여주는 스토리입니다.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '320px' }}>
      <Searchbar size="small" placeholder="Small 검색" />
      <Searchbar size="medium" placeholder="Medium 검색" />
      <Searchbar size="large" placeholder="Large 검색" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 size를 한번에 보여주는 스토리입니다.',
      },
    },
  },
};

export const AllThemes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', minWidth: '320px' }}>
        <Searchbar theme="light" placeholder="Light theme 검색" />
      </div>
      <div style={{ padding: '24px', backgroundColor: '#1c1c1c', borderRadius: '8px', minWidth: '320px' }}>
        <Searchbar theme="dark" placeholder="Dark theme 검색" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '라이트/다크 테마를 배경과 함께 보여주는 스토리입니다.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '320px' }}>
      <Searchbar placeholder="정상 상태" />
      <Searchbar placeholder="클리어 버튼" showClearButton value="검색어 입력됨" />
      <Searchbar placeholder="에러 상태" error helperText="검색어가 올바르지 않습니다." value="invalid" />
      <Searchbar placeholder="헬퍼 텍스트" helperText="검색 도움말을 제공합니다." />
      <Searchbar placeholder="비활성화 상태" disabled value="검색 불가" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '검색바의 모든 상태를 보여주는 스토리입니다.',
      },
    },
  },
};

// 복합 조합 스토리
export const VariantSizeCombination: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Primary</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '320px' }}>
          <Searchbar variant="primary" size="small" placeholder="Small Primary 검색" />
          <Searchbar variant="primary" size="medium" placeholder="Medium Primary 검색" />
          <Searchbar variant="primary" size="large" placeholder="Large Primary 검색" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Secondary</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '320px' }}>
          <Searchbar variant="secondary" size="small" placeholder="Small Secondary 검색" />
          <Searchbar variant="secondary" size="medium" placeholder="Medium Secondary 검색" />
          <Searchbar variant="secondary" size="large" placeholder="Large Secondary 검색" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Tertiary</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '320px' }}>
          <Searchbar variant="tertiary" size="small" placeholder="Small Tertiary 검색" />
          <Searchbar variant="tertiary" size="medium" placeholder="Medium Tertiary 검색" />
          <Searchbar variant="tertiary" size="large" placeholder="Large Tertiary 검색" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Variant와 Size의 모든 조합을 체계적으로 보여주는 스토리입니다.',
      },
    },
  },
};

// 실제 사용 예시 스토리들
export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>블로그 검색</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Searchbar 
            size="large" 
            placeholder="게시글을 검색하세요..." 
            helperText="제목, 내용, 태그로 검색 가능합니다"
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>필터 검색</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Searchbar variant="secondary" placeholder="카테고리 검색" />
          <Searchbar variant="tertiary" size="small" placeholder="태그 검색" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>검색 상태</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Searchbar 
            placeholder="검색 중..." 
            value="React" 
            showClearButton
            helperText="3개의 결과를 찾았습니다"
          />
          <Searchbar 
            placeholder="검색어를 입력하세요" 
            error
            helperText="검색어는 최소 2자 이상 입력해야 합니다"
            value="a"
          />
          <Searchbar 
            placeholder="검색 기능 일시 중지" 
            disabled
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>반응형 검색</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Searchbar size="small" placeholder="모바일" style={{ flex: 1 }} />
          <Searchbar size="medium" placeholder="태블릿" style={{ flex: 1 }} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '실제 애플리케이션에서 사용될 수 있는 검색바 조합들을 보여주는 스토리입니다.',
      },
    },
  },
};

// 다크 테마 실제 사용 예시
export const DarkThemeExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>다크 테마 검색</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Searchbar theme="dark" placeholder="블로그 포스트 검색..." />
          <Searchbar theme="dark" variant="secondary" placeholder="카테고리 필터링" />
          <Searchbar theme="dark" variant="tertiary" placeholder="태그 검색" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>다크 테마 상태</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Searchbar 
            theme="dark" 
            placeholder="검색 완료" 
            value="JavaScript" 
            showClearButton
            helperText="15개의 결과를 찾았습니다"
          />
          <Searchbar 
            theme="dark" 
            placeholder="에러 상태" 
            error
            helperText="검색 중 오류가 발생했습니다"
            value="invalid search"
          />
          <Searchbar 
            theme="dark" 
            placeholder="비활성화 상태" 
            disabled
            value="검색 불가"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: '다크 테마에서의 실제 사용 예시를 보여주는 스토리입니다.',
      },
    },
  },
};

// 키보드 및 접근성 예시
export const AccessibilityExample: Story = {
  render: function AccessibilitySearchbar() {
    const [searchValue, setSearchValue] = useState('');
    const [accessibilityInfo, setAccessibilityInfo] = useState('');
    
    const handleSearch = (value: string) => {
      setAccessibilityInfo(`검색 실행: "${value}"`);
    };
    
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        setAccessibilityInfo('Enter 키로 검색 실행됨');
      }
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '320px' }}>
        <Searchbar
          id="accessibility-search"
          placeholder="접근성 지원 검색 (키보드 탐색 가능)"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
          onKeyDown={handleKeyDown}
          showClearButton={!!searchValue}
          onClear={() => {
            setSearchValue('');
            setAccessibilityInfo('검색어 지움');
          }}
          helperText="Tab 키로 이동, Enter 키로 검색, Escape 키로 클리어"
          aria-label="블로그 게시글 검색"
        />
        {accessibilityInfo && (
          <div 
            role="status" 
            aria-live="polite"
            style={{ 
              padding: '12px', 
              backgroundColor: '#e0f2fe', 
              borderRadius: '8px',
              fontSize: '14px',
              color: '#0369a1'
            }}
          >
            {accessibilityInfo}
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '키보드 탐색과 스크린 리더를 고려한 접근성 지원 예시입니다.',
      },
    },
  },
};
