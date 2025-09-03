import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from './index';
import Image from 'next/image';

const meta: Meta<typeof Button> = {
  title: 'Commons/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Button 컴포넌트는 다양한 variant, size, theme을 지원하는 범용 버튼 컴포넌트입니다.

## Features
- 3가지 variant: primary, secondary, tertiary
- 3가지 size: small, medium, large  
- 2가지 theme: light, dark
- 아이콘 지원 (left/right 위치 조정 가능)
- 로딩 상태 지원
- 기본 플러스 아이콘 제공
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '버튼의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '버튼의 테마',
    },
    children: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태 여부',
    },
    showDefaultIcon: {
      control: 'boolean',
      description: '기본 플러스 아이콘 표시 여부',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: '아이콘 위치',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: '버튼',
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    children: 'Small',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'large',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    children: 'Light Theme',
    theme: 'light',
  },
};

export const DarkTheme: Story = {
  args: {
    children: 'Dark Theme',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 상태 스토리들
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading',
    loading: true,
  },
};

// 아이콘 스토리들
export const WithDefaultIcon: Story = {
  args: {
    children: 'Add Item',
    showDefaultIcon: true,
  },
};

export const WithCustomIcon: Story = {
  args: {
    children: 'Search',
    icon: (
      <Image
        src="/icons/search_outline_light_m.svg"
        alt="search icon"
        width={24}
        height={24}
        style={{ filter: 'invert(1)' }}
      />
    ),
  },
};

export const IconRight: Story = {
  args: {
    children: 'Next',
    showDefaultIcon: true,
    iconPosition: 'right',
  },
};

// 조합 스토리들
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
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
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
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
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <div style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Button theme="light">Light Theme</Button>
      </div>
      <div style={{ padding: '16px', backgroundColor: '#000000', borderRadius: '8px' }}>
        <Button theme="dark">Dark Theme</Button>
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
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼의 모든 상태를 보여주는 스토리입니다.',
      },
    },
  },
};

// 복합 조합 스토리
export const VariantSizeCombination: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Primary</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Secondary</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="secondary" size="small">Small</Button>
          <Button variant="secondary" size="medium">Medium</Button>
          <Button variant="secondary" size="large">Large</Button>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Tertiary</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button variant="tertiary" size="small">Small</Button>
          <Button variant="tertiary" size="medium">Medium</Button>
          <Button variant="tertiary" size="large">Large</Button>
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>폼 액션 버튼들</h3>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="tertiary" size="medium">취소</Button>
          <Button variant="primary" size="medium">저장</Button>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>CTA 버튼</h3>
        <Button variant="primary" size="large" showDefaultIcon>새 게시글 작성</Button>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>내비게이션 버튼</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button 
            variant="secondary" 
            size="small"
            icon={
              <Image
                src="/icons/leftdisabled_outline_light_m.svg"
                alt="previous"
                width={16}
                height={16}
              />
            }
          >
            이전
          </Button>
          <Button 
            variant="secondary" 
            size="small"
            icon={
              <Image
                src="/icons/rightenable_outline_light_m.svg"
                alt="next"
                width={16}
                height={16}
              />
            }
            iconPosition="right"
          >
            다음
          </Button>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>로딩 상태</h3>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="primary" size="medium" loading>데이터 저장 중...</Button>
          <Button variant="secondary" size="medium" disabled>비활성화됨</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '실제 애플리케이션에서 사용될 수 있는 버튼 조합들을 보여주는 스토리입니다.',
      },
    },
  },
};
