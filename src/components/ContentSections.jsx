import { useMemo, useState } from 'react';

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-8">
        {eyebrow && (
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-600">{eyebrow}</div>
        )}
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function ContentSections({ menuItems, selections, setSelections }) {
  const [customer, setCustomer] = useState({ name: '', phone: '', mode: 'Pickup', address: '' });
  const [submitted, setSubmitted] = useState(null);

  const setQty = (id, qty) => {
    setSelections((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };

  const add = (id) => setQty(id, (selections[id] || 0) + 1);
  const remove = (id) => setQty(id, (selections[id] || 0) - 1);

  const orderSummary = useMemo(() => {
    const items = Object.entries(selections).map(([id, qty]) => {
      const item = menuItems.find((m) => m.id === id);
      return { id, name: item?.name || id, qty, price: item?.price || 0, subtotal: (item?.price || 0) * qty };
    });
    const subtotal = items.reduce((a, b) => a + b.subtotal, 0);
    const tax = +(subtotal * 0.08).toFixed(2);
    const total = +(subtotal + tax).toFixed(2);
    return { items, subtotal, tax, total };
  }, [selections, menuItems]);

  const placeOrder = (e) => {
    e.preventDefault();
    if (!orderSummary.items.length) return alert('Please add items from the menu first.');
    if (!customer.name || !customer.phone) return alert('Please provide your name and phone number.');
    if (customer.mode === 'Delivery' && !customer.address) return alert('Please provide a delivery address.');
    setSubmitted({
      when: new Date().toLocaleString(),
      customer,
      ...orderSummary,
    });
    // reset selections
    setSelections({});
    setCustomer({ name: '', phone: '', mode: 'Pickup', address: '' });
  };

  return (
    <>
      {/* Menu */}
      <section id="menu" className="scroll-mt-24 bg-white py-16">
        <SectionTitle
          eyebrow="Our Menu"
          title="Wood-Fired Specialties"
          subtitle="Sustainably sourced seafood, marinated and grilled over hardwood. Served with bright, seasonal sides."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <article key={item.id} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img src={item.image} alt={item.name} className="h-44 w-full object-cover" />
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                  <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-slate-600">{item.desc}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => remove(item.id)} className="h-8 w-8 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50">-</button>
                    <span className="w-6 text-center text-sm font-semibold">{selections[item.id] || 0}</span>
                    <button onClick={() => add(item.id)} className="h-8 w-8 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">+</button>
                  </div>
                  <button onClick={() => add(item.id)} className="rounded-full border border-emerald-200 px-3 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50">Add</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 bg-emerald-50 py-16">
        <SectionTitle
          eyebrow="Our Story"
          title="From Coast to Flame"
          subtitle="Born on the docks and perfected by fire. We celebrate the natural sweetness of the sea with smoke, citrus, and herbs."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1469536526925-9b5547cd96ab?q=80&w=2070&auto=format&fit=crop"
            alt="Chefs grilling fish"
            className="h-72 w-full rounded-2xl object-cover shadow"
          />
          <div className="space-y-3 text-slate-700">
            <p>
              We partner with small fisheries and trusted farms to bring you the freshest catch. Our grills are fired with oak and citrus wood, lending a gentle smoke that enhances—not hides—the flavor.
            </p>
            <p>
              Every plate is finished with house-infused oils, herb relishes, and pickled accents for a bright, modern coastal profile.
            </p>
            <ul className="list-inside list-disc text-slate-700">
              <li>Sustainable sourcing</li>
              <li>Seasonal sides and sauces</li>
              <li>Thoughtful wine and sake pairings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-white py-16">
        <SectionTitle
          eyebrow="Visit Us"
          title="Contact & Hours"
          subtitle="Book a table, ask a question, or plan a private event. We’re here for all your coastal cravings."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Location</h3>
            <p className="text-slate-600">123 Harbor Lane, Seaside City</p>
            <p className="text-slate-600">CA 90000</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Hours</h3>
            <p className="text-slate-600">Mon–Thu: 11:30a – 9:00p</p>
            <p className="text-slate-600">Fri–Sat: 11:30a – 10:00p</p>
            <p className="text-slate-600">Sun: 12:00p – 8:00p</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Contact</h3>
            <p className="text-slate-600">reservations@emberandfin.com</p>
            <p className="text-slate-600">(555) 123-4567</p>
          </div>
        </div>
      </section>

      {/* Order */}
      <section id="order" className="scroll-mt-24 bg-emerald-50 py-16">
        <SectionTitle
          eyebrow="Order"
          title="Ready When You Are"
          subtitle="Choose pickup or delivery. We’ll text you when your order is confirmed."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Your Items</h3>
            {orderSummary.items.length === 0 ? (
              <p className="text-slate-600">No items yet. Add from the menu above.</p>
            ) : (
              <ul className="divide-y divide-slate-200">
                {orderSummary.items.map((it) => (
                  <li key={it.id} className="flex items-center justify-between py-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => remove(it.id)} className="h-6 w-6 rounded-full border border-slate-200">-</button>
                        <span className="w-6 text-center font-semibold">{it.qty}</span>
                        <button onClick={() => add(it.id)} className="h-6 w-6 rounded-full bg-emerald-600 text-white">+</button>
                      </div>
                      <span className="font-medium text-slate-800">{it.name}</span>
                    </div>
                    <span className="text-slate-700">${it.subtotal.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4 border-t pt-4 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>${orderSummary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Tax</span>
                <span>${orderSummary.tax.toFixed(2)}</span>
              </div>
              <div className="mt-2 flex justify-between text-base font-semibold text-slate-900">
                <span>Total</span>
                <span>${orderSummary.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <form onSubmit={placeOrder} className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Your Details</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none"
                  value={customer.name}
                  onChange={(e) => setCustomer((c) => ({ ...c, name: e.target.value }))}
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none"
                  value={customer.phone}
                  onChange={(e) => setCustomer((c) => ({ ...c, phone: e.target.value }))}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Order Type</label>
                <select
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none"
                  value={customer.mode}
                  onChange={(e) => setCustomer((c) => ({ ...c, mode: e.target.value }))}
                >
                  <option>Pickup</option>
                  <option>Delivery</option>
                </select>
              </div>
              {customer.mode === 'Delivery' && (
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-slate-700">Delivery Address</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none"
                    value={customer.address}
                    onChange={(e) => setCustomer((c) => ({ ...c, address: e.target.value }))}
                    placeholder="123 Harbor Lane, Seaside City"
                  />
                </div>
              )}
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-700"
            >
              Place Order
            </button>
            {submitted && (
              <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                <p className="font-semibold">Order placed!</p>
                <p>We sent a confirmation text. Pickup time: ~20–30 min.</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
