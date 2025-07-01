import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { defaultProjects } from '@/data/projects/projects';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Await params before using its properties
  const slug = params.slug;

  const project = defaultProjects.find((p: { title: string }) => p.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Brent Vervaet`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return defaultProjects.map(project => ({
    slug: project.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const project = defaultProjects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!project) {
    notFound();
  }

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
