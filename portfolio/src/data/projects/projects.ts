export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  challenges?: string[];
  technologies: string[];
  images: string[];
  link?: string;
  sourceCodeLink?: string;
  date: Date;
}

export const defaultProjects: Project[] = [
  {
    title: 'TuneWithMe',
    description:
      'A tuner web application that allows users to tune their instruments and keep a library of their favorite tunings and instruments.',
    longDescription:
      'TuneWithMe is a full-stack web application developed for an exam, but greatly extended with additional features beyond the initial scope. It serves as an all-in-one tuning platform, offering musicians a convenient way to explore various instrument tunings, use a built-in tuner, and even customize tunings to their preferences. The platform bridges the gap between fragmented tuning information found online and a clean, centralized user experience.',
    features: [
      'Instrument & tuning library',
      'Built-in tuner',
      'Custom tuning support',
      'Search functionality',
      'Dark mode',
      'Spotify integration',
      'Authentication',
      'Admin panel',
    ],
    challenges: [
      'Integrating the Spotify API -> Learned authentication flows, handled token refresh, and parsed external data.',
      'Creating a REST API and connecting to MySQL -> Followed best practices and tutorials on structuring REST endpoints and database queries.',
      'Designing and styling the frontend (first full-stack app) -> Used Tailwind and explored UI libraries for React; iterated based on testing.',
      'Implementing user authentication and admin roles -> Applied sessions or token-based auth to secure the app.',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'Vite', 'Tailwind CSS', 'REST', 'MySQL'],
    images: [
      '/images/Projects/TuneWithMe/TuneWithMe01.png',
      '/images/Projects/TuneWithMe/TuneWithMe02.png',
      '/images/Projects/TuneWithMe/TuneWithMe03.png',
      '/images/Projects/TuneWithMe/TuneWithMe04.png',
      '/images/Projects/TuneWithMe/TuneWithMe05.png',
      '/images/Projects/TuneWithMe/TuneWithMe06.png',
      '/images/Projects/TuneWithMe/TuneWithMe07.png',
    ],
    link: 'https://tunewithme.onrender.com/home',
    sourceCodeLink: 'https://github.com/brentvervaet/TuneWithMe.git',
    date: new Date('2024-12-10'),
  },
  {
    title: 'iOS App',
    description:
      'A mobile application built with Swift. Still in development, this app will showcase my skills in iOS development. Should be ready by the end of august 2025.',
    longDescription:
      'This is a native iOS app developed as part of an exam project for August. The app is designed to demonstrate a solid understanding of Swift and SwiftUI, showcasing interactive UI elements, smooth user flows, and practical use of iOS development principles. While the app is still evolving, it focuses on delivering a user-friendly experience and clean architecture.',
    features: [
      'Intuitive SwiftUI-based interface with responsive design',
      'State management using modern Swift paradigms',
      'Animations and transitions to enhance user experience',
    ],
    challenges: [
      'Learning curve with SwiftUI’s declarative UI approach → Solved by practicing component composition and using SwiftUI previews.',
      'Managing state and data flow cleanly → Used @State, @Binding, and modular components to handle it efficiently.',
      'Testing on real devices and handling deployment concerns → Used Xcode’s simulator and TestFlight for testing and feedback.',
    ],
    technologies: ['Swift', 'SwiftUI'],
    images: ['/images/Projects/iOS-app/iOS99.png'],
    sourceCodeLink: 'git@github.com:brentvervaet/iOS-app.git',
    date: new Date('2025-08-20'),
  },
  {
    title: 'Portfolio Website',
    description:
      'This very website! A responsive portfolio showcasing my projects and skills, built with modern web technologies.',
    longDescription:
      'This is my personal portfolio website, designed to present who I am as a developer. It provides an overview of my skills, experience, and projects, with direct links to my GitHub, LinkedIn, and contact options. The site serves both as a creative outlet and a professional showcase for recruiters and tech enthusiasts.',
    features: [
      'Sleek, scrollable homepage with smooth transitions and clean layout',
      'Dedicated About and Projects pages for more in-depth content',
      'Built-in dark mode support for visual comfort',
      'Subtle Framer Motion animations throughout for a dynamic user experience',
      'Fully responsive layout and optimized for both mobile and desktop',
    ],
    challenges: [
      'Implementing animations without sacrificing performance → Used Framer Motion with lazy loading and optimized transitions.',
      'Integrating theme switching (dark/light mode) → Handled with built-in support from next-themes.',
      'First time using TypeScript and Next.js → Solved with AI assistance, intelligent code suggestions (IntelliSense), and prior experience with Node.js.',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    images: ['/images/Projects/Portfolio/Portfolio01.png'],
    link: 'https://brentvervaet-dev.vercel.app',
    sourceCodeLink: 'https://github.com/brentvervaet/my-portfolio.git',
    date: new Date('2025-06-25'),
  },
  {
    title: 'IT-conference App',
    description:
      'A Spring Boot app to manage IT conference events, speakers, and rooms. Users can view and favorite events; admins manage the content.',
    longDescription:
      'This web application was developed for an Enterprise Web Development exam and simulates the functionality of an IT conference platform. It offers role-based access for guests, users, and admins to interact with conference events. While not deployed, the application runs locally and demonstrates full-stack Java web development skills using Spring Boot and Thymeleaf.',
    features: ['Guest view', 'Login functionality', 'User favorites', 'Admin panel', 'Personalized greeting'],
    challenges: [
      'Styling with Tailwind inside Thymeleaf templates → Learned how to combine utility-first styling with server-side template.',
      'First-time use of Thymeleaf, Spring Boot, and JPA → Followed course materials and created small exercises to understand the ecosystem.',
      'Setting up and connecting to a MySQL database → Practiced entity-relation mapping and REST setup with persistence logic.',
    ],
    technologies: ['Java', 'Spring', 'Thymeleaf', 'MySQL', 'JPA', 'Hibernate', 'REST'],
    images: [
      '/images/Projects/ItConferenceApp/ITCONF01.png',
      '/images/Projects/ItConferenceApp/ITCONF02.png',
      '/images/Projects/ItConferenceApp/ITCONF03.png',
      '/images/Projects/ItConferenceApp/ITCONF04.png',
      '/images/Projects/ItConferenceApp/ITCONF05.png',
    ],
    sourceCodeLink: 'git@github.com:brentvervaet/IT-conference-app.git',
    date: new Date('2025-05-10'),
  },
];
