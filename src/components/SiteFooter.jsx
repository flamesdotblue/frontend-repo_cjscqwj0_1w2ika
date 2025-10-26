import React from 'react';
import { Twitter, Youtube, Linkedin, Facebook } from 'lucide-react';

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-semibold">FinMarkets</h4>
            <p className="mt-3 text-sm text-zinc-400 max-w-xs">
              A polished demo experience showcasing a modern trading website design.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-zinc-200">Products</h5>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li><a className="hover:text-white" href="#">Platforms</a></li>
              <li><a className="hover:text-white" href="#">Markets</a></li>
              <li><a className="hover:text-white" href="#">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-zinc-200">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li><a className="hover:text-white" href="#">About</a></li>
              <li><a className="hover:text-white" href="#">Careers</a></li>
              <li><a className="hover:text-white" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-zinc-200">Follow</h5>
            <div className="mt-3 flex gap-3 text-zinc-300">
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-zinc-500">
          <p>
            This is a design demo inspired by modern fintech aesthetics. It is not affiliated with or an exact copy of any third party brand or website.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} FinMarkets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
