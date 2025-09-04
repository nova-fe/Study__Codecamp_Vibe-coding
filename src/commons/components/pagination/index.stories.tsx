import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Pagination from './index';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Commons/Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Pagination 컴포넌트는 다양한 variant, size, theme을 지원하는 범용 페이지네이션 컴포넌트입니다.

## Features
- 3가지 variant: primary, secondary, tertiary
- 3가지 size: small, medium, large  
- 2가지 theme: light, dark
- 이전/다음 버튼 지원
- 최대 표시 페이지 수 설정 가능
- 접근성 지원 (ARIA attributes)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: '페이지네이션의 스타일 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '페이지네이션의 크기',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '페이지네이션의 테마',
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: '현재 활성화된 페이지',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: '전체 페이지 수',
    },
    maxVisiblePages: {
      control: { type: 'number', min: 3, max: 10 },
      description: '한 번에 표시할 최대 페이지 수',
    },
    showPrevNext: {
      control: 'boolean',
      description: '이전/다음 버튼 표시 여부',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper for stories that need state management
const InteractivePagination = (args: Parameters<typeof Pagination>[0]) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  
  return (
    <Pagination 
      {...args} 
      currentPage={currentPage} 
      onPageChange={setCurrentPage}
    />
  );
};

// 기본 스토리
export const Default: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
  },
};

// Variant 스토리들
export const Primary: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'tertiary',
  },
};

// Size 스토리들
export const Small: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 3,
    totalPages: 10,
    size: 'small',
  },
};

export const Medium: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 3,
    totalPages: 10,
    size: 'medium',
  },
};

export const Large: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 3,
    totalPages: 10,
    size: 'large',
  },
};

// Theme 스토리들
export const LightTheme: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 3,
    totalPages: 10,
    theme: 'light',
  },
};

export const DarkTheme: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 3,
    totalPages: 10,
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 기능 스토리들
export const WithoutPrevNext: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 3,
    totalPages: 10,
    showPrevNext: false,
  },
};

export const MaxVisiblePages3: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 5,
    totalPages: 20,
    maxVisiblePages: 3,
  },
};

export const MaxVisiblePages7: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 5,
    totalPages: 20,
    maxVisiblePages: 7,
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
};

export const FirstPage: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const LastPage: Story = {
  render: InteractivePagination,
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};

// 조합 스토리들
export const AllVariants: Story = {
  render: () => {
    const [primaryPage, setPrimaryPage] = useState(3);
    const [secondaryPage, setSecondaryPage] = useState(3);
    const [tertiaryPage, setTertiaryPage] = useState(3);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '8px' }}>Primary</h4>
          <Pagination variant="primary" currentPage={primaryPage} totalPages={10} onPageChange={setPrimaryPage} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '8px' }}>Secondary</h4>
          <Pagination variant="secondary" currentPage={secondaryPage} totalPages={10} onPageChange={setSecondaryPage} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '8px' }}>Tertiary</h4>
          <Pagination variant="tertiary" currentPage={tertiaryPage} totalPages={10} onPageChange={setTertiaryPage} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '모든 variant를 한번에 보여주는 스토리입니다.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => {
    const [smallPage, setSmallPage] = useState(3);
    const [mediumPage, setMediumPage] = useState(3);
    const [largePage, setLargePage] = useState(3);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '8px' }}>Small</h4>
          <Pagination size="small" currentPage={smallPage} totalPages={10} onPageChange={setSmallPage} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '8px' }}>Medium</h4>
          <Pagination size="medium" currentPage={mediumPage} totalPages={10} onPageChange={setMediumPage} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '8px' }}>Large</h4>
          <Pagination size="large" currentPage={largePage} totalPages={10} onPageChange={setLargePage} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '모든 size를 한번에 보여주는 스토리입니다.',
      },
    },
  },
};

export const AllThemes: Story = {
  render: () => {
    const [lightPage, setLightPage] = useState(3);
    const [darkPage, setDarkPage] = useState(3);
    
    return (
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <div style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}>
          <h4 style={{ marginBottom: '16px', color: '#000000' }}>Light Theme</h4>
          <Pagination theme="light" currentPage={lightPage} totalPages={10} onPageChange={setLightPage} />
        </div>
        <div style={{ padding: '24px', backgroundColor: '#1c1c1c', borderRadius: '8px', textAlign: 'center' }}>
          <h4 style={{ marginBottom: '16px', color: '#ffffff' }}>Dark Theme</h4>
          <Pagination theme="dark" currentPage={darkPage} totalPages={10} onPageChange={setDarkPage} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '라이트/다크 테마를 배경과 함께 보여주는 스토리입니다.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => {
    const [normalPage, setNormalPage] = useState(5);
    const [shortPage, setShortPage] = useState(2);
    const [longPage, setLongPage] = useState(10);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '8px' }}>Normal (10 pages)</h4>
          <Pagination currentPage={normalPage} totalPages={10} onPageChange={setNormalPage} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '8px' }}>Short (3 pages)</h4>
          <Pagination currentPage={shortPage} totalPages={3} onPageChange={setShortPage} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '8px' }}>Long (50 pages)</h4>
          <Pagination currentPage={longPage} totalPages={50} onPageChange={setLongPage} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '8px' }}>Single page</h4>
          <Pagination currentPage={1} totalPages={1} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ marginBottom: '8px' }}>Without navigation buttons</h4>
          <Pagination currentPage={5} totalPages={10} showPrevNext={false} onPageChange={setNormalPage} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '페이지네이션의 모든 상태를 보여주는 스토리입니다.',
      },
    },
  },
};

