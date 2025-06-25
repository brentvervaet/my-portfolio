// src/app/page.tsx
import Header from '@/components/Header';

export default function Home() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <Header/>

            {/* Hero Section */}
            <section className="py-16 space-y-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div
                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        {/* Replace with your actual image */}
                        <div className="h-full w-full flex items-center justify-center text-sm text-zinc-500">
                            Your Photo
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold font-mono">Hi, I'm Brent 👋🏽</h1>
                    </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    A passionate developer focused on creating beautiful and functional web experiences.
                </p>
            </section>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800"></div>

            {/* About Section */}
            <section className="py-8">
                <h2 className="text-2xl font-bold font-mono mb-6">About</h2>
                <div className="space-y-4 text-zinc-600  dark:text-zinc-400">
                    <p>
                        I'm a student full-stack developer specializing in modern web technologies. My approach combines clean code with
                        thoughtful design to create exceptional user experiences.
                    </p>
                    <p>
                        When I'm not coding, I love to play music, whether it's jamming with friends or performing live or cracking a cold one with the boys.
                        If i need to unwind, you can find me playing video games or reading a good book.
                        I believe in the power of creativity and collaboration, both in music and software development.
                    </p>
                </div>
            </section>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-8"></div>

            {/* Projects Section */}
            <section id="projects" className="py-8">
                <h2 className="text-2xl font-bold font-mono mb-6">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group">
                            <a href="#" className="block space-y-4">
                                <div
                                    className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden border border-transparent group-hover:border-red-500 transition-all duration-300">
                                    {/* Project image would go here */}
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium font-mono group-hover:text-red-500 transition">Project {i}</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                                        A brief description of this amazing project and the technologies used.
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-8"></div>

            {/* Skills Section */}
            <section id="skills" className="py-8">
                <h2 className="text-2xl font-bold font-mono mb-6">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                    {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'].map((skill) => (
                        <div key={skill} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span className="font-mono text-sm">{skill}</span>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="py-8 text-center text-zinc-500 text-sm font-mono">
                © {new Date().getFullYear()} Brent Vervaet. All rights reserved.
            </footer>
        </main>
    );
}