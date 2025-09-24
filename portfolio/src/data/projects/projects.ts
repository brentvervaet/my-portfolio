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
      '/images/optimized/Projects/TuneWithMe/TuneWithMe01.webp',
      '/images/optimized/Projects/TuneWithMe/TuneWithMe02.webp',
      '/images/optimized/Projects/TuneWithMe/TuneWithMe03.webp',
      '/images/optimized/Projects/TuneWithMe/TuneWithMe04.webp',
      '/images/optimized/Projects/TuneWithMe/TuneWithMe05.webp',
      '/images/optimized/Projects/TuneWithMe/TuneWithMe06.webp',
      '/images/optimized/Projects/TuneWithMe/TuneWithMe07.webp',
    ],
    link: 'https://tunewithme.onrender.com/home',
    sourceCodeLink: 'https://github.com/brentvervaet/TuneWithMe.git',
    date: new Date('2024-12-10'),
  },

  // iOS App - RealDealMeal
  {
    title: 'RealDealMeal',
    description:
      'RealDealMeal: Discover, explore, and save your favorite recipes with ease! Designed for Mobile Application Development: iOS evaluation.',
    longDescription:
      'RealDealMeal is an innovative iOS app that allows users to quickly and easily discover, view, and save recipes. The app provides daily recommendations, random recipes, categories, and favorites management. All data is fetched via TheMealDB API, and the app is built with SwiftUI using the MVVM architecture, fully responsive on both iPhone and iPad.\n' +
      '\n' +
      'This app was developed as part of my iOS evaluation, demonstrating best practices for Swift coding, state management, REST API integration, navigation, and data persistence.',
    features: [
      'Discover Recipes: Browse all meals alphabetically or filter by categories.',
      'Recommended & Random Recipes: Daily suggestions and a “Random Recipe” button for inspiration.',
      'Favorites: Add meals to favorites and store them locally using @AppStorage.',
      'Meal Details: View ingredients, instructions, and images for each recipe.',
      'Share Recipes: Easily share your favorite recipes via the built-in share functionality.',
      'Adaptive UI: Supports multiple device sizes and both portrait and landscape orientations.',
      'Search: Quickly find recipes using the search functionality.',
    ],
    challenges: [
      'Handling optionals and null values from the API (e.g., missing thumbnails or instructions).',
      'Implementing async/await for multiple API calls and combining random and category-based results.',
      'Resolving duplicate IDs in ForEach in SwiftUI lists (e.g., with random meals).',
      'Applying the MVVM architecture to keep UI, state, and data separated.',
      'Integrating favorites persistence while ensuring thumbnails display correctly.',
    ],
    technologies: ['Swift', 'SwiftUI', 'REST', 'MVVM'],
    images: [
      '/images/optimized/Projects/iOS-app/iOS01.webp',
      '/images/optimized/Projects/iOS-app/iOS02.webp',
      '/images/optimized/Projects/iOS-app/iOS03.webp',
      '/images/optimized/Projects/iOS-app/iOS04.webp',
      '/images/optimized/Projects/iOS-app/iOS05.webp',
      // '/images/Projects/iOS-app/iOS06.png',
      // '/images/Projects/iOS-app/iOS07.png',
    ],
    sourceCodeLink: 'https://github.com/brentvervaet/RealDealMeal.git',
    date: new Date('2025-08-28'),
  },

  // Portfolio Website
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
    images: ['/images/optimized/Projects/Portfolio/Portfolio01.webp'],
    link: 'https://brentvervaet-dev.vercel.app',
    sourceCodeLink: 'https://github.com/brentvervaet/my-portfolio.git',
    date: new Date('2025-06-25'),
  },
  //IT-conference App
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
      '/images/optimized/Projects/ItConferenceApp/ITCONF01.webp',
      '/images/optimized/Projects/ItConferenceApp/ITCONF02.webp',
      '/images/optimized/Projects/ItConferenceApp/ITCONF03.webp',
      '/images/optimized/Projects/ItConferenceApp/ITCONF04.webp',
      '/images/optimized/Projects/ItConferenceApp/ITCONF05.webp',
    ],
    sourceCodeLink: 'git@github.com:brentvervaet/IT-conference-app.git',
    date: new Date('2025-05-10'),
  },
];
