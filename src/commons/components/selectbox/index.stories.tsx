import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SelectBox from './index';

const meta: Meta<typeof SelectBox> = {
  title: 'Commons/Components/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
SelectBox 컴포넌트는 다양한 variant, size, theme을 지원하는 범용 셀렉트박스 컴포넌트입니다.

## Features
- 3가지 variant: primary, secondary, tertiary
- 3가지 size: small, medium, large  
- 2가지 theme: light, dark
- 에러 및 헬퍼 메시지 지원
- 키보드 내비게이션 지원
- 접근성 지원 (ARIA attributes)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '셀렉트박스의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '셀렉트박스의 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '셀렉트박스의 테마',
    },
    placeholder: {
      control: 'text',
      description: '셀렉트박스의 플레이스홀더 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '셀렉트박스 비활성화 여부',
    },
    error: {
      control: 'boolean',
      description: '에러 상태 여부',
    },
    errorMessage: {
      control: 'text',
      description: '에러 메시지',
    },
    helperText: {
      control: 'text',
      description: '도움말 텍스트',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 공통 옵션 데이터
const defaultOptions = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
  { value: 'option5', label: '옵션 5', disabled: true },
];

const fruitOptions = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나' },
  { value: 'orange', label: '오렌지' },
  { value: 'grape', label: '포도' },
  { value: 'strawberry', label: '딸기' },
];

const cityOptions = [
  { value: 'seoul', label: '서울' },
  { value: 'busan', label: '부산' },
  { value: 'daegu', label: '대구' },
  { value: 'incheon', label: '인천' },
  { value: 'gwangju', label: '광주' },
  { value: 'daejeon', label: '대전' },
  { value: 'ulsan', label: '울산' },
];

// 기본 스토리
export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: '선택해주세요',
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Primary SelectBox',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Secondary SelectBox',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Tertiary SelectBox',
    variant: 'tertiary',
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Small SelectBox',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Medium SelectBox',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Large SelectBox',
    size: 'large',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Light Theme',
    theme: 'light',
  },
};

export const DarkTheme: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Dark Theme',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 상태 스토리들
export const WithDefaultValue: Story = {
  args: {
    options: fruitOptions,
    placeholder: '과일을 선택하세요',
    defaultValue: 'apple',
  },
};

export const WithError: Story = {
  args: {
    options: cityOptions,
    placeholder: '도시를 선택하세요',
    error: true,
    errorMessage: '필수 선택 항목입니다.',
  },
};

export const WithHelper: Story = {
  args: {
    options: fruitOptions,
    placeholder: '좋아하는 과일을 선택하세요',
    helperText: '하나의 과일만 선택할 수 있습니다.',
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    placeholder: '비활성화된 셀렉트박스',
    disabled: true,
    defaultValue: 'option2',
  },
};

