// skill: frontend-react — Method per checklist §5
import { Code2, Gauge, PenTool, Rocket, Search } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const steps = [
  {
    icon: Search,
    title: 'Diagnostiquer',
    text: 'Test de positionnement : on part de ton niveau réel, pas de zéro.',
  },
  {
    icon: PenTool,
    title: 'Designer',
    text: 'Direction artistique d’abord : tokens, typo, intentions — jamais de code aveugle.',
  },
  {
    icon: Code2,
    title: 'Coder',
    text: 'Scènes réelles chaque semaine, revues de code, zéro copier-coller magique.',
  },
  {
    icon: Gauge,
    title: 'Optimiser',
    text: '60 fps sur mobile, teardown propre, checklist perf avant chaque livraison.',
  },
  {
    icon: Rocket,
    title: 'Livrer & vendre',
    text: 'Portfolio, pricing, posture client : transformer le skill en revenus.',
  },
];

export default function Method() {
  return (
    <section id="methode" aria-labelledby="methode-titre" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="La méthode"
          title="Pas de miracle."
          highlight="Un process en 5 étapes."
          sub="La même boucle, répétée sur chaque module : tu sais toujours où tu es et ce qui vient ensuite."
        />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 100}>
              <li className="relative h-full border-t-2 pt-6" style={{ borderImage: 'linear-gradient(90deg,#6366f1,#8b5cf6,#22d3ee) 1' }}>
                <p className="mb-3 font-mono text-sm text-cyan-400">0{idx + 1}</p>
                <s.icon className="mb-3 h-7 w-7 text-violet-500" aria-hidden="true" />
                <h3 className="mb-2 font-display text-base font-semibold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
