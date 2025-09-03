import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Input from './index';

const meta: Meta<typeof Input> = {
  title: 'Commons/Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Input 컴포넌트는 다양한 variant, size, theme을 지원하는 범용 입력 컴포넌트입니다.

## Features
- 3가지 variant: primary, secondary, tertiary
- 3가지 size: small, medium, large  
- 2가지 theme: light, dark
- 라벨, 에러, 성공, 헬퍼 메시지 지원
- 전체 너비 옵션
- 접근성 지원 (ARIA attributes)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '입력 필드의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '입력 필드의 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '입력 필드의 테마',
    },
    label: {
      control: 'text',
      description: '입력 필드 위에 표시될 라벨',
    },
    placeholder: {
      control: 'text',
      description: '입력 필드의 플레이스홀더 텍스트',
    },
    error: {
      control: 'text',
      description: '에러 메시지',
    },
    success: {
      control: 'text',
      description: '성공 메시지',
    },
    helper: {
      control: 'text',
      description: '도움말 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '입력 필드 비활성화 여부',
    },
    fullWidth: {
      control: 'boolean',
      description: '전체 너비 사용 여부',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    placeholder: '회고를 남겨보세요.',
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    placeholder: 'Primary input',
    variant: 'primary',
    label: 'Primary Input',
  },
};

export const Secondary: Story = {
  args: {
    placeholder: 'Secondary input',
    variant: 'secondary',
    label: 'Secondary Input',
  },
};

export const Tertiary: Story = {
  args: {
    placeholder: 'Tertiary input',
    variant: 'tertiary',
    label: 'Tertiary Input',
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    placeholder: 'Small input',
    size: 'small',
    label: 'Small Size',
  },
};

export const Medium: Story = {
  args: {
    placeholder: 'Medium input',
    size: 'medium',
    label: 'Medium Size',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large input',
    size: 'large',
    label: 'Large Size',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    placeholder: 'Light theme input',
    theme: 'light',
    label: 'Light Theme',
  },
};

export const DarkTheme: Story = {
  args: {
    placeholder: 'Dark theme input',
    theme: 'dark',
    label: 'Dark Theme',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 상태 스토리들
export const WithLabel: Story = {
  args: {
    placeholder: '이름을 입력하세요',
    label: '이름',
  },
};

export const WithError: Story = {
  args: {
    placeholder: '이메일을 입력하세요',
    label: '이메일',
    error: '올바른 이메일 형식을 입력해주세요.',
    value: 'invalid-email',
  },
};

export const WithSuccess: Story = {
  args: {
    placeholder: '이메일을 입력하세요',
    label: '이메일',
    success: '사용 가능한 이메일입니다.',
    value: 'user@example.com',
  },
};

export const WithHelper: Story = {
  args: {
    placeholder: '비밀번호를 입력하세요',
    label: '비밀번호',
    helper: '최소 8자 이상, 영문/숫자/특수문자 포함',
    type: 'password',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '비활성화된 입력 필드',
    label: '비활성화',
    disabled: true,
    value: '수정할 수 없음',
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: '전체 너비 입력 필드',
    label: '전체 너비',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// 조합 스토리들
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
      <Input variant="primary" label="Primary" placeholder="Primary input" />
      <Input variant="secondary" label="Secondary" placeholder="Secondary input" />
      <Input variant="tertiary" label="Tertiary" placeholder="Tertiary input" />
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '300px' }}>
      <Input size="small" label="Small" placeholder="Small input" />
      <Input size="medium" label="Medium" placeholder="Medium input" />
      <Input size="large" label="Large" placeholder="Large input" />
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
      <div style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', minWidth: '300px' }}>
        <Input theme="light" label="Light Theme" placeholder="Light theme input" />
      </div>
      <div style={{ padding: '24px', backgroundColor: '#1c1c1c', borderRadius: '8px', minWidth: '300px' }}>
        <Input theme="dark" label="Dark Theme" placeholder="Dark theme input" />
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
      <Input label="Normal" placeholder="정상 상태" />
      <Input label="Error" placeholder="에러 상태" error="입력값이 올바르지 않습니다." value="invalid input" />
      <Input label="Success" placeholder="성공 상태" success="입력값이 올바릅니다." value="valid input" />
      <Input label="Helper" placeholder="도움말 상태" helper="추가 정보를 제공합니다." />
      <Input label="Disabled" placeholder="비활성화 상태" disabled value="수정 불가" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '입력 필드의 모든 상태를 보여주는 스토리입니다.',
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
          <Input variant="primary" size="small" label="Small" placeholder="Small primary" />
          <Input variant="primary" size="medium" label="Medium" placeholder="Medium primary" />
          <Input variant="primary" size="large" label="Large" placeholder="Large primary" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Secondary</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
          <Input variant="secondary" size="small" label="Small" placeholder="Small secondary" />
          <Input variant="secondary" size="medium" label="Medium" placeholder="Medium secondary" />
          <Input variant="secondary" size="large" label="Large" placeholder="Large secondary" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Tertiary</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
          <Input variant="tertiary" size="small" label="Small" placeholder="Small tertiary" />
          <Input variant="tertiary" size="medium" label="Medium" placeholder="Medium tertiary" />
          <Input variant="tertiary" size="large" label="Large" placeholder="Large tertiary" />
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
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>로그인 폼</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="이메일" placeholder="이메일을 입력하세요" type="email" />
          <Input label="비밀번호" placeholder="비밀번호를 입력하세요" type="password" helper="최소 8자 이상" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>프로필 설정</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="닉네임" placeholder="닉네임을 입력하세요" success="사용 가능한 닉네임입니다." value="사용자123" />
          <Input variant="secondary" label="자기소개" placeholder="간단한 자기소개를 작성해주세요" />
          <Input variant="tertiary" label="웹사이트" placeholder="https://" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>검색 및 필터</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input size="large" placeholder="게시글을 검색하세요..." fullWidth />
          <div style={{ display: 'flex', gap: '12px' }}>
            <Input size="small" placeholder="태그" style={{ flex: 1 }} />
            <Input size="small" placeholder="작성자" style={{ flex: 1 }} />
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>에러 상태</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="이메일" placeholder="이메일을 입력하세요" error="올바른 이메일 형식이 아닙니다." value="invalid-email" />
          <Input label="전화번호" placeholder="010-0000-0000" error="전화번호 형식을 확인해주세요." value="010-123" />
          <Input label="읽기 전용" placeholder="수정할 수 없음" disabled value="고정된 값" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '실제 애플리케이션에서 사용될 수 있는 입력 필드 조합들을 보여주는 스토리입니다.',
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
          <Input theme="dark" label="제목" placeholder="제목을 입력하세요" />
          <Input theme="dark" variant="secondary" label="내용" placeholder="내용을 입력하세요" />
          <Input theme="dark" variant="tertiary" label="태그" placeholder="태그를 입력하세요" helper="쉼표로 구분하여 입력" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>다크 테마 상태</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input theme="dark" label="성공" placeholder="성공 상태" success="저장되었습니다." value="완료된 입력" />
          <Input theme="dark" label="에러" placeholder="에러 상태" error="값이 올바르지 않습니다." value="잘못된 입력" />
          <Input theme="dark" label="비활성화" placeholder="비활성화 상태" disabled value="수정 불가" />
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
