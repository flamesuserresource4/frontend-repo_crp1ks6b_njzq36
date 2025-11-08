import React from 'react';
import { Globe, Languages } from 'lucide-react';

const Navbar = ({ lang = 'en' }) => {
  const isEN = lang === 'en';

  const menu = [
    { id: 'home', label: isEN ? 'Home' : 'Beranda' },
    { id: 'problem', label: isEN ? 'Problem' : 'Masalah' },
    { id: 'solution', label: isEN ? 'Solution' : 'Solusi' },
    { id: 'demo', label: 'Demo' },
    { id: 'impact', label: isEN ? 'Impact' : 'Dampak' },
    { id: 'gallery', label: isEN ? 'Gallery' : 'Galeri' },
    { id: 'contact', label: isEN ? 'Contact' : 'Kontak' },
  ];

  const switchHref = () => {
    // Navigate between "/en" and "/id" preserving hash if present
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    return `${isEN ? '/id' : '/en'}${hash}`;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight text-slate-800">
          <Globe className="w-6 h-6 text-sky-600" />
          <span>AI for Lost Languages Revival</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {menu.map((m) => (
            <a key={m.id} href={`#${m.id}`} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              {m.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={switchHref()}
            className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-sm transition-colors"
            aria-label={isEN ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
            title={isEN ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
          >
            <Languages className="w-4 h-4" />
            {isEN ? 'ID' : 'EN'}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
