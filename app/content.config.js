/**
 * ============================================================
 *  PORTFOLIO CONTENT CONFIGURATION
 *  Edit this file to update your portfolio content easily.
 *  All sections are organized below — just find the section
 *  you want to change and update the values.
 * ============================================================
 */

export const SITE = {
  title: 'Vince Michael Aquilizan — Portfolio 2026',
  favicon: '/image/MZD_28.webp'
}

// ─────────────────────────────────────────────
//  NAVBAR
// ─────────────────────────────────────────────
export const NAV = {
  name: 'Vince Michael Aquilizan',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Connect', href: '#social' }
  ]
}

// ─────────────────────────────────────────────
//  HERO / TITLE PAGE
// ─────────────────────────────────────────────
export const HERO = {
  year: '2026',
  heading: 'PORTFOLIO',
  roles: ['Full Stack Developer', 'Web Developer', 'Game Developer', 'Artist'],
  profileImage: '/image/MZD_28.webp',
  cityImage: '/image/City_Silhouette_Clipart.png',
  airplaneImage: '/image/airplane.png'
}

// ─────────────────────────────────────────────
//  ABOUT ME
// ─────────────────────────────────────────────
export const ABOUT = {
  greeting: 'Hi!',
  bio: `I'm Vince, a passionate Full Stack Developer based in Calapan City, Oriental Mindoro, Philippines.
I love building clean, interactive web experiences and solving real-world problems through code.
With a background in both front-end and back-end development, I bring ideas to life — from sleek UIs to robust server-side systems.
When I'm not coding, I'm sketching characters or exploring game worlds.`,
  email: 'vincemichaelaquilizan@gmail.com',
  phone: '+63 961 0900 680',
  location: 'Calapan City, Oriental Mindoro, Philippines',
  profileImage: '/image/1000001131-CZAOabSW.jpg',
  portfolioUrl: 'https://yvz0x13.github.io/MyPortfolio',

  education: [
    {
      school: 'BCRV Tech-Voc, Inc',
      degree: 'Programming (Java) NCIII',
      year: 'March 23 – May 11, 2026',
      details:
        'Completed 40-day training in Java Development, OOP, Database, Software Development & System Documentation'
    },
    {
      school: 'City College of Calapan',
      degree: 'Bachelor of Science in Information System',
      year: '2020 – 2025',
      details:
        'Specialized in Web Development (Front-end & Back-end), Programming Fundamentals, Database Management, OOP'
    },
    {
      school: 'Oriental Mindoro National High School',
      degree: 'Senior High School – TVL Computer Programming',
      year: '2018 – 2020',
      details: 'Specialized in Java Development and Web Development in Microsoft .NET C#'
    }
  ],

  skills: [
    // Languages
    'PHP',
    'JavaScript',
    'TypeScript',
    'Python',
    'C#',
    'Java',
    'HTML5 / CSS',
    'SCSS',
    'MySQL',
    // Frameworks
    'Laravel',
    'Next.js',
    'Nuxt.js',
    'React',
    'Node.js',
    'Express',
    'Django',
    'Flask',
    'TailwindCSS',
    'Bootstrap',
    'CodeIgniter 4',
    // Tools
    'Git',
    'Docker',
    'REST APIs',
    'XAMPP / Laragon',
    'Vite'
  ],

  specializations: [
    { icon: '🌐', label: 'Web Development' },
    { icon: '🎮', label: 'Game Development' },
    { icon: '🎨', label: 'QA' },
    { icon: '📱', label: 'Mobile-First Design' }
  ],

  techSkills: [
    { name: 'Back-End Dev', level: 'advanced', percent: 90 },
    { name: 'Front-End Dev', level: 'advanced', percent: 80 },
    { name: 'Game Development', level: 'advanced', percent: 75 },
    { name: 'Software Engineering', level: 'intermediate', percent: 65 }
  ]
}

// ─────────────────────────────────────────────
//  PROFESSIONAL EXPERIENCE
// ─────────────────────────────────────────────
export const EXPERIENCE = [
  {
    id: 1,
    role: 'OJT Intern',
    company: 'Provincial Capitol Complex',
    location: 'Calapan City, Oriental Mindoro',
    period: 'September 2023 – February 2024',
    highlights: [
      'Worked under On-The-Job Training Program for 4th Year College requirements.',
      'Focused on debugging systems and managing server-side development using Laravel.',
      'Assisted in computer hardware repair and maintenance.'
    ]
  }
]

