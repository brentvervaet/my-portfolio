// File: src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { defaultProjects } from '@/data/projects/projects';

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = defaultProjects.find(
    (p: { title: string }) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Brent Vervaet`,
    description: project.description,
  };
}

// Generate static params for all projects
export function generateStaticParams() {
  return defaultProjects.map(project => ({
    slug: project.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Find the project that matches the slug
  const project = defaultProjects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug);

  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }

  // Add additional project details for the detail page
  const enrichedProject = {
    ...project,
    // longDescription:
    //   project.longDescription ||
    //   'This project showcases my skills in web development and design. I focused on creating a user-friendly interface while implementing robust functionality.',
    // features: project.features || [
    //   'Responsive design that works on all devices',
    //   'Intuitive user interface with smooth animations',
    //   'Optimized performance for fast loading times',
    // ],
    // challenges: project.challenges || [
    //   'Implementing complex animations while maintaining performance',
    //   'Ensuring cross-browser compatibility',
    //   'Optimizing for both desktop and mobile experiences',
    // ],
    // technologies: project.technologies || project.tags,
  };

  return <ProjectDetail project={enrichedProject} />;
}
