import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-8">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            New • Passwordless SDK for devs
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">
            Auth that disappears.
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Drop friction, keep security. Biometric, passkey-first authentication you can add in a single line of code. Built on WebAuthn and FIDO2.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:founders@vanishauth.com?subject=Vanish%20Auth%20Waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 hover:brightness-110 transition"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#code"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition border border-white/10"
            >
              <Code2 className="h-4 w-4" />
              See the 1-liner
            </a>
          </div>
          <ul id="features" className="mt-10 grid sm:grid-cols-3 gap-4 text-sm">
            {[
              { title: 'Passkeys & biometrics', desc: 'Face/Touch ID, platform authenticators' },
              { title: 'Drop-in SDK', desc: 'Works with any stack, any UI' },
              { title: 'No passwords stored', desc: 'Phishing-resistant, no resets' },
            ].map((f) => (
              <li key={f.title} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-medium">{f.title}</p>
                <p className="mt-1 text-white/60">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-2xl">
            <div className="text-xs text-white/60">Preview</div>
            <div className="mt-3 rounded-lg border border-white/10 bg-black/40 p-4">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
                <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              </div>
              <pre className="mt-4 overflow-x-auto text-[13px] leading-6">
                <code>
{`// One line to get started\nimport { Vanish } from '@vanish/auth'\n\nawait Vanish.init({ projectId: 'app_123' })\nconst user = await Vanish.signIn() // Face/Touch ID, passkeys\n\nif (user) {\n  console.log('Welcome,', user.displayName)\n}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
