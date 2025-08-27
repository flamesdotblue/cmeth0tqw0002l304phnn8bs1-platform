import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

const tabs = [
  {
    id: 'react',
    label: 'React',
    install: 'npm i @vanish/auth',
    code: `import { Vanish } from '@vanish/auth'\n\nawait Vanish.init({ projectId: 'app_123' }) // Auth that disappears.\nconst session = await Vanish.signIn()\nif (session) navigate('/dashboard')`,
  },
  {
    id: 'node',
    label: 'Node',
    install: 'npm i @vanish/server',
    code: `import { verifyAssertion } from '@vanish/server'\n\nexport async function POST(req) {\n  const { assertion } = await req.json()\n  const session = await verifyAssertion(assertion)\n  return Response.json({ ok: true, session })\n}`,
  },
  {
    id: 'python',
    label: 'Python',
    install: 'pip install vanish-auth',
    code: `from vanish import verify_assertion\n\n def login(request):\n     session = verify_assertion(request.json['assertion'])\n     return { 'ok': True, 'session': session }`,
  },
  {
    id: 'curl',
    label: 'cURL',
    install: null,
    code: `curl -X POST https://api.vanishauth.com/v1/verify \\\n  -H 'Content-Type: application/json' \\\n  -d '{"assertion":"<webauthn-assertion>"}'`,
  },
];

export default function CodeShowcase() {
  const [active, setActive] = useState(tabs[0].id);
  const [copied, setCopied] = useState(false);

  const current = tabs.find((t) => t.id === active);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(current.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <section id="code" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Drop-in, one line</h2>
        <div className="hidden sm:flex items-center text-xs text-white/60 gap-2">
          <Terminal className="h-4 w-4" />
          <span>Copy and run</span>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5">
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`rounded-md px-3 py-2 text-sm transition border ${
                active === tab.id
                  ? 'bg-white/10 text-white border-white/10'
                  : 'text-white/70 hover:text-white border-transparent hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 pr-2">
            <button
              onClick={onCopy}
              className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 px-3 py-1.5 text-sm transition"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr,320px]">
          <div className="p-4">
            <div className="rounded-lg border border-white/10 bg-black/40 p-4">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
                <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              </div>
              <pre className="mt-4 overflow-x-auto text-[13px] leading-6"><code>{current.code}</code></pre>
            </div>
          </div>
          <aside className="border-t md:border-t-0 md:border-l border-white/10 p-4 text-sm">
            <p className="text-white/70 mb-3">Install</p>
            {current.install ? (
              <div className="rounded-md bg-black/40 border border-white/10 px-3 py-2 font-mono text-[12px]">
                {current.install}
              </div>
            ) : (
              <div className="text-white/50">No install required</div>
            )}
            <ul className="mt-6 space-y-2 text-white/70">
              <li>• WebAuthn/FIDO2 under the hood</li>
              <li>• Built-in session + device trust</li>
              <li>• Works with any backend</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
