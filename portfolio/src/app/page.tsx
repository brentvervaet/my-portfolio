// src/app/page.tsx
import Header from '@/components/Header';
import SocialLinks from "@/components/SocialsLinks";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <Header/>

            {/* Hero Section */}
            <section className="py-16 space-y-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-25 h-25 rounded-full overflow-hidden flex-shrink-0 border-2">
                        {/* Your photo here */}
                        <div className="h-full w-full flex items-center justify-center text-sm text-zinc-500">
                            Your Photo
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-2xl font-bold font-mono">Hi, I'm Brent 👋🏽</h1>
                        <SocialLinks className="mt-2"/>
                    </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    A passionate developer focused on creating beautiful and functional web experiences.
                </p>


            </section>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800"></div>

            {/* Skills Section */}
            <Skills/>

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

            {/* About Section */}
            <section id="about" className="py-8">
                <h2 className="text-2xl font-bold font-mono mb-6">About</h2>
                <div className="space-y-4 text-zinc-600  dark:text-zinc-400">
                    <p>
                        I'm a student full-stack developer specializing in modern web technologies. My approach combines
                        clean code with
                        thoughtful design to create exceptional user experiences.
                    </p>
                    <p>
                        When I'm not coding, I love to play music, whether it's jamming with friends or performing live
                        or cracking a cold one with the boys.
                        If i need to unwind, you can find me playing video games or reading a good book.
                        I believe in the power of creativity and collaboration, both in music and software development.
                    </p>
                </div>
            </section>
        </main>
    );
}