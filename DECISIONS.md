# DECISIONS.md — Landing Formation Coding Pro 3D

| Date | Décision | Skill source | Alternative rejetée |
|------|----------|--------------|---------------------|
| 2026-09-19 | Stack Vite + React + TS + Tailwind 3 + three + lucide-react (standalone sur Bureau, pas dans le monorepo) | `skills/frontend-react` + `skills/design-system` | Fichier HTML unique (rejeté : l'utilisateur demande dépendances installées + serveur ; structure composants plus maintenable) |
| 2026-09-19 | 3 familles typo (brief) au lieu de 2 max du skill | Brief > skill (conflit documenté) | N'en garder que 2 (rejeté : Space Mono porte l'esthétique tech exigée) |
| 2026-09-19 | Hero 3D maison (grille de particules, 1 draw call) plutôt que package `@designcodeio/threeui` | `library/01-frontend-design/threejs-3d-arsenal/arsenal-index` (règles perf : DPR capé, pause offscreen, reduced-motion) | threeui complet (rejeté : surdimensionné pour un fond de hero ; perf et poids) |
| 2026-09-19 | Previews portfolio en CSS pur (cube 3D, orbes, barres) au lieu de canvas multiples | Brief (pas de surcharge perf) | 3 canvas Three.js (rejeté : 3 contextes WebGL = poids + batterie) |
| 2026-09-19 | Pas de formulaire backend : CTA ancres + `mailto:` | Scope brief (conversion → contact) | Faux formulaire sans backend (rejeté : malhonnête UX) |
| 2026-09-19 | Landing v2 : package `@designcodeio/threeui` (MIT) + `LandscapeScene` (variants sunset/night/storm, `landscape.html` 2,4M copié dans `public/`) + `TempleNightScene` + `CharacterCarousel` variant `wave` (skill `character-carousel` lu avant usage), chaque scène lazy-loadée, 1 montée à la fois | `library/01-frontend-design/threejs-3d-arsenal/*` | Recopier les sources à la main (rejeté : package officiel + skill contract) |
| 2026-09-19 | Papier 3D custom (certificat procédural CanvasTexture + tilt pointeur) au lieu de la source Pro `3d-paper` (non distribuée, entitlement payant) | Contrainte licence | Iframe vers threeui.com (rejeté : dépendance externe + branding) |
