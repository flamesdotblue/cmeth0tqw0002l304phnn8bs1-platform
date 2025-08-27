import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CodeShowcase from './components/CodeShowcase';
import TrustSection from './components/TrustSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-white antialiased">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Header />
      <main>
        <Hero />
        <CodeShowcase />
        <TrustSection />
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Vanish Auth. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#security" className="hover:text-white transition">Security</a>
            <a href="mailto:founders@vanishauth.com" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
