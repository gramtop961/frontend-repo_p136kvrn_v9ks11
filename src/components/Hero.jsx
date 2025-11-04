export default function Hero({ onOrderClick }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0 -z-0 bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
      <div className="relative z-10 bg-black/50">
        <div className="mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center gap-6 px-4 py-24 text-white">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">Grilled Fish & Coastal Flavors</span>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Fresh From Flame to Plate
          </h1>
          <p className="max-w-xl text-base text-gray-100 sm:text-lg">
            At Ember & Fin, we serve wood-fired seafood with bright citrus, herbaceous oils, and house-made rubs. Simple, smoky, unforgettable.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo('#menu')}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow hover:bg-emerald-50"
            >
              Explore Menu
            </button>
            <button
              onClick={() => (onOrderClick ? onOrderClick() : scrollTo('#order'))}
              className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-700"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
