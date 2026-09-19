// skill: frontend-react — SectionHeading per checklist §5
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  sub?: string;
};

export default function SectionHeading({ eyebrow, title, highlight, sub }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="mb-4 font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
        {title} {highlight ? <span className="text-gradient">{highlight}</span> : null}
      </h2>
      {sub ? <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">{sub}</p> : null}
    </Reveal>
  );
}