// 복합 조합 스토리
export const VariantSizeCombination: Story = {
  render: () => {
    const [primaryPages, setPrimaryPages] = useState({ small: 3, medium: 3, large: 3 });
    const [secondaryPages, setSecondaryPages] = useState({ small: 3, medium: 3, large: 3 });
    const [tertiaryPages, setTertiaryPages] = useState({ small: 3, medium: 3, large: 3 });
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Primary</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Small</span>
              <Pagination 
                variant="primary" 
                size="small" 
                currentPage={primaryPages.small} 
                totalPages={10} 
                onPageChange={(page) => setPrimaryPages(prev => ({ ...prev, small: page }))}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Medium</span>
              <Pagination 
                variant="primary" 
                size="medium" 
                currentPage={primaryPages.medium} 
                totalPages={10} 
                onPageChange={(page) => setPrimaryPages(prev => ({ ...prev, medium: page }))}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Large</span>
              <Pagination 
                variant="primary" 
                size="large" 
                currentPage={primaryPages.large} 
                totalPages={10} 
                onPageChange={(page) => setPrimaryPages(prev => ({ ...prev, large: page }))}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Secondary</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Small</span>
              <Pagination 
                variant="secondary" 
                size="small" 
                currentPage={secondaryPages.small} 
                totalPages={10} 
                onPageChange={(page) => setSecondaryPages(prev => ({ ...prev, small: page }))}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Medium</span>
              <Pagination 
                variant="secondary" 
                size="medium" 
                currentPage={secondaryPages.medium} 
                totalPages={10} 
                onPageChange={(page) => setSecondaryPages(prev => ({ ...prev, medium: page }))}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Large</span>
              <Pagination 
                variant="secondary" 
                size="large" 
                currentPage={secondaryPages.large} 
                totalPages={10} 
                onPageChange={(page) => setSecondaryPages(prev => ({ ...prev, large: page }))}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Tertiary</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Small</span>
              <Pagination 
                variant="tertiary" 
                size="small" 
                currentPage={tertiaryPages.small} 
                totalPages={10} 
                onPageChange={(page) => setTertiaryPages(prev => ({ ...prev, small: page }))}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Medium</span>
              <Pagination 
                variant="tertiary" 
                size="medium" 
                currentPage={tertiaryPages.medium} 
                totalPages={10} 
                onPageChange={(page) => setTertiaryPages(prev => ({ ...prev, medium: page }))}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666', marginBottom: '8px', display: 'block' }}>Large</span>
              <Pagination 
                variant="tertiary" 
                size="large" 
                currentPage={tertiaryPages.large} 
                totalPages={10} 
                onPageChange={(page) => setTertiaryPages(prev => ({ ...prev, large: page }))}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
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
  render: () => {
    const [blogPage, setBlogPage] = useState(1);
    const [searchPage, setSearchPage] = useState(1);
    const [adminPage, setAdminPage] = useState(5);
    const [mobilePage, setMobilePage] = useState(2);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>블로그 게시글 목록</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px', color: '#666' }}>총 148개의 게시글</p>
            <Pagination 
              variant="primary" 
              size="medium" 
              currentPage={blogPage} 
              totalPages={15} 
              onPageChange={setBlogPage}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>검색 결과</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                         <p style={{ marginBottom: '16px', color: '#666' }}>검색어 &quot;React&quot;에 대한 총 45개의 결과</p>
            <Pagination 
              variant="secondary" 
              size="small" 
              currentPage={searchPage} 
              totalPages={5} 
              maxVisiblePages={3}
              onPageChange={setSearchPage}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>관리자 대시보드</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px', color: '#666' }}>총 2,340개의 사용자 데이터</p>
            <Pagination 
              variant="tertiary" 
              size="large" 
              currentPage={adminPage} 
              totalPages={234} 
              maxVisiblePages={7}
              onPageChange={setAdminPage}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>모바일 화면 (내비게이션 없음)</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px', color: '#666' }}>간소화된 페이지네이션</p>
            <Pagination 
              variant="primary" 
              size="small" 
              currentPage={mobilePage} 
              totalPages={10} 
              maxVisiblePages={3}
              showPrevNext={false}
              onPageChange={setMobilePage}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '실제 애플리케이션에서 사용될 수 있는 페이지네이션 조합들을 보여주는 스토리입니다.',
      },
    },
  },
};

