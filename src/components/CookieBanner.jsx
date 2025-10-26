import React from 'react';

function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="rounded-2xl bg-zinc-900/95 ring-1 ring-white/10 p-4 sm:p-5 backdrop-blur">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-sm text-zinc-300 flex-1">
              We use cookies to enhance your experience, analyze performance, and ensure the site functions properly. By clicking “Accept”, you agree to the use of cookies.
            </p>
            <div className="flex gap-2">
              <button onClick={accept} className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-medium">Accept</button>
              <a href="#/privacy" className="px-4 py-2 rounded-lg bg-white/10 ring-1 ring-white/10 hover:bg-white/15 text-sm">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
