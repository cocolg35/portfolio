# Portfolio — Corentin Le Gourrierec

Portfolio one-page, bilingue (FR/EN), construit avec Vite, React 19, TypeScript et SCSS.
Le parcours professionnel est présenté comme une ligne de transport : cinq stations,
un marqueur qui avance au défilement, et les vraies interfaces des produits livrés
(GAP numérique, Appia 5, Showroom 360) dans des cadres d'écran.

## Démarrer

```bash
npm install
npm run dev
```

Build de production : `npm run build` (sortie dans `dist/`, déployable sur n'importe quel hébergeur statique :
GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Modifier le contenu

Tout le texte vit dans deux fichiers typés par `src/i18n/types.ts` :

- `src/i18n/fr.ts` — version française (langue par défaut)
- `src/i18n/en.ts` — version anglaise

Chaque expérience est une `Station` : entreprise, rôle, dates, couleur de ligne, texte, puces,
technologies, chiffres (avec leur source) et type de visuel. Le champ `contact.linkedinUrl`
est vide : renseigne-le pour faire apparaître la ligne LinkedIn.

## Visuels

`public/projects/` contient les captures et visuels des produits, qui restent la propriété
de leurs éditeurs (Gouvernement du Québec, Akinox, Expretio Technologies, 360.Agency).
Facilité Informatique et la Ville de Lorient n'ont pas de visuel public : ils sont illustrés
par des maquettes CSS, étiquetées « Illustration » sur le site.

## Structure

```
src/
  components/   Nav, Hero (tableau à volets), Journey (rail + stations), Visuals, Expertise, Education, Contact
  hooks/        useLenis (défilement inertiel + ancres), useReducedMotion
  i18n/         contenu FR/EN + LangContext
  styles/       tokens (global.scss) et mixins SCSS
```

## Accessibilité et mouvement

Contrastes vérifiés sur fond sombre, focus visible, lien d'évitement, `prefers-reduced-motion`
respecté (les animations et le défilement inertiel sont désactivés). Ajouter `?static` à l'URL
force ce mode, pratique pour des captures d'écran.
