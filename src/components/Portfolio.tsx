// skill: frontend-react — Portfolio per checklist §5
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function CubePreview() {
  const faces = [
    'translateZ(48px)',
    'rotateY(180deg) translateZ(48px)',
    'rotateY(90deg) translateZ(48px)',
    'rotateY(-90deg) translateZ(48px)',
    'rotateX(90deg) translateZ(48px)',
    'rotateX(-90deg) translateZ(48px)',
  ];
  return (
    <div className="cube-scene flex h-full items-center justify-center" aria-hidden="true">
      <div className="cube relative h-24 w-24 animate-cube-spin">
        {faces.map((t) => (
          <span key={t} className="cube-face" style={{ transform: t }} />
        ))}
      </div>
    </div>
  );
}

function OrbsPreview() {
  return (
    <div className="relative h-full overflow-hidden" aria-hidden="true">
      <div className="hero-grid absolute inset-0" />
      <div className="absolute left-[15%] top-[20%] h-24 w-24 animate-orb rounded-full bg-indigo-500/60 blur-2xl" />
      <div
        className="absolute right-[12%] bottom-[15%] h-28 w-28 animate-orb rounded-full bg-cyan-400/50 blur-2xl"
        style={{ animationDelay: '-3s' }}
      />
      <div
        className="absolute left-[45%] top-[45%] h-16 w-16 animate-orb rounded-full bg-violet-500/60 blur-xl"
        style={{ animationDelay: '-6s' }}
      />
    </div>
  );
}

function BarsPreview() {
  const heights = [42, 68, 55, 88, 72, 95, 60, 80, 50, 90, 64, 76];
  return (
    <div className="flex h-full items-end justify-center gap-1.5 p-6" aria-hidden="true">
      {heights.map((h, idx) => (
        <span
          key={idx}
          className="w-4 origin-bottom animate-bar rounded-sm bg-gradient-to-t from-indigo-500 to-cyan-400"
          style={{ height: `${h}%`, animationDelay: `${idx * -0.22}s` }}
        />
      ))}
    </div>
  );
}

const projects = [
  {
    preview: <CubePreview />,
    tags: 'Three.js · Configurateur',
    title: 'Configurateur 3D e-commerce',
    text: 'Chaise personnalisable en temps réel : couleurs, tissus, rotation 360°. Panier connecté, 60 fps sur mobile.',
    metric: '+38% de conversion · 3 semaines de dev',
  },
  {
    preview: <OrbsPreview />,
    tags: 'Hero immersif · SaaS',
    title: 'Hero 3D qui retient',
    text: 'Scène WebGL réactive au scroll pour un SaaS B2B : le visiteur explore le produit au lieu de scroller.',
    metric: '−47% de rebond · 10 jours, 1 dev',
  },
  {
    preview: <BarsPreview />,
    tags: 'Dataviz · Temps réel',
    title: 'Dashboard 3D temps réel',
    text: '12 000 points de données en particules WebGL, filtrables au clic. Zéro librairie lourde, zéro lag.',
    metric: '60 fps constants · 12k points live',
  },
];

export default function Portfolio() {
  return (
    <section id="realisations" aria-labelledby="realisations-titre" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Preuve par l'exemple"
          title="Pas de promesses."
          highlight="Des projets qui tournent."
          sub="Trois réalisations types que tu sauras reproduire — et vendre — en fin de formation."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 120}>
              <article className="panel group h-full overflow-hidden">
                <div className="h-48 border-b border-line bg-void">{p.preview}</div>
                <div className="p-7">
                  <p className="mb-3 font-mono text-xs tracking-widest text-cyan-400 uppercase">{p.tags}</p>
                  <h3 className="mb-2 font-display text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-400">{p.text}</p>
                  <p className="font-mono text-sm font-bold text-white">{p.metric}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
