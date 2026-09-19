// skill: frontend-react — Worlds per checklist §5
// [SKILL USED] library/01-frontend-design/threejs-3d-arsenal/* (usage npm + lifecycle)
import { Suspense, lazy, useState } from 'react';
import '@designcodeio/threeui/style.css';
import { Mountain, MoonStar } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const LandscapeScene = lazy(() =>
  import('@designcodeio/threeui/components/LandscapeScene').then((m) => ({ default: m.LandscapeScene })),
);
const TempleNightScene = lazy(() =>
  import('@designcodeio/threeui/components/TempleNightScene').then((m) => ({ default: m.TempleNightScene })),
);

type World = 'paysage' | 'temple';
type LandscapeVariant = 'sunset' | 'night' | 'storm';

const worlds: { id: World; label: string; icon: typeof Mountain; text: string }[] = [
  {
    id: 'paysage',
    label: 'Paysage vivant',
    icon: Mountain,
    text: 'Cycle jour/nuit, météo, 7 variantes — une scène complète chargée depuis un seul composant.',
  },
  {
    id: 'temple',
    label: 'Temple de nuit',
    icon: MoonStar,
    text: 'Ambiance nocturne, lumières dynamiques, composition cinématographique en WebGL.',
  },
];

const landscapeVariants: LandscapeVariant[] = ['sunset', 'night', 'storm'];

function SceneFallback() {
  return (
    <div className="flex h-full items-center justify-center bg-void">
      <p className="animate-pulse font-mono text-xs tracking-widest text-slate-500 uppercase">
        chargement de la scène…
      </p>
    </div>
  );
}

export default function Worlds() {
  const [world, setWorld] = useState<World>('paysage');
  const [variant, setVariant] = useState<LandscapeVariant>('sunset');

  return (
    <section id="mondes" aria-labelledby="mondes-titre" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Environnements 3D"
          title="Des mondes entiers."
          highlight="Pas des démos."
          sub="Paysages WebGL temps réel, changeants, pilotables. C'est ce niveau-là que tu apprends à construire."
        />
        <Reveal>
          <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Choisir un monde">
            {worlds.map((w) => (
              <button
                key={w.id}
                type="button"
                role="tab"
                aria-selected={world === w.id}
                onClick={() => setWorld(w.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-sm font-semibold transition-all duration-300 ${
                  world === w.id
                    ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-violet-500/30'
                    : 'border border-line text-slate-300 hover:border-cyan-400/60 hover:text-white'
                }`}
              >
                <w.icon className="h-4 w-4" aria-hidden="true" />
                {w.label}
              </button>
            ))}
            {world === 'paysage' ? (
              <div className="ml-auto flex items-center gap-2" aria-label="Variante du paysage">
                {landscapeVariants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    aria-pressed={variant === v}
                    className={`rounded-lg px-3 py-2 font-mono text-xs transition-colors ${
                      variant === v ? 'bg-cyan-400/20 text-cyan-400' : 'text-slate-500 hover:text-slate-200'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="panel overflow-hidden">
            <div className="aspect-video w-full">
              <Suspense fallback={<SceneFallback />}>
                {world === 'paysage' ? (
                  <LandscapeScene variant={variant} className="h-full w-full" />
                ) : (
                  <TempleNightScene className="h-full w-full" />
                )}
              </Suspense>
            </div>
            <p className="border-t border-line px-6 py-4 text-sm text-slate-400">
              {worlds.find((w) => w.id === world)?.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
