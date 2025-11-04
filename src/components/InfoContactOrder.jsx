import { useState } from 'react';

export default function InfoContactOrder() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [order, setOrder] = useState({ item: 'Citrus Herb Sea Bass', qty: 1, type: 'Pickup', time: 'ASAP' });

  const submitContact = (e) => {
    e.preventDefault();
    alert(`Thanks, ${contact.name}! We received your message and will reply to ${contact.email}.`);
    setContact({ name: '', email: '', message: '' });
  };

  const submitOrder = (e) => {
    e.preventDefault();
    alert(`Order placed!\n${order.qty} x ${order.item}\nType: ${order.type}\nTime: ${order.time}`);
    setOrder({ item: 'Citrus Herb Sea Bass', qty: 1, type: 'Pickup', time: 'ASAP' });
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* About */}
        <div id="about" className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">About Ember & Fin</h2>
          <p className="mt-4 text-slate-600">
            We’re a coastal kitchen dedicated to wood-fired seafood. Our crew sources daily from trusted
            fisheries and grills over hardwood for clean, bright flavors that let the fish shine.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-700">
            <span className="rounded-full bg-white px-3 py-1 shadow">Open: Tue–Sun • 11:30a–10:00p</span>
            <span className="rounded-full bg-white px-3 py-1 shadow">Location: 123 Seaside Ave, Bayview</span>
            <span className="rounded-full bg-white px-3 py-1 shadow">Phone: (555) 123-4567</span>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Contact */}
          <div id="contact" className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Contact Us</h3>
            <p className="mt-1 text-sm text-slate-600">Have a question or want to book a large party? Send us a note.</p>
            <form onSubmit={submitContact} className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  required
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  required
                  rows={4}
                  value={contact.message}
                  onChange={(e) => setContact({ ...contact, message: e.target.value })}
                  className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Order */}
          <div id="order" className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Quick Order</h3>
            <p className="mt-1 text-sm text-slate-600">Grab your favorites for pickup or delivery.</p>
            <form onSubmit={submitOrder} className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">Item</label>
                <select
                  value={order.item}
                  onChange={(e) => setOrder({ ...order, item: e.target.value })}
                  className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
                >
                  <option>Citrus Herb Sea Bass</option>
                  <option>Smoked Chili Salmon</option>
                  <option>Garlic Butter Prawns</option>
                  <option>Lemon Pepper Mackerel</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-slate-700">Quantity</label>
                  <input
                    type="number"
                    min={1}
                    value={order.qty}
                    onChange={(e) => setOrder({ ...order, qty: Number(e.target.value) })}
                    className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium text-slate-700">Type</label>
                  <select
                    value={order.type}
                    onChange={(e) => setOrder({ ...order, type: e.target.value })}
                    className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
                  >
                    <option>Pickup</option>
                    <option>Delivery</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-slate-700">Pickup/Delivery Time</label>
                <input
                  type="text"
                  value={order.time}
                  onChange={(e) => setOrder({ ...order, time: e.target.value })}
                  className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
                  placeholder="ASAP or e.g. 7:30 PM"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-700"
              >
                Place Order
              </button>
              <p className="text-xs text-slate-500">This demo places a mock order for preview purposes.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
