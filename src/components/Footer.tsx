// skill: frontend-react — Footer per checklist §5
import { Boxes, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 text-sm text-slate-400 md:flex-row md:px-6">
        <p className="flex items-center gap-2 font-display font-bold text-white">
          <Boxes className="h-5 w-5 text-cyan-400" aria-hidden="true" />
          Coding&nbsp;Pro&nbsp;<span className="text-gradient">3D</span>
        </p>
        <a
          href="mailto:contact@codingpro3d.fr"
          className="flex items-center gap-2 transition-colors hover:text-white"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          contact@codingpro3d.fr
        </a>
        <p>© 2026 Coding Pro 3D — Tous droits réservés.</p>
      </div>
    </footer>
  );
}
