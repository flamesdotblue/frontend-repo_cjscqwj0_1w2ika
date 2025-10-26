import React from 'react';
import { Rocket, Shield, Gauge, Layers, Download, Database, LineChart, Settings } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
      <div className="h-10 w-10 rounded-lg bg-indigo-500/15 ring-1 ring-indigo-400/30 grid place-items-center text-indigo-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-medium">{title}</h3>
      <p className="mt-1 text-sm text-zinc-300">{desc}</p>
    </div>
  );
}

export default function PlatformMT5() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-indigo-400 text-sm font-medium">Platforms</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">MetaTrader 5</h1>
        <p className="mt-3 max-w-2xl text-zinc-300">Trade multi‑asset markets with the next generation of the MetaTrader suite. More timeframes, more order types, more power.</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#/register" className="px-5 py-2.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-black font-medium">Open Account</a>
          <a href="#/platforms/mt5#downloads" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 ring-1 ring-white/10 font-medium inline-flex items-center gap-2">
            <Download className="h-4 w-4"/> Download MT5
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Layers} title="Multi‑Asset" desc="Trade forex, stocks, futures, and more within a single platform." />
          <Feature icon={Database} title="Depth of Market" desc="View market depth and execute at multiple price levels." />
          <Feature icon={LineChart} title="Extended Timeframes" desc="21 timeframes and an expanded indicator library." />
          <Feature icon={Shield} title="Institutional‑grade" desc="Optimized architecture designed for scale and resilience." />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">Platform Specs</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• More order types including Stop Limit and Fill‑or‑Kill</li>
              <li>• Integrated economic calendar and strategy tester</li>
              <li>• Netting and hedging supported across accounts</li>
              <li>• Advanced MQL5 algorithmic trading capabilities</li>
              <li>• Built‑in marketplace with thousands of tools</li>
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
                <span className="font-medium">macOS (Universal)</span>
                <Download className="h-4 w-4" />
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
            <p className="mt-3 text-xs text-zinc-400">For Linux users, MT5 is supported via Wine emulation.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Optimized Engine</h3>
            <p className="mt-1 text-sm text-zinc-300">64‑bit architecture built for throughput and reliability.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Strategy Tester</h3>
            <p className="mt-1 text-sm text-zinc-300">Multi‑threaded tester with visual and tick‑level modeling.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Market Integrations</h3>
            <p className="mt-1 text-sm text-zinc-300">Signals, VPS, and marketplace built right into the terminal.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