// 조합 스토리들
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
      <SelectBox options={defaultOptions} variant="primary" placeholder="Primary SelectBox" />
      <SelectBox options={defaultOptions} variant="secondary" placeholder="Secondary SelectBox" />
      <SelectBox options={defaultOptions} variant="tertiary" placeholder="Tertiary SelectBox" />
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <SelectBox options={defaultOptions} size="small" placeholder="Small SelectBox" />
      <SelectBox options={defaultOptions} size="medium" placeholder="Medium SelectBox" />
      <SelectBox options={defaultOptions} size="large" placeholder="Large SelectBox" />
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
      <div style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', minWidth: '250px' }}>
        <SelectBox options={defaultOptions} theme="light" placeholder="Light Theme" />
      </div>
      <div style={{ padding: '24px', backgroundColor: '#1c1c1c', borderRadius: '8px', minWidth: '250px' }}>
        <SelectBox options={defaultOptions} theme="dark" placeholder="Dark Theme" />
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
      <SelectBox options={defaultOptions} placeholder="정상 상태" />
      <SelectBox options={defaultOptions} placeholder="기본값 설정" defaultValue="option2" />
      <SelectBox options={defaultOptions} placeholder="에러 상태" error errorMessage="선택이 필요합니다." />
      <SelectBox options={defaultOptions} placeholder="헬퍼 텍스트" helperText="원하는 옵션을 선택하세요." />
      <SelectBox options={defaultOptions} placeholder="비활성화 상태" disabled defaultValue="option3" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '셀렉트박스의 모든 상태를 보여주는 스토리입니다.',
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
          <SelectBox options={defaultOptions} variant="primary" size="small" placeholder="Small Primary" />
          <SelectBox options={defaultOptions} variant="primary" size="medium" placeholder="Medium Primary" />
          <SelectBox options={defaultOptions} variant="primary" size="large" placeholder="Large Primary" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Secondary</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
          <SelectBox options={defaultOptions} variant="secondary" size="small" placeholder="Small Secondary" />
          <SelectBox options={defaultOptions} variant="secondary" size="medium" placeholder="Medium Secondary" />
          <SelectBox options={defaultOptions} variant="secondary" size="large" placeholder="Large Secondary" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Tertiary</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
          <SelectBox options={defaultOptions} variant="tertiary" size="small" placeholder="Small Tertiary" />
          <SelectBox options={defaultOptions} variant="tertiary" size="medium" placeholder="Medium Tertiary" />
          <SelectBox options={defaultOptions} variant="tertiary" size="large" placeholder="Large Tertiary" />
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
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>사용자 정보 폼</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SelectBox 
            options={cityOptions} 
            placeholder="거주 지역을 선택하세요" 
            helperText="현재 거주하고 계신 도시를 선택해주세요."
          />
          <SelectBox 
            options={[
              { value: '10s', label: '10대' },
              { value: '20s', label: '20대' },
              { value: '30s', label: '30대' },
              { value: '40s', label: '40대' },
              { value: '50s', label: '50대' },
              { value: '60s', label: '60대 이상' },
            ]} 
            variant="secondary"
            placeholder="연령대를 선택하세요" 
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>상품 필터</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SelectBox 
            options={[
              { value: 'all', label: '전체 카테고리' },
              { value: 'electronics', label: '전자제품' },
              { value: 'clothing', label: '의류' },
              { value: 'books', label: '도서' },
              { value: 'food', label: '식품' },
            ]}
            size="large"
            placeholder="카테고리 선택"
            defaultValue="all"
          />
          <div style={{ display: 'flex', gap: '12px' }}>
                         <div style={{ flex: 1 }}>
               <SelectBox 
                 options={[
                   { value: 'latest', label: '최신순' },
                   { value: 'popular', label: '인기순' },
                   { value: 'price-low', label: '낮은 가격순' },
                   { value: 'price-high', label: '높은 가격순' },
                 ]}
                 size="small"
                 placeholder="정렬"
                 variant="tertiary"
               />
             </div>
             <div style={{ flex: 1 }}>
               <SelectBox 
                 options={[
                   { value: '10', label: '10개씩' },
                   { value: '20', label: '20개씩' },
                   { value: '50', label: '50개씩' },
                 ]}
                 size="small"
                 placeholder="개수"
                 variant="tertiary"
                 defaultValue="20"
               />
             </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>설정</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SelectBox 
            options={[
              { value: 'kr', label: '한국어' },
              { value: 'en', label: 'English' },
              { value: 'ja', label: '日本語' },
              { value: 'zh', label: '中文' },
            ]}
            placeholder="언어 설정"
            defaultValue="kr"
            helperText="인터페이스 언어를 설정합니다."
          />
          <SelectBox 
            options={[
              { value: 'light', label: '라이트 모드' },
              { value: 'dark', label: '다크 모드' },
              { value: 'auto', label: '시스템 설정' },
            ]}
            variant="secondary"
            placeholder="테마 설정"
            defaultValue="auto"
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>에러 상태</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SelectBox 
            options={cityOptions}
            placeholder="필수 선택 항목"
            error
            errorMessage="지역을 반드시 선택해주세요."
          />
          <SelectBox 
            options={fruitOptions}
            placeholder="수정할 수 없음"
            disabled
            defaultValue="apple"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '실제 애플리케이션에서 사용될 수 있는 셀렉트박스 조합들을 보여주는 스토리입니다.',
      },
    },
  },
};

// 다크 테마 실제 사용 예시
export const DarkThemeExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>다크 테마 폼</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SelectBox theme="dark" options={cityOptions} placeholder="지역을 선택하세요" />
          <SelectBox theme="dark" variant="secondary" options={fruitOptions} placeholder="과일을 선택하세요" />
          <SelectBox theme="dark" variant="tertiary" options={defaultOptions} placeholder="옵션을 선택하세요" helperText="원하는 옵션을 선택해주세요." />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>다크 테마 상태</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SelectBox theme="dark" options={fruitOptions} placeholder="정상 상태" defaultValue="banana" helperText="선택이 완료되었습니다." />
          <SelectBox theme="dark" options={cityOptions} placeholder="에러 상태" error errorMessage="값이 올바르지 않습니다." />
          <SelectBox theme="dark" options={defaultOptions} placeholder="비활성화 상태" disabled defaultValue="option2" />
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

// 상호작용 데모
export const InteractiveDemo: Story = {
  render: () => {
    const handleChange = (value: string, option: { value: string; label: string; disabled?: boolean }) => {
      console.log('Selected:', value, option);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>상호작용 테스트</h3>
          <p style={{ marginBottom: '16px', color: '#666', fontSize: '14px' }}>
            브라우저 콘솔을 열어 선택 이벤트를 확인하세요.
          </p>
        </div>
        <SelectBox 
          options={fruitOptions}
          placeholder="과일을 선택하세요"
          onChange={handleChange}
          onFocus={() => console.log('SelectBox focused')}
          onBlur={() => console.log('SelectBox blurred')}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '셀렉트박스의 상호작용을 테스트할 수 있는 스토리입니다. 브라우저 콘솔에서 이벤트를 확인할 수 있습니다.',
      },
    },
  },
};