// 다크 테마 실제 사용 예시
export const DarkThemeExamples: Story = {
  render: () => {
    const [darkBlogPage, setDarkBlogPage] = useState(3);
    const [darkSearchPage, setDarkSearchPage] = useState(1);
    const [darkAdminPage, setDarkAdminPage] = useState(8);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>다크 테마 블로그</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#2c2c2c', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px', color: '#cccccc' }}>총 89개의 게시글</p>
            <Pagination 
              variant="primary" 
              theme="dark" 
              size="medium" 
              currentPage={darkBlogPage} 
              totalPages={9} 
              onPageChange={setDarkBlogPage}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>다크 테마 검색</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#2c2c2c', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px', color: '#cccccc' }}>검색 결과 총 156개</p>
            <Pagination 
              variant="secondary" 
              theme="dark" 
              size="small" 
              currentPage={darkSearchPage} 
              totalPages={16} 
              maxVisiblePages={5}
              onPageChange={setDarkSearchPage}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>다크 테마 관리자</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#2c2c2c', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px', color: '#cccccc' }}>총 1,024개의 데이터</p>
            <Pagination 
              variant="tertiary" 
              theme="dark" 
              size="large" 
              currentPage={darkAdminPage} 
              totalPages={103} 
              maxVisiblePages={7}
              onPageChange={setDarkAdminPage}
            />
          </div>
        </div>
      </div>
    );
  },
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

// 극단적인 케이스들
export const EdgeCases: Story = {
  render: () => {
    const [edgePage1, setEdgePage1] = useState(1);
    const [edgePage2, setEdgePage2] = useState(50);
    const [edgePage3, setEdgePage3] = useState(500);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>매우 적은 페이지 (2페이지)</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <Pagination 
              currentPage={edgePage1} 
              totalPages={2} 
              onPageChange={setEdgePage1}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>중간 규모 (100페이지)</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <Pagination 
              currentPage={edgePage2} 
              totalPages={100} 
              maxVisiblePages={5}
              onPageChange={setEdgePage2}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>매우 많은 페이지 (1000페이지)</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <Pagination 
              currentPage={edgePage3} 
              totalPages={1000} 
              maxVisiblePages={3}
              onPageChange={setEdgePage3}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>단일 페이지 (비활성 상태)</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <Pagination 
              currentPage={1} 
              totalPages={1}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '극단적인 상황에서의 페이지네이션 동작을 보여주는 스토리입니다.',
      },
    },
  },
};

// 5페이지 단위 그룹 이동 테스트
export const GroupNavigation: Story = {
  render: () => {
    const [group1Page, setGroup1Page] = useState(3);
    const [group2Page, setGroup2Page] = useState(7);
    const [group3Page, setGroup3Page] = useState(13);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>첫 번째 그룹 (1-5페이지)</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px', color: '#666', fontSize: '14px' }}>
              현재 페이지: {group1Page} | 화살표 클릭 시 5페이지 단위로 이동
            </p>
            <Pagination 
              currentPage={group1Page} 
              totalPages={25} 
              onPageChange={setGroup1Page}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>두 번째 그룹 (6-10페이지)</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px', color: '#666', fontSize: '14px' }}>
              현재 페이지: {group2Page} | 이전 화살표로 1-5페이지, 다음 화살표로 11-15페이지로 이동
            </p>
            <Pagination 
              currentPage={group2Page} 
              totalPages={25} 
              onPageChange={setGroup2Page}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>세 번째 그룹 (11-15페이지)</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px', color: '#666', fontSize: '14px' }}>
              현재 페이지: {group3Page} | 이전 화살표로 6-10페이지, 다음 화살표로 16-20페이지로 이동
            </p>
            <Pagination 
              currentPage={group3Page} 
              totalPages={25} 
              onPageChange={setGroup3Page}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>마지막 그룹 (21-25페이지)</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px', color: '#666', fontSize: '14px' }}>
              현재 페이지: 23 | 마지막 그룹에서는 다음 화살표가 비활성화됨
            </p>
            <Pagination 
              currentPage={23} 
              totalPages={25} 
              onPageChange={() => {}}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>단일 페이지 (화살표 숨김)</h3>
          <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ marginBottom: '16px', color: '#666', fontSize: '14px' }}>
              총 페이지가 1일 때는 화살표가 표시되지 않음
            </p>
            <Pagination 
              currentPage={1} 
              totalPages={1}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '5페이지 단위 그룹 이동 기능을 테스트할 수 있는 스토리입니다. 화살표 클릭 시 5페이지 단위로 이동하며, 총 페이지가 1일 때는 화살표가 숨겨집니다.',
      },
    },
  },
};
