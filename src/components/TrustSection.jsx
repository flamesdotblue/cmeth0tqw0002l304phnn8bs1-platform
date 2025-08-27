import React from 'react';
import { CheckCircle2, ShieldCheck, Fingerprint, Lock } from 'lucide-react';

export default function TrustSection() {
  return (
    <section id="security" className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Security you can trust</h3>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          We never store passwords. Keys live on the user’s device and are verified with challenge-response. Strong defaults, minimal surface area.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          {
            icon: <Fingerprint className="h-5 w-5" />, title: 'Passkey-first',
            desc: 'Platform authenticators with Face/Touch ID',
          },
          {
            icon: <ShieldCheck className="h-5 w-5" />, title: 'Phishing-resistant',
            desc: 'Origin-bound cryptographic assertions',
          },
          {
            icon: <Lock className="h-5 w-5" />, title: 'E2E & at-rest',
            desc: 'Encrypted transit and storage for metadata',
          },
          {
            icon: <CheckCircle2 className="h-5 w-5" />, title: 'SOC 2 ready',
            desc: 'Controls aligned for audit readiness',
          },
        ].map((f) => (
          <div key={f.title} className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-white/90">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10">{f.icon}</span>
              <span className="font-medium">{f.title}</span>
            </div>
            <p className="mt-2 text-sm text-white/60">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6 text-center">
        <p className="text-sm text-white/70">Early access</p>
        <h4 className="mt-2 text-xl font-semibold">Be first to ship invisible auth</h4>
        <a
          href="mailto:founders@vanishauth.com?subject=Vanish%20Auth%20Waitlist"
          className="mt-4 inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition border border-white/10"
        >
          Join the waitlist
        </a>
      </div>
    </section>
  );
}
