const items = [
  {
    name: 'Citrus Herb Sea Bass',
    desc: 'Char-grilled Mediterranean sea bass with lemon oil, thyme, and capers.',
    price: 26,
    img: 'https://images.unsplash.com/photo-1617195737496-0f24a4e90283?q=80&w=2069&auto=format&fit=crop',
  },
  {
    name: 'Smoked Chili Salmon',
    desc: 'Wild salmon with smoky ancho rub, charred lime, and cilantro.',
    price: 24,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2068&auto=format&fit=crop',
  },
  {
    name: 'Garlic Butter Prawns',
    desc: 'Fire-kissed prawns tossed in garlic butter and parsley.',
    price: 19,
    img: 'https://images.unsplash.com/photo-1548865163-0ff3c7e9d75a?q=80&w=2067&auto=format&fit=crop',
  },
  {
    name: 'Lemon Pepper Mackerel',
    desc: 'Crisp-skinned mackerel with pepper crust and fennel slaw.',
    price: 18,
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2069&auto=format&fit=crop',
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Signature Grilled Menu
          </h2>
          <p className="mt-3 text-slate-600">
            Sustainably sourced, flame-forward plates served with seasonal sides.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.name} className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={it.img} alt={it.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{it.name}</h3>
                  <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">${it.price}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
                <a href="#order" className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                  Order this →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
