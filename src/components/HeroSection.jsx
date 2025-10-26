import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Rocket } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative min-h-[88vh] grid">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          style={{ width: '100%', height: '100%' }}
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
        />
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex items-center">
        <div className="py-24 sm:py-28 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30 px-3 py-1.5 text-emerald-300 text-xs font-medium mb-5">
            <Rocket className="h-3.5 w-3.5" /> Next‑gen trading experience
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Trade global markets with speed and confidence
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Ultra‑low spreads, lightning‑fast execution, and institutional‑grade infrastructure in a sleek, modern platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-3 font-medium"
            >
              Create free account <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 ring-1 ring-white/10 px-5 py-3 font-medium"
            >
              Explore platforms
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-zinc-300">
            <div className="flex items-center gap-3 rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
              <Shield className="h-4 w-4 text-emerald-300" />
              <span>Regulated. Secure infrastructure.</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>99.99% uptime and fast execution</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
              <span className="font-semibold text-white">0.0</span>
              <span>pip raw spreads available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
