import React from 'react';
import { Menu, X, ChevronDown, Globe, LogIn } from 'lucide-react';

const NavLink = ({ children, href = '#' }) => (
  <a
    href={href}
    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white transition-colors"
  >
    {children}
  </a>
);

function HeaderNav() {
  const [open, setOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setLangOpen(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const changeRoute = (path) => {
    window.location.hash = path;
    setOpen(false);
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' },
  ];
  const [lang, setLang] = React.useState(() => localStorage.getItem('lang') || 'en');

  const setLanguage = (code) => {
    setLang(code);
    localStorage.setItem('lang', code);
    setLangOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => changeRoute('/')} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-emerald-500/20 ring-1 ring-emerald-400/30 grid place-items-center">
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="font-semibold tracking-tight">FinMarkets</span>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            <div className="relative group">
              <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white">
                Platforms <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-[560px] grid grid-cols-2 gap-2 p-3 rounded-2xl bg-zinc-900/95 ring-1 ring-white/10 backdrop-blur opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition">
                <a onClick={() => changeRoute('/platforms')} className="rounded-xl p-3 hover:bg-white/5 cursor-pointer">
                  <p className="font-medium">Trading Platforms</p>
                  <p className="text-sm text-zinc-300">MT4, MT5, cTrader and more</p>
                </a>
                <a className="rounded-xl p-3 hover:bg-white/5 cursor-pointer">
                  <p className="font-medium">Mobile</p>
                  <p className="text-sm text-zinc-300">iOS and Android</p>
                </a>
                <a className="rounded-xl p-3 hover:bg-white/5 cursor-pointer">
                  <p className="font-medium">Web</p>
                  <p className="text-sm text-zinc-300">Trade in your browser</p>
                </a>
                <a className="rounded-xl p-3 hover:bg-white/5 cursor-pointer">
                  <p className="font-medium">Tools</p>
                  <p className="text-sm text-zinc-300">Analytics and add‑ons</p>
                </a>
              </div>
            </div>

            <div className="relative group">
              <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white">
                Markets <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-[640px] grid grid-cols-3 gap-2 p-3 rounded-2xl bg-zinc-900/95 ring-1 ring-white/10 backdrop-blur opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition">
                {['Forex','Indices','Commodities','Crypto','Shares','Bonds'].map((m) => (
                  <a key={m} onClick={() => changeRoute('/markets')} className="rounded-xl p-3 hover:bg-white/5 cursor-pointer">
                    <p className="font-medium">{m}</p>
                    <p className="text-sm text-zinc-300">Trade {m.toLowerCase()}</p>
                  </a>
                ))}
              </div>
            </div>

            <NavLink href="#/accounts">Accounts</NavLink>
            <NavLink href="#/pricing">Pricing</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-2 relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10"
            >
              <Globe className="h-4 w-4" /> {lang.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute right-28 top-12 w-44 rounded-xl bg-zinc-900/95 ring-1 ring-white/10 p-2">
                {languages.map(l => (
                  <button key={l.code} onClick={() => setLanguage(l.code)} className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-sm">
                    {l.label}
                  </button>
                ))}
              </div>
            )}
            <a href="#/login" className="px-3 py-2 text-sm font-medium rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black inline-flex items-center gap-2">
              <LogIn className="h-4 w-4" /> Sign In
            </a>
            <a href="#/register" className="px-3 py-2 text-sm font-medium rounded-lg bg-white hover:bg-zinc-100 text-black">
              Create Account
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 ring-1 ring-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => changeRoute('/platforms')} className="block w-full text-left px-3 py-2 rounded-lg bg-white/5">Platforms</button>
            <button onClick={() => changeRoute('/markets')} className="block w-full text-left px-3 py-2 rounded-lg bg-white/5">Markets</button>
            <a href="#/accounts" className="block px-3 py-2 rounded-lg bg-white/5">Accounts</a>
            <a href="#/pricing" className="block px-3 py-2 rounded-lg bg-white/5">Pricing</a>
            <div className="flex gap-2 pt-2">
              <button onClick={() => setLangOpen((v)=>!v)} className="flex-1 px-3 py-2 text-sm font-medium rounded-lg bg-white/5 ring-1 ring-white/10">Lang</button>
              <a href="#/login" className="flex-1 px-3 py-2 text-sm font-medium rounded-lg bg-emerald-500 text-black">Sign In</a>
            </div>
            <a href="#/register" className="w-full block text-center px-3 py-2 text-sm font-medium rounded-lg bg-white text-black">Create Account</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderNav;
