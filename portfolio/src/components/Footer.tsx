import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 text-center text-zinc-500 text-sm font-mono">
            © {new Date().getFullYear()} Brent Vervaet. All rights reserved.
        </footer>
    );
};

export default Footer;