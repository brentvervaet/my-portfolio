const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full bg-transparent py-8 px-4">
            <div className="mx-auto max-w-7xl">
                <div
                    className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
                    <p className="text-sm text-gray-400">
                        &copy; {currentYear} Brent Vervaet. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4">
                        <a href="https://github.com/BrentVervaet" target="_blank" rel="noopener noreferrer"
                           className="text-sm text-gray-400 hover:text-white">GitHub</a>
                        <a href="#" className="text-sm text-gray-400 hover:text-white">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;