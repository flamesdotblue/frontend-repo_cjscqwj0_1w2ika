import React from 'react';

function Accounts() {
  const tiers = [
    { name: 'Standard', price: 'No commission', details: ['Spreads from 0.8 pips', 'All order types', 'No minimum deposit'] },
    { name: 'Raw Spread', price: '$3.5 per side', details: ['Spreads from 0.0 pips', 'Deep liquidity', 'For active traders'] },
    { name: 'Islamic', price: 'Swap‑free', details: ['Swap‑free conditions', 'Sharia‑compliant', 'Competitive pricing'] },
  ];

  return (
    <div className="bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Account Types</h1>
        <p className="mt-3 text-zinc-300 max-w-2xl">Choose an account that matches your strategy and preferences.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 flex flex-col">
              <h3 className="font-medium">{t.name}</h3>
              <p className="mt-1 text-sm text-zinc-300">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {t.details.map((d,i) => <li key={i}>• {d}</li>)}
              </ul>
              <button className="mt-6 px-4 py-2 rounded-lg bg-emerald-500 text-black font-medium">Open {t.name}</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Accounts;
