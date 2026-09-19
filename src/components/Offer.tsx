// skill: frontend-react — Offer per checklist §5
import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Gift, ShieldCheck } from 'lucide-react';
import Button from './ui/Button';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const included = [
  '8 modules · 60+ leçons vidéo (accès à vie)',
  '5 projets portfolio guidés pas à pas',
  'Pack de 30 shaders prêts à réutiliser',
  'Templates Three.js + React/Next',
  'Communauté privée + reviews de code',
  'Mises à jour incluses (Three.js évolue vite)',
];

const bonuses = [
  'Bonus 1 — Bibliothèque de 50 effets copier-coller',
  'Bonus 2 — Checklist perf “60 fps” (PDF)',
  'Bonus 3 — Scripts de pricing pour vendre du 3D',
];

const faq = [
  {
    q: 'Je débute en JavaScript, c’est pour moi ?',
    a: 'Si tu sais lire du JS et manipuler le DOM, oui. Le module 1 repart des fondamentaux Three.js sans rien supposer — et chaque notion est pratiquée immédiatement.',
  },
  {
    q: 'Combien de temps pour voir des résultats ?',
    a: 'Compte 3 à 4h par semaine : première scène interactive en 7 jours, premier projet portfolio en 6 semaines. Pas de binge-watching, que du code qui tourne.',
  },
  {
    q: 'Et si ça ne me convient pas ?',
    a: 'Garantie 14 jours, sans question. Un mail suffit, remboursement intégral. Le risque est pour nous, pas pour toi.',
  },
  {
    q: 'L’accès est limité dans le temps ?',
    a: 'Non : accès à vie, mises à jour incluses. Seule la cohorte support (reviews de code en direct) est limitée à 50 places par session.',
  },
  {
    q: 'React est-il obligatoire ?',
    a: 'Non. Le cœur est vanilla Three.js/WebGL (transférable partout) ; le dernier module couvre l’intégration React/Next pour ceux qui en ont besoin.',
  },
];

export default function Offer() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="offre" aria-labelledby="offre-titre" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Offre"
          title="Un seul paiement."
          highlight="Des compétences pour des années."
        />
        <div className="grid items-start gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="panel relative overflow-hidden p-8 md:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
              />
              <p className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
                Cohorte de septembre — 50 places
              </p>
              <div className="mt-4 flex items-end gap-3">
                <p className="font-display text-5xl font-bold text-white md:text-6xl">297&nbsp;€</p>
                <p className="pb-2 text-lg text-slate-500 line-through">497&nbsp;€</p>
              </div>
              <p className="mt-2 text-sm text-slate-400">Paiement unique · Accès à vie · TVA incluse</p>
              <ul className="mt-7 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-xl border border-violet-500/30 bg-violet-500/10 p-5">
                <p className="mb-3 flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <Gift className="h-5 w-5 text-violet-500" aria-hidden="true" />
                  Bonus de lancement inclus
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {bonuses.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
              </div>
              <Button href="mailto:contact@codingpro3d.fr?subject=Inscription%20Coding%20Pro%203D" className="mt-8 w-full">
                Je rejoins la formation
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
                <ShieldCheck className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                Garantie 14 jours, remboursement sans question
              </p>
            </article>
          </Reveal>
          <div>
            <Reveal delay={120}>
              <h3 className="mb-5 font-display text-2xl font-bold text-white">Questions fréquentes</h3>
            </Reveal>
            <div className="space-y-3">
              {faq.map((item, idx) => {
                const isOpen = open === idx;
                return (
                  <Reveal key={item.q} delay={idx * 60}>
                    <div className="panel overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base font-semibold text-white"
                      >
                        {item.q}
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen ? <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{item.a}</p> : null}
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={200}>
              <p className="mt-8 border-l-2 border-cyan-400 pl-5 text-base leading-relaxed text-slate-300 italic">
                « Dans deux ans, “savoir coder la 3D” ne sera plus un bonus — ce sera attendu.
                Ceux qui s’y mettent maintenant fixeront les prix. »
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
