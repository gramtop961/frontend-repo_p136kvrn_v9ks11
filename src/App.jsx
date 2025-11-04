import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MenuSection from './components/MenuSection.jsx';
import InfoContactOrder from './components/InfoContactOrder.jsx';

export default function App() {
  const handleOrderClick = () => {
    const el = document.querySelector('#order');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen scroll-smooth bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero onOrderClick={handleOrderClick} />
        <MenuSection />
        <InfoContactOrder />
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Ember & Fin. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#menu" className="hover:text-emerald-700">Menu</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
