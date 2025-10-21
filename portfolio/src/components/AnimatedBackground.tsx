'use client';

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-300 via-cyan-300 to-green-300 opacity-60 dark:from-blue-800 dark:via-cyan-800 dark:to-green-800"
      style={{ backgroundSize: '200% 200%' }}
    ></div>
  );
}
