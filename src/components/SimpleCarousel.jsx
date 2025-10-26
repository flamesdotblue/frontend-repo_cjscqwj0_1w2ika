import React from 'react';

const slides = [
  {
    title: 'Lightning execution',
    desc: 'Trade with confidence on low‑latency infrastructure.',
  },
  {
    title: 'Institutional pricing',
    desc: 'Access deep liquidity and raw spreads.',
  },
  {
    title: 'Powerful platforms',
    desc: 'Trade on web, desktop, and mobile seamlessly.',
  },
];

function SimpleCarousel() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={i} className="min-w-full px-6 py-8">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${index === i ? 'bg-emerald-400' : 'bg-white/30'}`} />
        ))}
      </div>
    </div>
  );
}

export default SimpleCarousel;
