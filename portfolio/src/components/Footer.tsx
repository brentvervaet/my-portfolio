import React from 'react';
import SocialLinks from "@/components/SocialsLinks";

export default function Footer() {
    return (
        <footer className="py-8 bg-zinc-100 dark:bg-zinc-800">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    
                    {/* Navigation Links */}
                    <div className="flex space-x-6 text-sm font-mono text-zinc-600 dark:text-zinc-400">
                        <p className="text-center text-xs text-zinc-600 dark:text-zinc-400 mt-4">
                            © {new Date().getFullYear()} Brent Vervaet. All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                   <SocialLinks showResumeButton={false} />

                </div>

            </div>
        </footer>
    );
}