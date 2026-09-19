# PROGRESS.md — Landing Formation Coding Pro 3D

## T01 — Scaffold + tokens — orchestrator + design-system
- Status: DONE
- Files: `tailwind.config.js` (tokens void/panel/line + fonts display/sans/mono), `index.html` (fr, fonts Google, meta), `src/index.css`
- Checklist design-system: [x] tokens créés, 0 couleur en dur (classes `bg-void`, `text-gradient`, `border-line`, palette Tailwind `indigo-500 #6366f1` / `violet-500 #8b5cf6` / `cyan-400 #22d3ee` = palette du brief) ; [x] `ui/Button` réutilisé (Hero, Navbar, Offer) ; [x] contraste AA : texte `slate-200/300/400` sur `#090b18` (ratio > 7:1), accents réservés aux grands titres/CTA ; [x] responsive 375px + 1280px (mobile-first, `md:`) ; [x] a11y : `aria-expanded`, `aria-label`, focus-visible cyan, `prefers-reduced-motion`
- Écarts justifiés : 3 familles typo (brief impose Space Grotesk + DM Sans + Space Mono) ; React 19 (template Vite) au lieu de 18 ; Tailwind 3 respecté

## T02 — 6 sections + hero 3D — frontend-react
- Status: DONE
- Files: `src/components/{Navbar,Hero,HeroScene,Problem,Portfolio,Program,SocialProof,Offer,Footer}.tsx` + `ui/Button`, `Reveal`, `SectionHeading`, `App.tsx`
- Checklist frontend-react : [x] `tsc -b` 0 erreur (voir build) ; [x] `npx oxlint` 0 erreur ; [x] pas de `any` ; [x] pas de form backend (CTA ancres + `mailto:`, documenté) ; [x] responsive mobile-first (menu burger, grilles `md:`) ; [x] a11y (labels, alt/aria-hidden, focus) ; [x] 0 couleur en dur ; [x] parcours manuel : scroll top→offre, menu mobile, FAQ accordéon, CTA → voir Tests
- Hero 3D : grille de 6050 particules Three.js (1 draw call, DPR ≤ 1.75, pause hors-écran/onglet caché, frame statique si reduced-motion, cleanup complet au démontage)

## Tests
- `npm run build` (tsc -b + vite build) → PASS
- `npx oxlint` → PASS 0 erreur
- Parcours manuel : http://localhost:5173 — nav fixe, hero 3D animé, 6 sections + FAQ, CTA "Rejoindre" → `#offre` / mailto

## T03 — Sections 3D v2 (mondes, personnages, papier, méthode) — frontend-react + threejs-3d-arsenal
- Status: DONE
- Files: `src/components/{Worlds,Characters,Paper3D,Method}.tsx`, `App.tsx`, `Navbar.tsx`, `public/landscape.html` (2,4M, runtime du composant), `package.json` (+ `@designcodeio/threeui`)
- Skills lues : `threejs-3d-arsenal/character-carousel` (variant `wave`, lifecycle), `arsenal-index` (npm + `lib-dist/assets/` → `public/`)
- Checklist : [x] tsc 0 erreur ; [x] oxlint 0 erreur ; [x] lazy-load des 3 scènes (Suspense + skeleton) ; [x] 1 seule scène montée à la fois (onglets) ; [x] style package importé 1× (72K scopé) ; [x] `landscape.html` servi depuis `public/`
- Note : warning build `sRGBEncoding` (code threeui ciblant un three plus ancien ; assignation inoffensive, rendu par défaut sRGB) — à revérifier visuellement, repli possible sur SylvaHero
- Parcours manuel : `#mondes` (2 onglets + 3 variantes paysage), `#personnages` (carousel wave drag/molette), `#papier` (certificat tilt à la souris), `#methode` (5 étapes)
