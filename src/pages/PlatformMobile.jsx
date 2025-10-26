import React from 'react';
import { Smartphone, Bell, Globe, ShieldCheck, Download, Wifi, Battery, Touchpad } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
      <div className="h-10 w-10 rounded-lg bg-rose-500/15 ring-1 ring-rose-400/30 grid place-items-center text-rose-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-medium">{title}</h3>
      <p className="mt-1 text-sm text-zinc-300">{desc}</p>
    </div>
  );
}

export default function PlatformMobile() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-rose-400 text-sm font-medium">Platforms</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">Mobile Trading</h1>
        <p className="mt-3 max-w-2xl text-zinc-300">Trade from anywhere with native iOS and Android apps featuring real‑time quotes, charts, and secure order management.</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#/register" className="px-5 py-2.5 rounded-lg bg-rose-500 hover:bg-rose-400 text-black font-medium">Open Account</a>
          <a href="#/platforms/mobile#downloads" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 ring-1 ring-white/10 font-medium inline-flex items-center gap-2">
            <Download className="h-4 w-4"/> Get the App
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Smartphone} title="Native UX" desc="Smooth navigation, gestures, and responsive layouts." />
          <Feature icon={Bell} title="Smart Alerts" desc="Push notifications for price, fills, and margin events." />
          <Feature icon={Globe} title="Real‑time Data" desc="Low‑latency streaming quotes and chart updates." />
          <Feature icon={ShieldCheck} title="Secure" desc="Biometric login and encrypted session management." />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">App Highlights</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• Advanced charting with drawing tools on mobile</li>
              <li>• One‑tap trading from charts and watchlists</li>
              <li>• In‑app funding, withdrawals, and account management</li>
              <li>• Synced layouts with desktop and web</li>
              <li>• Dark mode and battery‑optimized networking</li>
            </ul>
          </div>
          <div id="downloads" className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h2 className="text-xl font-semibold">Get the App</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <a className="rounded-xl p-4 bg-white/10 hover:bg-white/20 ring-1 ring-white/10 flex items-center justify-between" href="#">
                <span className="font-medium">iOS App Store</span>
                <Download className="h-4 w-4" />
              </a>
              <a className="rounded-xl p-4 bg-white/10 hover:bg-white/20 ring-1 ring-white/10 flex items-center justify-between" href="#">
                <span className="font-medium">Google Play</span>
                <Download className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-xs text-zinc-400">Requires iOS 14+ or Android 9+ with network access.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Low Data Mode</h3>
            <p className="mt-1 text-sm text-zinc-300">Switch to lower bandwidth charts on cellular networks.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Offline Watchlists</h3>
            <p className="mt-1 text-sm text-zinc-300">Your favorites sync and are available when offline.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            <h3 className="font-medium">Battery Optimized</h3>
            <p className="mt-1 text-sm text-zinc-300">Adaptive refresh to save power without missing moves.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
