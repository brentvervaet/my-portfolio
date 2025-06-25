import Link from 'next/link';

const Navbar = () => {
    return (
        <header
            className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 px-4 py-3 font-mono backdrop-blur-lg md:px-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="#home" className="text-xl font-bold">
                    &lt;brentvervaet/&gt;
                </Link>
                <nav className="hidden space-x-6 text-sm font-medium md:flex">
                    <a href="#about" className="text-gray-300 transition-colors hover:text-white">
                        About
                    </a>
                    <a href="#projects" className="text-gray-300 transition-colors hover:text-white">
                        Projects
                    </a>
                    <a href="#contact" className="text-gray-300 transition-colors hover:text-white">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;