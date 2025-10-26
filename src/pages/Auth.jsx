import React from 'react';

function Auth() {
  const [mode, setMode] = React.useState(() => (window.location.hash.includes('register') ? 'register' : 'login'));

  React.useEffect(() => {
    const onHash = () => setMode(window.location.hash.includes('register') ? 'register' : 'login');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="bg-zinc-950 text-white min-h-[70vh]">
      <section className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <div className="flex gap-2 mb-6">
            <button onClick={() => (window.location.hash = '#/login')} className={`flex-1 px-3 py-2 rounded-lg text-sm ${mode === 'login' ? 'bg-emerald-500 text-black' : 'bg-white/10'}`}>Login</button>
            <button onClick={() => (window.location.hash = '#/register')} className={`flex-1 px-3 py-2 rounded-lg text-sm ${mode === 'register' ? 'bg-emerald-500 text-black' : 'bg-white/10'}`}>Register</button>
          </div>

          <form className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="text-sm text-zinc-300">Full name</label>
                <input className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="Jane Doe" />
              </div>
            )}
            <div>
              <label className="text-sm text-zinc-300">Email</label>
              <input type="email" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-zinc-300">Password</label>
              <input type="password" className="mt-1 w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400/50" placeholder="••••••••" />
            </div>
            {mode === 'login' && (
              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2"><input type="checkbox" className="accent-emerald-500" /> Remember me</label>
                <a href="#/forgot" className="text-emerald-300 hover:text-emerald-200">Forgot password?</a>
              </div>
            )}
            <button type="button" className="w-full px-4 py-2 rounded-lg bg-emerald-500 text-black font-medium">{mode === 'login' ? 'Sign In' : 'Create account'}</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Auth;
