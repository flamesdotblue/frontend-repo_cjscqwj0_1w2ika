import React from 'react';
import { CheckCircle, Gauge, Wallet, Smartphone, LineChart } from 'lucide-react';
import SimpleCarousel from './SimpleCarousel.jsx';

const features = [
  {
    icon: <Gauge className="h-5 w-5 text-emerald-400" />,
    title: 'Ultra‑fast execution',
    desc: 'Low‑latency infrastructure designed for speed and stability.',
  },
  {
    icon: <Wallet className="h-5 w-5 text-emerald-400" />,
    title: 'Tight spreads',
    desc: 'Institutional‑grade liquidity with spreads from 0.0 pips.',
  },
  {
    icon: <Smartphone className="h-5 w-5 text-emerald-400" />,
    title: 'Trade anywhere',
    desc: 'Powerful web, desktop, and mobile experiences.',
  },
  {
    icon: <LineChart className="h-5 w-5 text-emerald-400" />,
    title: 'Advanced analytics',
    desc: 'Built‑in tools to analyze trends and manage risk.',
  },
];

function useReveal() {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function Highlights() {
  const { ref, seen } = useReveal();

  return (
    <section ref={ref} className={`relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-zinc-950 transition-opacity duration-700 ${seen ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">A modern approach to trading</h2>
            <p className="mt-3 text-zinc-300 max-w-xl">
              Experience sleek design, smooth interactions, and performance you can feel. Crafted for pros, friendly for beginners.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-medium">{f.title}</p>
                    <p className="text-sm text-zinc-300">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#/register" className="inline-flex items-center justify-center rounded-lg bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-zinc-100">Open account</a>
              <a href="#/accounts" className="inline-flex items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10 px-4 py-2.5 text-sm font-medium hover:bg-white/15">Compare accounts</a>
            </div>
          </div>

          <div className="grid gap-4">
            <SimpleCarousel />
            <div className="rounded-2xl bg-[radial-gradient(closest-side,rgba(52,211,153,.2),transparent_70%)] ring-1 ring-white/10 p-6">
              <p className="text-sm text-zinc-300">Join thousands of traders worldwide leveraging modern tools and deep liquidity to pursue their strategies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
