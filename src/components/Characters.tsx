// skill: frontend-react — Characters per checklist §5
// [SKILL USED] library/01-frontend-design/threejs-3d-arsenal/character-carousel
import { Suspense, lazy } from 'react';
import '@designcodeio/threeui/style.css';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const CharacterCarousel = lazy(() =>
  import('@designcodeio/threeui/components/CharacterCarousel').then((m) => ({ default: m.CharacterCarousel })),
);

export default function Characters() {
  return (
    <section id="personnages" aria-labelledby="personnages-titre" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Personnages"
          title="Fais défiler."
          highlight="Au doigt et à la molette."
          sub="Carousel éditorial dark, drag, molette, clavier : l'interaction soignée qui transforme une galerie en expérience."
        />
        <Reveal>
          <div className="panel overflow-hidden">
            <div className="h-[420px] w-full md:h-[480px]">
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center">
                    <p className="animate-pulse font-mono text-xs tracking-widest text-slate-500 uppercase">
                      chargement des personnages…
                    </p>
                  </div>
                }
              >
                <CharacterCarousel variant="wave" />
              </Suspense>
            </div>
            <p className="border-t border-line px-6 py-4 text-sm text-slate-400">
              Variante <span className="font-mono text-cyan-400">wave</span> — responsive, drift idle, navigation
              pointer + molette + clavier. Tu coderas ce niveau de finition dès le module 4.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
