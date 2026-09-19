// skill: frontend-react — Hero per checklist §5
import { Suspense, lazy } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Button from './ui/Button';
import Reveal from './Reveal';

const HeroScene = lazy(() => import('./HeroScene'));

const stats = [
  { value: '1 200+', label: 'élèves formés' },
  { value: '4,9/5', label: 'satisfaction' },
  { value: '5', label: 'projets portfolio' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_65%_60%_at_50%_42%,rgba(9,11,24,0.88),rgba(9,11,24,0.35)_55%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent"
      />
      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center md:px-6">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-1.5 font-mono text-xs tracking-widest text-cyan-400 uppercase">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Formation Three.js · WebGL · GLSL
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] text-white md:text-7xl">
            Ton navigateur est un moteur 3D.
            <br />
            <span className="text-gradient">Apprends à le piloter.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-100 [text-shadow:0_2px_14px_rgba(9,11,24,0.95)] md:text-xl">
            Coding Pro 3D : 8 modules, 60+ leçons, 5 projets réels. De ton premier cube
            Three.js à des shaders GLSL qui décrochent des clients.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="#offre">
              Rejoindre la formation
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="ghost" href="#programme">
              <Play className="h-5 w-5" aria-hidden="true" />
              Voir le programme
            </Button>
          </div>
        </Reveal>
        <Reveal delay={480}>
          <dl className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="order-2 mt-1 block text-sm text-slate-400">{s.label}</dt>
                <dd className="font-mono text-2xl font-bold text-white md:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
