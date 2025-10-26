import React from 'react';

const instruments = [
  { name: 'Forex', desc: 'Major, minor, and exotic pairs' },
  { name: 'Indices', desc: 'Global equity indices' },
  { name: 'Commodities', desc: 'Oil, metals, and softs' },
  { name: 'Crypto', desc: 'Top cryptocurrencies' },
  { name: 'Shares', desc: 'US, EU, AU shares' },
  { name: 'Bonds', desc: 'Government bonds' },
];

function Markets() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Markets</h1>
        <p className="mt-3 text-zinc-300 max-w-2xl">Trade a wide range of instruments with competitive pricing and reliable execution.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {instruments.map((it) => (
            <div key={it.name} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="font-medium">{it.name}</h3>
              <p className="text-sm text-zinc-300 mt-1">{it.desc}</p>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-2 text-sm rounded-lg bg-emerald-500 text-black">View specs</button>
                <button className="px-3 py-2 text-sm rounded-lg bg-white/10 ring-1 ring-white/10">Pricing</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Markets;
