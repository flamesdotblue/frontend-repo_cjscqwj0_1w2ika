import React from 'react';
import { Rocket, Shield, Gauge, Wallet, Download, Cpu, BarChart3, Settings } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
      <div className="h-10 w-10 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 grid place-items-center text-emerald-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-medium">{title}</h3>
      <p className="mt-1 text-sm text-zinc-300">{desc}</p>
    </div>
  );
}

export default function PlatformMT4() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-emerald-400 text-sm font-medium">Platforms</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">MetaTrader 4</h1>
        <p className="mt-3 max-w-2xl text-zinc-300">The benchmark platform for forex trading — fast execution, expert advisors, and a rich ecosystem of indicators and tools.</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#/register" className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium">Open Account</a>
          <a href="#/platforms/mt4#downloads" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 ring-1 ring-white/10 font-medium inline-flex items-center gap-2">
            <Download className="h-4 w-4"/> Download MT4
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Rocket} title="Lightning Execution" desc="Low-latency order routing with minimal slippage on major pairs." />
          <Feature icon={Cpu} title="Expert Advisors" desc="Automate strategies using EAs with advanced backtesting." />
          <Feature icon={BarChart3} title="Deep Charting" desc="Dozens of indicators, drawing tools, and multi-timeframe analysis." />
          <Feature icon={Shield} title="Secure & Reliable" desc="Hardened infrastructure and encrypted connections end-to-end." />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">Platform Specs</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• Order types: Market, Limit, Stop, Trailing Stop, OCO</li>
              <li>• Assets: Forex, Metals, Indices, Commodities, Crypto CFDs</li>
              <li>• Chart types: Candlestick, Bar, Line with up to 9 timeframes</li>
              <li>• Backtesting: Single-threaded EA tester with robust metrics</li>
              <li>• Add-ons: Custom indicators, scripts, and marketplace library</li>
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
                <span className="font-medium">macOS (Intel)</span>
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
            <p className="mt-3 text-xs text-zinc-400">Note: macOS Apple Silicon supported via compatibility layer.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Account Types</h3>
            <p className="mt-1 text-sm text-zinc-300">Standard, Raw, and Pro — tight spreads with low commissions.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Execution Model</h3>
            <p className="mt-1 text-sm text-zinc-300">Market execution with deep liquidity and smart routing.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Integrations</h3>
            <p className="mt-1 text-sm text-zinc-300">One-click trading, VPS partners, and premium add-ons.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
