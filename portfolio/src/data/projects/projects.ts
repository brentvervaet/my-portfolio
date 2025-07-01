export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  challenges?: string[];
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
    technologies: ['React', 'JavaScript', 'Node.js', 'Vite', 'Tailwind CSS', 'MUI', 'MySQL'],
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
    technologies: ['Swift', 'SwiftUI'],
    images: ['/images/Projects/iOS-app/iOS99.png'],
    sourceCodeLink: 'git@github.com:brentvervaet/iOS-app.git',
    date: new Date('2025-08-20'),
  },
  {
    title: 'Portfolio Website',
    description:
      'This very website! A responsive portfolio showcasing my projects and skills, built with modern web technologies.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Shadcn/UI'],
    images: ['/images/Projects/Portfolio/Portfolio01.png'],
    link: 'https://brentvervaet-dev.vercel.app',
    sourceCodeLink: 'https://github.com/brentvervaet/my-portfolio.git',
    date: new Date('2025-06-25'),
  },
  {
    title: 'IT-conference App',
    description:
      'A Spring Boot app to manage IT conference events, speakers, and rooms. Users can view and favorite events; admins manage the content.',
    technologies: ['Java', 'Spring', 'Thymeleaf', 'MySQL'],
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
