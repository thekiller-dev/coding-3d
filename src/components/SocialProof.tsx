// skill: frontend-react — SocialProof per checklist §5
import { Star } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    quote:
      'Je copiais des shaders sans rien comprendre. Trois semaines plus tard, je livrais un hero 3D facturé 2 400 €. La méthode change tout.',
    name: 'Inès K.',
    role: 'Dev front, freelance',
    initials: 'IK',
  },
  {
    quote:
      'Ce qui m’a vendu : la partie perf. Mes scènes tournaient à 20 fps, maintenant c’est 60 partout, même sur Android d’entrée de gamme.',
    name: 'Mehdi R.',
    role: 'Dev React, SaaS B2B',
    initials: 'MR',
  },
  {
    quote:
      'Le portfolio à la fin vaut de l’or. Deux projets montrés en entretien, un poste avec +35% dès le mois suivant.',
    name: 'Sofia L.',
    role: 'Ex-intégratrice, embauchée 3D',
    initials: 'SL',
  },
];

const stats = [
  { value: '1 200+', label: 'élèves' },
  { value: '4,9/5', label: 'note moyenne' },
  { value: '92%', label: 'terminent un projet' },
];

export default function SocialProof() {
  return (
    <section id="avis" aria-labelledby="avis-titre" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Preuve sociale"
          title="Ils codaient comme toi."
          highlight="Regarde où ils sont."
        />
        <Reveal>
          <dl className="panel mb-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 p-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dd className="font-mono text-3xl font-bold text-white md:text-4xl">{s.value}</dd>
                <dt className="mt-1 text-sm text-slate-400">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 120}>
              <figure className="panel flex h-full flex-col p-7">
                <div className="mb-4 flex gap-1" aria-label="Note : 5 sur 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-slate-300">
                  «&nbsp;{t.quote}&nbsp;»
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 font-display text-sm font-bold text-white"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-semibold text-white">{t.name}</span>
                    <span className="block text-xs text-slate-400">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
