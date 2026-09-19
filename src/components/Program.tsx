// skill: frontend-react — Program per checklist §5
import { Blocks, Boxes, Gauge, Layers, MousePointerClick, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const modules = [
  {
    icon: Boxes,
    title: 'Three.js sans peur',
    text: 'Scènes, caméras, lumières, géométries, loaders. Tu poses des bases solides au lieu de bidouiller.',
    tags: 'Scene · Camera · Mesh',
  },
  {
    icon: Sparkles,
    title: 'Shaders GLSL enfin lisibles',
    text: 'Vertex, fragment, uniforms : tu écris tes propres effets au lieu de copier des bouts de code.',
    tags: 'GLSL · Uniforms · Noise',
  },
  {
    icon: Layers,
    title: 'Matériaux & textures procédurales',
    text: 'PBR, canvas textures, environnements : des rendus riches sans un seul asset externe.',
    tags: 'PBR · CanvasTexture',
  },
  {
    icon: MousePointerClick,
    title: 'Animation & interaction',
    text: 'Pointer, scroll, drag, états : des scènes qui répondent au visiteur, pas des démos passives.',
    tags: 'Raycast · Scroll · Events',
  },
  {
    icon: Gauge,
    title: 'Perf qui tient en prod',
    text: 'Draw calls, DPR, instancing, teardown : 60 fps sur mobile, zéro fuite mémoire.',
    tags: '60fps · DPR · Cleanup',
  },
  {
    icon: Blocks,
    title: 'React / Next comme un pro',
    text: 'Intégration propre, composants réutilisables, 5 projets portfolio prêts à montrer aux clients.',
    tags: 'R3F · Suspense · Deploy',
  },
];

export default function Program() {
  return (
    <section id="programme" aria-labelledby="programme-titre" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Programme"
          title="8 modules. Zéro remplissage."
          highlight="Que du terrain."
          sub="Chaque module se termine par quelque chose qui tourne dans ton navigateur — et dans ton portfolio."
        />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, idx) => (
            <Reveal key={m.title} delay={(idx % 3) * 120}>
              <li className="panel h-full p-7">
                <div className="mb-5 flex items-center justify-between">
                  <m.icon className="h-8 w-8 text-violet-500" aria-hidden="true" />
                  <span className="font-mono text-sm text-slate-500">0{idx + 1}</span>
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-white">{m.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-400">{m.text}</p>
                <p className="font-mono text-xs text-cyan-400">{m.tags}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
