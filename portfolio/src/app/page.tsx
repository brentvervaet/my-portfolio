import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of the first project goes here.',
        imageUrl: 'https://placehold.co/600x400/0a0a0a/ffffff.png?text=Project+One',
        tags: ['Next.js', 'Tailwind CSS'],
    },
    {
        title: 'Project Two',
        description: 'A brief description of the second project goes here.',
        imageUrl: 'https://placehold.co/600x400/0a0a0a/ffffff.png?text=Project+Two',
        tags: ['React', 'TypeScript'],
    },
];

export default function Home() {
    return (
        <>
            <Navbar/>
            <main className="w-screen bg-gray-900 text-white">
                {/* Hero Section */}
                <section
                    id="home"
                    className="flex h-screen w-full flex-col items-center justify-center text-center"
                >
                    <div className="rounded-xl bg-black/20 p-8">
                        <h1 className="text-5xl font-bold md:text-7xl">Brent Vervaet</h1>
                        <p className="mt-4 text-lg text-gray-300 md:text-xl">
                            Creative Developer
                        </p>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="w-full px-4 py-20 md:py-32">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-8 text-center text-4xl font-bold">About Me</h2>
                        <p className="text-center text-lg text-gray-300">
                            I'm a passionate creative developer with a love for building
                            beautiful and interactive web experiences. I specialize in React
                            and Next.js, turning complex problems into elegant digital
                            solutions.
                        </p>
                    </div>
                </section>

                {/* Projects Section */}
                <section
                    id="projects"
                    className="w-full bg-gray-950 px-4 py-20 md:py-32"
                >
                    <div className="mx-auto max-w-5xl">
                        <h2 className="mb-12 text-center text-4xl font-bold">
                            My Projects
                        </h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.title}
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.imageUrl}
                                    tags={project.tags}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="w-full px-4 py-20 md:py-32">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-8 text-4xl font-bold">Get In Touch</h2>
                        <p className="text-lg text-gray-300">
                            I'm always open to discussing new projects or opportunities.
                            Feel free to reach out!
                        </p>
                        <a
                            href="mailto:brent.vervaet@icloud.com"
                            className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Email Me
                        </a>
                    </div>
                </section>
                <Footer/>
            </main>
        </>
    );
}