import React from 'react';
import SimpleCarousel from '../components/SimpleCarousel.jsx';

function Platforms() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Trading Platforms</h1>
        <p className="mt-3 text-zinc-300 max-w-2xl">Choose from industry‑leading platforms across web, desktop, and mobile. Built for speed, reliability, and control.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="font-medium">MetaTrader 4</h3>
            <p className="text-sm text-zinc-300 mt-1">Classic and powerful with expert advisors and custom indicators.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="font-medium">MetaTrader 5</h3>
            <p className="text-sm text-zinc-300 mt-1">Next‑gen multi‑asset platform with enhanced tools.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="font-medium">cTrader</h3>
            <p className="text-sm text-zinc-300 mt-1">Advanced charting, depth of market, and automation.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="font-medium">Mobile</h3>
            <p className="text-sm text-zinc-300 mt-1">Trade on iOS and Android with native experiences.</p>
          </div>
        </div>

        <div className="mt-12">
          <SimpleCarousel />
        </div>
      </section>
    </div>
  );
}

export default Platforms;
