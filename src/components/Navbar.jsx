import { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
  { href: '#order', label: 'Order' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition backdrop-blur ${scrolled ? 'bg-white/80 shadow' : 'bg-transparent'} `}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#home" onClick={(e) => onNavClick(e, '#home')} className="text-xl font-extrabold tracking-tight text-emerald-700">
            Ember & Fin
          </a>
          <nav className="hidden gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => onNavClick(e, l.href)}
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#order"
            onClick={(e) => onNavClick(e, '#order')}
            className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}
