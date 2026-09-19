// skill: frontend-react — Navbar per checklist §5
import { useState } from 'react';
import { Boxes, Menu, X } from 'lucide-react';

const links = [
  { href: '#probleme', label: 'Le problème' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#mondes', label: 'Mondes 3D' },
  { href: '#programme', label: 'Programme' },
  { href: '#methode', label: 'Méthode' },
  { href: '#avis', label: 'Avis' },
  { href: '#offre', label: 'Offre' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-void/80 backdrop-blur-md">
      <nav aria-label="Navigation principale" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-white">
          <Boxes className="h-5 w-5 text-cyan-400" aria-hidden="true" />
          Coding&nbsp;Pro&nbsp;<span className="text-gradient">3D</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#offre"
          className="btn-glow hidden rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 font-display text-sm font-semibold text-white md:inline-flex"
        >
          Rejoindre — 297&nbsp;€
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="rounded-lg p-2 text-slate-200 hover:bg-white/5 md:hidden"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>
      {open ? (
        <ul className="space-y-1 border-t border-line bg-void/95 px-4 py-4 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#offre"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-3 text-center font-display font-semibold text-white"
            >
              Rejoindre — 297&nbsp;€
            </a>
          </li>
        </ul>
      ) : null}
    </header>
  );
}
