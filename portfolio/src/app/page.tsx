// src/app/page.tsx
import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <Header/>

            {/* Hero Section */}
            <section className="py-16 space-y-8">
                <div className="flex items-center gap-6">
                    <div
                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0  dark:bg-zinc-800">
                        {/* Replace with your actual image */}
                        <div className="h-full w-full flex items-center justify-center text-sm text-zinc-500">
                            Your Photo
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Hi, I'm Brent</h1>
                    </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400  leading-relaxed">
                    A full-stack developer focused on creating beautiful and functional web and mobile experiences.
                </p>

                <div className="flex gap-4">
                    <a href="https://github.com/brentvervaet" target="_blank" rel="noopener noreferrer"
                       className="text-red-500 hover:text-red-600 dark:hover:text-red-400 transition">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/brentvervaet" target="_blank" rel="noopener noreferrer"
                       className="text-red-500 hover:text-red-600 dark:hover:text-red-400 transition">
                        LinkedIn
                    </a>
                    <a href="#contact"
                       className="text-red-500 hover:text-red-600 dark:hover:text-red-400 transition">
                        Contact
                    </a>
                </div>
            </section>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-8"></div>

            {/* About Section */}
            <section className="py-8">
                <h2 className="text-2xl font-bold font-mono mb-6">About</h2>
                <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
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
                <div className="space-y-12">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group">
                            <a href="#" className="block space-y-4">
                                <div
                                    className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden border border-transparent group-hover:border-red-500 transition-all duration-300">
                                    {/* Project image would go here */}
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-medium font-mono group-hover:text-red-500 transition">Project {i}</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 text-zinc-400 group-hover:text-red-500 transition"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                                        A brief description of this amazing project and the technologies used.
                                    </p>
                                    <div className="flex gap-2 mt-3">
                                        <span
                                            className="px-2 py-1 text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded font-mono">React</span>
                                        <span
                                            className="px-2 py-1 text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded font-mono">TypeScript</span>
                                    </div>
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
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="font-mono text-sm">JavaScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="font-mono text-sm">TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="font-mono text-sm">React</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="font-mono text-sm">Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="font-mono text-sm">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="font-mono text-sm">Node.js</span>
                    </div>
                </div>
            </section>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-8"></div>

            {/* Contact Section */}
            <section id="contact" className="py-8">
                <h2 className="text-2xl font-bold font-mono mb-6">Contact</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    Feel free to reach out if you want to connect or discuss potential collaborations.
                </p>
                <a
                    href="mailto:brent.vervaet@icloud.com"
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 dark:hover:text-red-400 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span className="font-mono">brent.vervaet@icloud.com</span>
                </a>
            </section>

            <footer className="py-8 text-center text-zinc-500 text-sm font-mono">
                © {new Date().getFullYear()} Brent Vervaet. All rights reserved.
            </footer>
        </main>
    );
}