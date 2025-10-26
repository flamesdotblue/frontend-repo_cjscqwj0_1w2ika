import React from 'react';
import HeaderNav from './components/HeaderNav.jsx';
import HeroSection from './components/HeroSection.jsx';
import Highlights from './components/Highlights.jsx';
import SiteFooter from './components/SiteFooter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderNav />
      <main>
        <HeroSection />
        <Highlights />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
