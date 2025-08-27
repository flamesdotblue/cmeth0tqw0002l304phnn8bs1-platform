import React from 'react';
import { Shield, Fingerprint } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-cyan-500">
            <Fingerprint className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight">Vanish Auth</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#code" className="hover:text-white transition">Code</a>
          <a href="#security" className="hover:text-white transition">Security</a>
          <a href="mailto:founders@vanishauth.com" className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 hover:bg-white/10 border border-white/10 transition">
            <Shield className="h-4 w-4" />
            Join waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}
