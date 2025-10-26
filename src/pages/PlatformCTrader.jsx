import React from 'react';
import { Gauge, Workflow, BarChart2, Download, SlidersHorizontal, CircleDot, Shield } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
      <div className="h-10 w-10 rounded-lg bg-cyan-500/15 ring-1 ring-cyan-400/30 grid place-items-center text-cyan-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-medium">{title}</h3>
      <p className="mt-1 text-sm text-zinc-300">{desc}</p>
    </div>
  );
}

export default function PlatformCTrader() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-cyan-400 text-sm font-medium">Platforms</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">cTrader</h1>
        <p className="mt-3 max-w-2xl text-zinc-300">Built for precision and speed with advanced depth of market and algorithmic trading support.</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#/register" className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-medium">Open Account</a>
          <a href="#/platforms/ctrader#downloads" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 ring-1 ring-white/10 font-medium">Download cTrader</a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Gauge} title="Low‑latency" desc="Optimized for rapid order submission and fills." />
          <Feature icon={Workflow} title="cAlgo / cBots" desc="Automate strategies with C# and .NET ecosystem." />
          <Feature icon={BarChart2} title="DoM & TPO" desc="Institutional visualization including depth of market." />
          <Feature icon={SlidersHorizontal} title="Order Control" desc="Advanced order protection and risk controls built‑in." />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">Platform Specs</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• Supported assets: FX, Indices, Metals, Crypto CFDs</li>
              <li>• Charting: Heikin‑Ashi, Renko, Range bars and more</li>
              <li>• Hotkeys, detachable charts, and layout profiles</li>
              <li>• FIX API and Open API access for qualified clients</li>
              <li>• Extensive backtesting with tick data</li>
            </ul>
          </div>
          <div id="downloads" className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">Downloads</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <a className="rounded-xl p-4 bg-white/10 hover:bg-white/20 ring-1 ring-white/10 flex items-center justify-between" href="#">
                <span className="font-medium">Windows</span>
                <Download className="h-4 w-4" />
              </a>
              <a className="rounded-xl p-4 bg-white/10 hover:bg-white/20 ring-1 ring-white/10 flex items-center justify-between" href="#">
                <span className="font-medium">Web Trader</span>
                <CircleDot className="h-4 w-4" />
              </a>
              <a className="rounded-xl p-4 bg-white/10 hover:bg-white/20 ring-1 ring-white/10 flex items-center justify-between" href="#">
                <span className="font-medium">Android</span>
                <Download className="h-4 w-4" />
              </a>
              <a className="rounded-xl p-4 bg-white/10 hover:bg-white/20 ring-1 ring-white/10 flex items-center justify-between" href="#">
                <span className="font-medium">iOS</span>
                <Download className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-xs text-zinc-400">API access is available to eligible clients upon request.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Advanced Risk</h3>
            <p className="mt-1 text-sm text-zinc-300">Server‑side OCO, TP/SL, and custom trailing strategies.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Custom Layouts</h3>
            <p className="mt-1 text-sm text-zinc-300">Create and save multi‑monitor workspace presets.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Secure Infra</h3>
            <p className="mt-1 text-sm text-zinc-300">Redundant servers and encrypted connectivity.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
