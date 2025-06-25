import Image from 'next/image';

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    description: string;
    tags: string[];
}

// A map to assign colors to specific tags
const tagColorClasses: { [key: string]: string } = {
    'Next.js': 'bg-blue-900/50 text-blue-300',
    'Tailwind CSS': 'bg-sky-900/50 text-sky-300',
    React: 'bg-cyan-900/50 text-cyan-300',
    TypeScript: 'bg-blue-800/50 text-blue-200',
};

const ProjectCard = ({
                         imageUrl,
                         title,
                         description,
                         tags,
                     }: ProjectCardProps) => {
    return (
        <div
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 transition-all hover:border-blue-500/50 hover:bg-gray-800/80">
            <Image
                src={imageUrl}
                alt={title}
                width={600}
                height={400}
                className="aspect-video w-full object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-gray-400">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={`rounded-full px-3 py-1 text-sm ${
                                tagColorClasses[tag] || 'bg-gray-700 text-gray-300'
                            }`}
                        >
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;