export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDesc: string;
  image: string;
  tags: string[];
  featured: boolean;
  liveDemo?: string;
  sourceCode?: string;
  documentation?: string;
  challenges?: string[];
  results?: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
  };
}

export const projects: Project[] = [
  // Video Conference
  {
    id: 'nebula-meet',
    title: 'Nebula Meet (SFU)',
    category: 'video-conference',
    description: 'A scalable video conferencing solution using mediasoup SFU architecture. Supports up to 25 users in a grid layout with features like screen sharing, recording, chat, and spotlight mode.',
    shortDesc: 'Scalable video conferencing with mediasoup SFU',
    image: '/api/placeholder/600/400',
    tags: ['WebRTC', 'mediasoup', 'SFU', 'Node.js', 'React', 'Socket.io'],
    featured: true,
    liveDemo: 'https://nebula-meet-demo.vercel.app',
    sourceCode: 'https://github.com/vutrkhoa/nebula-meet',
    challenges: [
      'Optimizing bandwidth for multiple video streams',
      'Implementing adaptive bitrate for different network conditions',
      'Managing complex state for 25+ participants'
    ],
    results: [
      'Support 25+ concurrent users with stable performance',
      'Automatic quality adaptation based on network',
      'Sub-second latency for real-time communication'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Socket.io-client'],
      backend: ['Node.js', 'mediasoup', 'Socket.io', 'Express'],
      tools: ['Docker', 'NGINX', 'PM2']
    }
  },
  
  // WebGL
  {
    id: 'photo-gl-filters',
    title: 'PhotoGL Filters',
    category: 'webgl',
    description: 'Advanced photo filtering system using WebGL shaders. Includes real-time effects like blur, sharpen, color correction, vintage effects, and custom filter combinations.',
    shortDesc: 'Real-time photo filters with WebGL shaders',
    image: '/api/placeholder/600/400',
    tags: ['WebGL', 'GLSL', 'Canvas', 'Image Processing', 'React'],
    featured: true,
    liveDemo: 'https://photo-gl-filters.vercel.app',
    sourceCode: 'https://github.com/vutrkhoa/photo-gl-filters',
    challenges: [
      'Writing efficient fragment shaders for real-time processing',
      'Managing GPU memory for large images',
      'Creating smooth filter transitions'
    ],
    results: [
      '60fps real-time filtering on 4K images',
      '15+ custom shader effects',
      'Export functionality with preserved quality'
    ],
    techStack: {
      frontend: ['React', 'WebGL', 'GLSL', 'Canvas API'],
      tools: ['Webpack', 'TypeScript']
    }
  },
  
  {
    id: 'glb-loader-pbr',
    title: 'GLB Loader + PBR + Shadows',
    category: 'webgl',
    description: 'A comprehensive 3D model loader with physically-based rendering (PBR) materials and dynamic shadow mapping. Supports GLB/GLTF format with environment lighting.',
    shortDesc: '3D model viewer with PBR materials and shadows',
    image: '/api/placeholder/600/400',
    tags: ['Three.js', 'GLB', 'PBR', 'Shadows', 'WebGL'],
    featured: false,
    liveDemo: 'https://glb-pbr-viewer.vercel.app',
    sourceCode: 'https://github.com/vutrkhoa/glb-pbr-viewer',
    techStack: {
      frontend: ['Three.js', 'React', 'TypeScript'],
      tools: ['Vite', 'Blender']
    }
  },
  
  // Chrome Extensions
  {
    id: 'eop-text-log',
    title: 'Eop Text Log',
    category: 'chrome-extension',
    description: 'Chrome extension for automatically logging and organizing text selections across websites. Features smart categorization, search, and export functionality.',
    shortDesc: 'Smart text logging and organization tool',
    image: '/api/placeholder/600/400',
    tags: ['Chrome Extension', 'Manifest V3', 'IndexedDB', 'Context Menu'],
    featured: false,
    sourceCode: 'https://github.com/vutrkhoa/eop-text-log',
    techStack: {
      frontend: ['Vanilla JS', 'Chrome APIs', 'IndexedDB'],
      tools: ['Webpack', 'Chrome DevTools']
    }
  },
  
  {
    id: 'image2text-helper',
    title: 'Image2Text Helper (OCR)',
    category: 'chrome-extension',
    description: 'OCR-powered Chrome extension that extracts text from images on web pages. Uses Tesseract.js for offline text recognition with multiple language support.',
    shortDesc: 'OCR text extraction from web images',
    image: '/api/placeholder/600/400',
    tags: ['OCR', 'Tesseract.js', 'Chrome Extension', 'Image Processing'],
    featured: true,
    sourceCode: 'https://github.com/vutrkhoa/image2text-helper',
    techStack: {
      frontend: ['React', 'Tesseract.js', 'Chrome APIs'],
      tools: ['Webpack', 'Web Workers']
    }
  },
  
  // Web Management
  {
    id: 'inventory-admin',
    title: 'Inventory Admin Dashboard',
    category: 'web-management',
    description: 'Comprehensive inventory management system with real-time tracking, automated alerts, and detailed analytics. Features role-based access control and advanced reporting.',
    shortDesc: 'Full-featured inventory management system',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io'],
    featured: true,
    liveDemo: 'https://inventory-admin-demo.vercel.app',
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'React Query'],
      backend: ['Node.js', 'Express', 'Socket.io'],
      database: ['PostgreSQL', 'Redis'],
      tools: ['Docker', 'GitHub Actions']
    }
  },
  
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard (Recharts)',
    category: 'web-management',
    description: 'Interactive analytics dashboard with customizable charts and real-time data visualization. Built with Recharts for responsive and beautiful data presentation.',
    shortDesc: 'Interactive data visualization dashboard',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Recharts', 'D3.js', 'WebSocket', 'TypeScript'],
    featured: false,
    liveDemo: 'https://analytics-dashboard-demo.vercel.app',
    techStack: {
      frontend: ['React', 'Recharts', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'WebSocket'],
      tools: ['Vite', 'ESLint']
    }
  },
  
  // AI
  {
    id: 'docs-rag-assistant',
    title: 'Docs RAG Assistant',
    category: 'ai',
    description: 'AI-powered documentation assistant using Retrieval-Augmented Generation (RAG). Enables natural language queries over large document collections with precise, context-aware responses.',
    shortDesc: 'RAG-powered documentation search and Q&A',
    image: '/api/placeholder/600/400',
    tags: ['RAG', 'OpenAI', 'Pinecone', 'LangChain', 'Vector Search'],
    featured: true,
    liveDemo: 'https://docs-rag-demo.vercel.app',
    sourceCode: 'https://github.com/vutrkhoa/docs-rag-assistant',
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'OpenAI API', 'LangChain'],
      database: ['Pinecone', 'Vector DB'],
      tools: ['Vercel', 'Docker']
    }
  },
  
  {
    id: 'youtube-views-predictor',
    title: 'YouTube Views Predictor',
    category: 'ai',
    description: 'Machine learning model that predicts YouTube video view counts based on title, thumbnail, tags, and upload timing. Uses ensemble methods for improved accuracy.',
    shortDesc: 'ML model for predicting YouTube video performance',
    image: '/api/placeholder/600/400',
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'YouTube API', 'React'],
    featured: false,
    liveDemo: 'https://youtube-predictor.vercel.app',
    techStack: {
      frontend: ['React', 'Chart.js', 'TypeScript'],
      backend: ['Python', 'FastAPI', 'Scikit-learn'],
      tools: ['Jupyter', 'Docker', 'YouTube API']
    }
  },
  
  // Showcase
  {
    id: 'khoa-studio-landing',
    title: 'Khoa Studio Landing',
    category: 'showcase',
    description: 'Modern landing page for a creative studio with smooth animations, parallax effects, and responsive design. Features interactive portfolio gallery and contact forms.',
    shortDesc: 'Creative studio landing page with animations',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
    featured: false,
    liveDemo: 'https://khoa-studio.vercel.app',
    sourceCode: 'https://github.com/vutrkhoa/khoa-studio-landing',
    techStack: {
      frontend: ['React', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
      tools: ['Vite', 'Vercel']
    }
  },
  
  // Libraries
  {
    id: 'photo-gl-core',
    title: 'photo-gl-core',
    category: 'libraries',
    description: 'Lightweight WebGL library for real-time photo processing. Provides a simple API for applying filters, effects, and transformations to images using GPU acceleration.',
    shortDesc: 'WebGL photo processing library',
    image: '/api/placeholder/600/400',
    tags: ['WebGL', 'TypeScript', 'Library', 'Image Processing'],
    featured: false,
    sourceCode: 'https://github.com/vutrkhoa/photo-gl-core',
    documentation: 'https://photo-gl-core.vercel.app/docs',
    techStack: {
      frontend: ['WebGL', 'TypeScript', 'Canvas API'],
      tools: ['Rollup', 'Jest', 'TypeDoc']
    }
  },
  
  {
    id: 'webrtc-sfu-utils',
    title: 'webrtc-sfu-utils',
    category: 'libraries',
    description: 'Utility library for building WebRTC SFU applications. Includes helper functions for mediasoup integration, bandwidth management, and connection handling.',
    shortDesc: 'WebRTC SFU development utilities',
    image: '/api/placeholder/600/400',
    tags: ['WebRTC', 'mediasoup', 'TypeScript', 'Library'],
    featured: false,
    sourceCode: 'https://github.com/vutrkhoa/webrtc-sfu-utils',
    documentation: 'https://webrtc-sfu-utils.vercel.app/docs',
    techStack: {
      frontend: ['TypeScript', 'WebRTC APIs'],
      tools: ['Rollup', 'Jest', 'TypeDoc']
    }
  }
];

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};

export const categories = [
  'web-management',
  'video-conference', 
  'webgl',
  'chrome-extension',
  'showcase',
  'ai',
  'libraries'
];