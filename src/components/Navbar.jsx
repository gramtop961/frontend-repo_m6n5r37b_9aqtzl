import { useState, useEffect } from 'react';
import { LogIn, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl transition-all ${
      scrolled ? 'bg-white/70 shadow-sm' : 'bg-white/40'
    }`}>
      <nav className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between ${
        scrolled ? 'py-2' : 'py-3'
      }`}
        aria-label="Primary"
      >
        {/* Left: Logo */}
        <a href="#top" className="flex items-center gap-2 font-semibold text-gray-900">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-inner" />
          <span className="tracking-tight">KIPIAI.ID</span>
        </a>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#tentang" className="text-gray-600 hover:text-gray-900">Tentang</a>
          <a href="#fitur" className="text-gray-600 hover:text-gray-900">Fitur</a>
          <a href="#keunggulan" className="text-gray-600 hover:text-gray-900">Keunggulan</a>
          <a href="#harga" className="text-gray-600 hover:text-gray-900">Harga</a>
          <a href="#kontak" className="text-gray-600 hover:text-gray-900">Kontak</a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#login"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            <LogIn className="h-4 w-4 mr-2" /> Login
          </a>
          <a
            href="#mulai"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Mulai Sekarang <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </nav>
    </header>
  );
}
