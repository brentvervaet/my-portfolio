// src/app/projects/[id]/page.tsx
import ProjectDetail from '@/components/ProjectDetail';
import {defaultProjects} from '@/components/Projects'; // We'll need to export defaultProjects

export default function ProjectDetailPage() {
    return <ProjectDetail projects={defaultProjects}/>;
}