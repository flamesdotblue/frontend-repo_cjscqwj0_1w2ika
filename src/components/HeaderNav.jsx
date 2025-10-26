import React from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

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

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-emerald-500/20 ring-1 ring-emerald-400/30 grid place-items-center">
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="font-semibold tracking-tight">FinMarkets</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink>Markets</NavLink>
            <NavLink>Platforms</NavLink>
            <NavLink>Accounts</NavLink>
            <div className="relative group">
              <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white">
                Resources <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 opacity-0 translate-y-1 group-hover:translate-y-0 transition-all absolute right-0 mt-2 w-64 rounded-xl bg-zinc-900/90 ring-1 ring-white/10 p-2 backdrop-blur">
                <a href="#" className="block px-3 py-2 rounded-lg hover:bg-white/5">Education</a>
                <a href="#" className="block px-3 py-2 rounded-lg hover:bg-white/5">Pricing</a>
                <a href="#" className="block px-3 py-2 rounded-lg hover:bg-white/5">Support</a>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10">
              <Globe className="h-4 w-4" /> EN
            </button>
            <button className="px-3 py-2 text-sm font-medium rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black">
              Sign In
            </button>
            <button className="px-3 py-2 text-sm font-medium rounded-lg bg-white hover:bg-zinc-100 text-black">
              Create Account
            </button>
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
            <a href="#" className="block px-3 py-2 rounded-lg bg-white/5">Markets</a>
            <a href="#" className="block px-3 py-2 rounded-lg bg-white/5">Platforms</a>
            <a href="#" className="block px-3 py-2 rounded-lg bg-white/5">Accounts</a>
            <a href="#" className="block px-3 py-2 rounded-lg bg-white/5">Resources</a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-3 py-2 text-sm font-medium rounded-lg bg-white/5 ring-1 ring-white/10">EN</button>
              <button className="flex-1 px-3 py-2 text-sm font-medium rounded-lg bg-emerald-500 text-black">Sign In</button>
            </div>
            <button className="w-full px-3 py-2 text-sm font-medium rounded-lg bg-white text-black">Create Account</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderNav;
