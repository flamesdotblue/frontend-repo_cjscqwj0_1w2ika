import React from 'react';
import SimpleCarousel from '../components/SimpleCarousel.jsx';

function Card({ title, desc, onClick, accent = 'emerald' }) {
  const accentClasses = {
    emerald: 'bg-emerald-500/20 ring-emerald-400/30 text-emerald-300',
    indigo: 'bg-indigo-500/20 ring-indigo-400/30 text-indigo-300',
    cyan: 'bg-cyan-500/20 ring-cyan-400/30 text-cyan-300',
    rose: 'bg-rose-500/20 ring-rose-400/30 text-rose-300',
  };
  return (
    <button onClick={onClick} className="text-left rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition">
      <div className={`h-8 w-8 rounded-lg ${accentClasses[accent]} grid place-items-center`}> 
        <div className={`h-2.5 w-2.5 rounded-full ${accent.includes('emerald')?'bg-emerald-400':accent.includes('indigo')?'bg-indigo-400':accent.includes('cyan')?'bg-cyan-400':'bg-rose-400'}`} />
      </div>
      <h3 className="mt-3 font-medium">{title}</h3>
      <p className="text-sm text-zinc-300 mt-1">{desc}</p>
    </button>
  );
}

function Platforms() {
  const go = (path) => { window.location.hash = path; };

  return (
    <div className="bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Trading Platforms</h1>
        <p className="mt-3 text-zinc-300 max-w-2xl">Choose from industry‑leading platforms across web, desktop, and mobile. Built for speed, reliability, and control.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Card title="MetaTrader 4" desc="Classic and powerful with expert advisors and custom indicators." onClick={() => go('/platforms/mt4')} accent="emerald"/>
          <Card title="MetaTrader 5" desc="Next‑gen multi‑asset platform with enhanced tools." onClick={() => go('/platforms/mt5')} accent="indigo"/>
          <Card title="cTrader" desc="Advanced charting, depth of market, and automation." onClick={() => go('/platforms/ctrader')} accent="cyan"/>
          <Card title="Mobile" desc="Trade on iOS and Android with native experiences." onClick={() => go('/platforms/mobile')} accent="rose"/>
        </div>

        <div className="mt-12">
          <SimpleCarousel />
        </div>
      </section>
    </div>
  );
}

export default Platforms;
