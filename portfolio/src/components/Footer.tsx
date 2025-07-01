import React from 'react';
import SocialLinks from '@/components/SocialsLinks';

export default function Footer() {
  return (
    <footer className="bg-transparent py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Navigation Links */}
          <div className="flex space-x-6 font-mono text-sm text-zinc-600 dark:text-zinc-400">
            <p className="mt-4 text-center text-xs text-zinc-600 dark:text-zinc-400">
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
