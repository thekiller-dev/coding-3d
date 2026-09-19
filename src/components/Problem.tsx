// skill: frontend-react — Problem per checklist §5
import { CircleDollarSign, Compass, TriangleAlert } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const pains = [
  {
    icon: TriangleAlert,
    title: 'Le 3D est partout, le savoir-faire nulle part',
    text: 'E-commerce, SaaS, portfolio : tout le monde veut du 3D. Mais des devs capables de coder une scène propre, performante et maintenable ? On les compte sur les doigts.',
  },
  {
    icon: CircleDollarSign,
    title: 'Les clients paient cher l’effet “wow”',
    text: 'Un hero 3D bien exécuté se facture 3 à 5× le prix d’une landing classique. Aujourd’hui, ce budget part chez les rares qui maîtrisent déjà.',
  },
  {
    icon: Compass,
    title: 'Des tutos éparpillés, zéro méthode',
    text: 'Copier un shader sans le comprendre, ça casse en prod. Il manque un chemin guidé : fondamentaux, pratique, projets, optimisation.',
  },
];

export default function Problem() {
  return (
    <section id="probleme" aria-labelledby="probleme-titre" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Pourquoi maintenant"
          title="Le résultat que tu veux,"
          highlight="le manque qui te bloque."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {pains.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 120}>
              <article className="panel h-full p-7">
                <p.icon className="mb-5 h-8 w-8 text-cyan-400" aria-hidden="true" />
                <h3 className="mb-3 font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="panel mx-auto mt-8 max-w-3xl border-violet-500/30 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-cyan-400/10 p-6 text-center text-base leading-relaxed text-slate-200 md:text-lg">
            On part du résultat : des sites 3D qui impressionnent <em className="text-white not-italic">et</em> qui
            convertissent. Il te manque juste <strong className="text-white">la méthode</strong> — c’est exactement
            ce que la formation te donne.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
