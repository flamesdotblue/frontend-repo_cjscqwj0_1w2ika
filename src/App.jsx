import React from 'react';
import HeaderNav from './components/HeaderNav.jsx';
import HeroSection from './components/HeroSection.jsx';
import Highlights from './components/Highlights.jsx';
import SiteFooter from './components/SiteFooter.jsx';

// Pages
import Platforms from './pages/Platforms.jsx';
import Markets from './pages/Markets.jsx';
import Accounts from './pages/Accounts.jsx';
import Auth from './pages/Auth.jsx';
import PlatformMT4 from './pages/PlatformMT4.jsx';
import PlatformMT5 from './pages/PlatformMT5.jsx';
import PlatformCTrader from './pages/PlatformCTrader.jsx';
import PlatformMobile from './pages/PlatformMobile.jsx';

function App() {
  const [route, setRoute] = React.useState(() => window.location.hash.replace('#', '') || '/');

  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  const renderRoute = () => {
    // Detailed platform subpages
    if (route.startsWith('/platforms/mt4')) return <PlatformMT4 />;
    if (route.startsWith('/platforms/mt5')) return <PlatformMT5 />;
    if (route.startsWith('/platforms/ctrader')) return <PlatformCTrader />;
    if (route.startsWith('/platforms/mobile')) return <PlatformMobile />;

    if (route.startsWith('/platforms')) return <Platforms />;
    if (route.startsWith('/markets')) return <Markets />;
    if (route.startsWith('/accounts')) return <Accounts />;
    if (route.startsWith('/pricing')) return <Accounts />; // reuse for now
    if (route.startsWith('/login') || route.startsWith('/register') || route.startsWith('/forgot')) return <Auth />;

    // Home
    return (
      <>
        <HeroSection />
        <Highlights />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderNav />
      <main>
        {renderRoute()}
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
