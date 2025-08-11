import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      // Navigation
      nav: {
        home: 'Trang chủ',
        demos: 'Dự án',
        about: 'Giới thiệu',
        contact: 'Liên hệ',
        blog: 'Blog'
      },
      hero: {
        greeting: 'Xin chào, tôi là',
        name: 'Vũ Trí Khoa',
        title: 'Lập trình viên web',
        subtitle: 'Xây dựng sản phẩm web nhanh, đẹp, mượt — từ WebGL đến WebRTC SFU.',
        cta: {
          portfolio: 'Xem Portfolio',
          contact: 'Liên hệ'
        }
      },
      // Skills section
      skills: {
        title: 'Kỹ năng chính',
        subtitle: 'Các công nghệ tôi sử dụng để tạo ra những sản phẩm tuyệt vời',
        javascript: {
          title: 'JavaScript',
          desc: 'ES6+, Async/Await, Modules'
        },
        typescript: {
          title: 'TypeScript',
          desc: 'Type-safe development'
        },
        react: {
          title: 'React',
          desc: 'Hooks, Context, Performance'
        },
        nextjs: {
          title: 'Next.js',
          desc: 'SSR, SSG, App Router'
        },
        express: {
          title: 'Express.js',
          desc: 'REST APIs, Middleware'
        },
        webgl: {
          title: 'WebGL',
          desc: 'Three.js, Shaders, 3D Graphics'
        },
        webrtc: {
          title: 'WebRTC SFU',
          desc: 'Video conferencing, mediasoup'
        },
        chrome: {
          title: 'Chrome Extension',
          desc: 'Manifest V3, APIs'
        },
        ai: {
          title: 'AI Integration',
          desc: 'RAG, LLM tools, ML'
        }
      },
      // Featured section
      featured: {
        title: 'Dự án nổi bật',
        subtitle: 'Một số dự án tôi tự hào nhất',
        viewAll: 'Xem tất cả'
      },
      // Demo categories
      categories: {
        'web-management': 'Web Management',
        'video-conference': 'Video Conference',
        'webgl': 'WebGL',
        'chrome-extension': 'Chrome Extension',
        'showcase': 'Showcase Web',
        'ai': 'AI Tools',
        'libraries': 'Libraries'
      },
      // Common
      common: {
        liveDemo: 'Live Demo',
        sourceCode: 'Source Code',
        documentation: 'Tài liệu',
        featured: 'Nổi bật',
        search: 'Tìm kiếm...',
        allCategories: 'Tất cả',
        loading: 'Đang tải...',
        noResults: 'Không tìm thấy kết quả',
        backToHome: 'Về trang chủ'
      }
    }
  },
  en: {
    translation: {
      // Navigation  
      nav: {
        home: 'Home',
        demos: 'Demos',
        about: 'About',
        contact: 'Contact',
        blog: 'Blog'
      },
      // Hero section
      hero: {
        greeting: 'Hi, I am',
        name: 'Vũ Trí Khoa',
        title: 'Web Developer',
        subtitle: 'Building fast, beautiful, smooth web products — from WebGL to WebRTC SFU.',
        cta: {
          portfolio: 'View Portfolio',
          contact: 'Contact Me'
        }
      },
      // Skills section
      skills: {
        title: 'Core Skills',
        subtitle: 'Technologies I use to create amazing products',
        javascript: {
          title: 'JavaScript',
          desc: 'ES6+, Async/Await, Modules'
        },
        typescript: {
          title: 'TypeScript',
          desc: 'Type-safe development'
        },
        react: {
          title: 'React',
          desc: 'Hooks, Context, Performance'
        },
        nextjs: {
          title: 'Next.js',
          desc: 'SSR, SSG, App Router'
        },
        express: {
          title: 'Express.js',
          desc: 'REST APIs, Middleware'
        },
        webgl: {
          title: 'WebGL',
          desc: 'Three.js, Shaders, 3D Graphics'
        },
        webrtc: {
          title: 'WebRTC SFU',
          desc: 'Video conferencing, mediasoup'
        },
        chrome: {
          title: 'Chrome Extension',
          desc: 'Manifest V3, APIs'
        },
        ai: {
          title: 'AI Integration',
          desc: 'RAG, LLM tools, ML'
        }
      },
      // Featured section
      featured: {
        title: 'Featured Projects',
        subtitle: 'Some of my most proud work',
        viewAll: 'View All'
      },
      // Demo categories
      categories: {
        'web-management': 'Web Management',
        'video-conference': 'Video Conference',
        'webgl': 'WebGL',
        'chrome-extension': 'Chrome Extension',
        'showcase': 'Showcase Web',
        'ai': 'AI Tools',
        'libraries': 'Libraries'
      },
      // Common
      common: {
        liveDemo: 'Live Demo',
        sourceCode: 'Source Code',
        documentation: 'Documentation',
        featured: 'Featured',
        search: 'Search...',
        allCategories: 'All Categories',
        loading: 'Loading...',
        noResults: 'No results found',
        backToHome: 'Back to Home'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // default language
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false // This prevents SSR issues and async loading problems
    }
  });

export default i18n;