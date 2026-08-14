import React, { useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="brand-mark">BS</span>
          <span><strong className="block text-white">Baibhav Singh</strong><small className="text-violet-300">Full Stack Developer</small></span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => <a key={item.id} href={`#${item.id}`} className="nav-item">{item.title}</a>)}
          <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="primary-btn">Download Resume ↗</a>
        </div>
        <button className="md:hidden rounded-xl border border-white/10 p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#050816]/95 px-5 py-5 md:hidden">
        {navLinks.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className="block py-3 text-white/80">{item.title}</a>)}
        <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="primary-btn mt-3 inline-flex">Download Resume ↗</a>
      </div>}
    </header>
  );
};
export default Navbar;