// ─────────────────────────────────────────────
//  SHOWCASE / PROJECTS
// ─────────────────────────────────────────────
export const SHOWCASE = {
  categories: ['All', 'Web Dev', 'Games', 'Design'],

  projects: [
    {
      id: 1,
      category: 'Web Dev',
      title: 'Barangay Camilmil Management System',
      description:
        'A Barangay Management System built with CodeIgniter 4 and MySQL. Manages transactions, case reports, and resident records with analytics, population tracking, and announcement features.',
      image: 'https://picsum.photos/seed/barangay/600/400',

      tags: ['CodeIgniter 4', 'MySQL', 'PHP']
    },
    {
      id: 2,
      category: 'Web Dev',
      title: 'FreeQR Generator',
      description:
        'A lightweight, ad-free QR Code Generator built with Nuxt.js and hosted on Cloudflare Pages. Fast, clean UX with no pop-up ads or malware risks.',
      image: 'https://picsum.photos/seed/freeqr/600/400',
      url: 'https://freeqr.vincemichaelaquilizan.workers.dev/',
      tags: ['Nuxt.js', 'Cloudflare Pages', 'JavaScript']
    },
    {
      id: 3,
      category: 'Web Dev',
      title: 'Wedding Invitation',
      description:
        'A digital wedding invitation web app built with React.js and Supabase. It delivers a personalized, elegant experience where guests can view wedding details like the date, venue, and program directly in the browser. An admin panel allows the couple or organizer to log in and update the invitation content in real time without touching any code. Deployed on Vercel for fast and reliable access, this project showcases my ability to build full-stack apps that blend clean UI design with practical content management.',
      image: 'https://picsum.photos/seed/freeqr/600/400',
      url: 'https://freeqr.vincemichaelaquilizan.workers.dev/',
      tags: ['Vercel', 'Supabase', 'ReactJs', 'JavaScript']
    }
  ]
}

// ─────────────────────────────────────────────
//  CERTIFICATIONS
// ─────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Programming (Java) NCIII',
    issuer: 'BCRV Tech-Voc, Inc',
    date: 'May 2026',
    credentialUrl: '',
    icon: '☕'
  }
  // Add more certifications here ↓
]

// ─────────────────────────────────────────────
//  REVIEWS / TESTIMONIALS
//  Leave this array empty [] to hide the section
// ─────────────────────────────────────────────
export const REVIEWS = [
  // Example entry — replace with real reviews or leave array empty:
  // {
  //   id: 1,
  //   name: 'Juan dela Cruz',
  //   role: 'Project Manager',
  //   avatar: '',       // URL or leave empty for initials fallback
  //   rating: 5,        // 1–5
  //   text: 'Vince delivered outstanding work on time and exceeded our expectations.',
  // },
]

// ─────────────────────────────────────────────
//  SOCIAL MEDIA / CONNECT
// ─────────────────────────────────────────────
export const SOCIAL = [
  {
    platform: 'GitHub',
    username: '@yvz0x13',
    url: 'https://github.com/vincemichaelaquilizan',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>`
  },
  {
    platform: 'Facebook',
    username: 'Vince Aquilizan',
    url: 'https://www.facebook.com/profile.php?id=61590726418403',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
  },
  {
    platform: 'LinkedIn',
    username: 'Vince Aquilizan',
    url: 'https://www.linkedin.com/in/aquilizan-vince-michael-b-b14211294/',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  }
  // Add more social links here ↓
]

// ─────────────────────────────────────────────
//  MUSIC PLAYER
//  Add your favorite tracks here.
//  Use direct .mp3 URLs (or paths in /public/music/)
// ─────────────────────────────────────────────
export const MUSIC = {
  autoplay: false,
  tracks: [
    {
      id: 1,
      title: 'Lofi Study Beats',
      artist: 'ChillHop',
      cover: 'https://picsum.photos/seed/music1/100/100',
      src: '' // Add your .mp3 URL here
    },
    {
      id: 2,
      title: 'Chill Vibes',
      artist: 'Ambient Works',
      cover: 'https://picsum.photos/seed/music2/100/100',
      src: '' // Add your .mp3 URL here
    }
  ]
}
