"use client";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Hamid Ahmed Lakhan. All rights reserved.
        </p>
        <p className="text-zinc-600 text-sm flex items-center gap-1">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
