import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import Toggle from './index';

const meta: Meta<typeof Toggle> = {
  title: 'Commons/Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Toggle 컴포넌트는 다양한 variant, size, theme을 지원하는 범용 토글 스위치 컴포넌트입니다.

## Features
- 3가지 variant: primary, secondary, tertiary
- 3가지 size: small, medium, large  
- 2가지 theme: light, dark
- 라벨 지원
- 제어/비제어 모드 지원
- 접근성 지원 (키보드 탐색, 스크린리더)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '토글의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '토글의 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '토글의 테마',
    },
    checked: {
      control: 'boolean',
      description: '토글 상태 (제어 모드)',
    },
    defaultChecked: {
      control: 'boolean',
      description: '기본 토글 상태 (비제어 모드)',
    },
    disabled: {
      control: 'boolean',
      description: '토글 비활성화 여부',
    },
    label: {
      control: 'text',
      description: '토글 옆에 표시될 라벨',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    label: '토글',
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

// Variant 스토리들
export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary',
    variant: 'tertiary',
  },
};

// Size 스토리들
export const Small: Story = {
  args: {
    label: 'Small',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'large',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  args: {
    label: 'Light Theme',
    theme: 'light',
  },
};

export const DarkTheme: Story = {
  args: {
    label: 'Dark Theme',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 상태 스토리들
export const Checked: Story = {
  args: {
    label: 'Checked',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    disabled: true,
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
};

// 조합 스토리들
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Toggle variant="primary" label="Primary" />
      <Toggle variant="secondary" label="Secondary" />
      <Toggle variant="tertiary" label="Tertiary" />
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
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Toggle size="small" label="Small" />
      <Toggle size="medium" label="Medium" />
      <Toggle size="large" label="Large" />
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
      <div style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Toggle theme="light" label="Light Theme" />
      </div>
      <div style={{ padding: '24px', backgroundColor: '#1c1c1c', borderRadius: '8px' }}>
        <Toggle theme="dark" label="Dark Theme" />
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Toggle label="Normal (Unchecked)" />
      <Toggle label="Checked" checked />
      <Toggle label="Disabled" disabled />
      <Toggle label="Disabled Checked" disabled checked />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '토글의 모든 상태를 보여주는 스토리입니다.',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Toggle variant="primary" size="small" label="Small" />
          <Toggle variant="primary" size="medium" label="Medium" />
          <Toggle variant="primary" size="large" label="Large" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Secondary</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Toggle variant="secondary" size="small" label="Small" />
          <Toggle variant="secondary" size="medium" label="Medium" />
          <Toggle variant="secondary" size="large" label="Large" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Tertiary</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Toggle variant="tertiary" size="small" label="Small" />
          <Toggle variant="tertiary" size="medium" label="Medium" />
          <Toggle variant="tertiary" size="large" label="Large" />
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
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>설정 메뉴</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle variant="primary" label="알림 받기" defaultChecked />
          <Toggle variant="primary" label="이메일 수신 동의" />
          <Toggle variant="primary" label="마케팅 정보 수신" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>프로필 공개 설정</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle variant="secondary" size="small" label="프로필 공개" defaultChecked />
          <Toggle variant="secondary" size="small" label="연락처 공개" />
          <Toggle variant="secondary" size="small" label="활동 내역 공개" disabled />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>기능 활성화</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle variant="tertiary" size="large" label="다크 모드" />
          <Toggle variant="tertiary" size="large" label="자동 저장" defaultChecked />
          <Toggle variant="tertiary" size="large" label="고급 기능 (프리미엄)" disabled />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>관리자 권한</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle variant="primary" label="사용자 관리" disabled checked />
          <Toggle variant="primary" label="컨텐츠 관리" checked />
          <Toggle variant="primary" label="시스템 설정" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '실제 애플리케이션에서 사용될 수 있는 토글 조합들을 보여주는 스토리입니다.',
      },
    },
  },
};

// 다크 테마 실제 사용 예시
export const DarkThemeExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>다크 테마 설정</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle theme="dark" variant="primary" label="다크 모드 활성화" defaultChecked />
          <Toggle theme="dark" variant="primary" label="자동 테마 전환" />
          <Toggle theme="dark" variant="primary" label="고대비 모드" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>다크 테마 알림</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle theme="dark" variant="secondary" label="푸시 알림" defaultChecked />
          <Toggle theme="dark" variant="secondary" label="소리 알림" />
          <Toggle theme="dark" variant="secondary" label="진동 알림" disabled />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>다크 테마 접근성</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle theme="dark" variant="tertiary" size="large" label="화면 확대" />
          <Toggle theme="dark" variant="tertiary" size="large" label="음성 안내" />
          <Toggle theme="dark" variant="tertiary" size="large" label="키보드 탐색" defaultChecked />
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

// 인터랙티브 예시
export const InteractiveExample: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      emailUpdates: false,
    });

    const handleToggle = (key: keyof typeof settings) => (checked: boolean) => {
      setSettings(prev => ({ ...prev, [key]: checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>인터랙티브 설정</h3>
        
        <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Toggle
              label="알림 활성화"
              checked={settings.notifications}
              onChange={handleToggle('notifications')}
            />
            <Toggle
              label="다크 모드"
              checked={settings.darkMode}
              onChange={handleToggle('darkMode')}
              variant="secondary"
            />
            <Toggle
              label="자동 저장"
              checked={settings.autoSave}
              onChange={handleToggle('autoSave')}
              variant="tertiary"
            />
            <Toggle
              label="이메일 업데이트"
              checked={settings.emailUpdates}
              onChange={handleToggle('emailUpdates')}
            />
          </div>
        </div>
        
        <div style={{ padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>현재 설정:</h4>
          <pre style={{ fontSize: '12px', margin: 0 }}>
            {JSON.stringify(settings, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '실제로 상태가 변경되는 인터랙티브한 토글 예시입니다.',
      },
    },
  },
};
