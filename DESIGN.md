---
name: Portfolio Corentin Le Gourrierec
description: Une carrière lue comme une ligne de transport, encre profonde, signal vert, une couleur de ligne par station.
colors:
  ink-0: "#07080c"
  ink-1: "#0c0e15"
  ink-2: "#12151f"
  ink-3: "#1a1e2b"
  edge: "rgba(255, 255, 255, 0.08)"
  edge-strong: "rgba(255, 255, 255, 0.16)"
  paper: "#eef0f5"
  paper-2: "#b8bfd1"
  paper-3: "#8089a1"
  signal: "#5cf0a2"
  signal-ink: "#062b18"
  station-akinox: "#3d86f0"
  station-expretio: "#7c5cff"
  station-360agency: "#ff4b5c"
  station-facilite: "#ffb340"
  station-lorient: "#2ad4c6"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "min(clamp(40px, 14px + 7.22vw, 118px), 9.6vw)"
    fontWeight: 850
    lineHeight: 0.88
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 116, 'wght' 850"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(40px, 21.33px + 5.19vw, 96px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118, 'wght' 800"
  tagline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(22px, 18px + 1.11vw, 34px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 108, 'wght' 700"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(20px, 17.33px + 0.74vw, 28px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 108, 'wght' 700"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(17px, 15.33px + 0.46vw, 22px)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
    fontVariation: "'wdth' 100, 'wght' 400"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
    fontVariation: "'wdth' 100, 'wght' 400"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 118, 'wght' 700"
  mono:
    fontFamily: "Martian Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.74rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "normal"
    fontFeature: "tabular-nums"
rounded:
  cell: "3px"
  tag: "4px"
  chip: "6px"
  board: "8px"
  frame: "14px"
  pill: "999px"
spacing:
  hairline-row: "16px"
  stack-gap: "20px"
  station-inner: "clamp(28px, 21.33px + 1.85vw, 48px)"
  station-body: "clamp(32px, 24px + 2.22vw, 56px)"
  section-header: "clamp(48px, 24px + 6.67vw, 120px)"
  section-block: "clamp(80px, 53.33px + 7.41vw, 160px)"
  station-gap: "clamp(96px, 61.33px + 9.63vw, 200px)"
  gutter: "clamp(16px, 4vw, 48px)"
  container: "1360px"
  nav-h: "64px"
components:
  btn-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1.05em 1.5em"
  btn-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1.05em 1.5em"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.paper-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.9em 1em"
  nav-link-hover:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "{colors.paper}"
  lang-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.paper-3}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "0.6em 0.9em"
  chip-stack:
    backgroundColor: "rgba(var(--s-rgb), 0.08)"
    textColor: "{colors.paper}"
    typography: "{typography.mono}"
    rounded: "{rounded.chip}"
    padding: "0.55em 0.9em"
  chip-tab:
    backgroundColor: "transparent"
    textColor: "{colors.paper-3}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.9em 1.1em"
  chip-tab-selected:
    backgroundColor: "rgba(var(--station-rgb), 0.12)"
    textColor: "{colors.paper}"
  screen-frame:
    backgroundColor: "{colors.ink-2}"
    rounded: "{rounded.frame}"
  split-flap-board:
    backgroundColor: "{colors.ink-1}"
    rounded: "{rounded.board}"
    padding: "0.55em"
  split-flap-cell:
    backgroundColor: "{colors.ink-3}"
    textColor: "{colors.paper}"
    typography: "{typography.mono}"
    rounded: "{rounded.cell}"
  hairline-row:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    padding: "18px 0"
---

# Design System: Portfolio Corentin Le Gourrierec

## Overview

**Creative North Star: "Le plan de ligne"**

Le site est un plan de transport lu de haut en bas : cinq stations (Akinox, Expretio, 360.Agency, Facilité Informatique, Ville de Lorient), un rail vertical qui se remplit au scroll, un marqueur « vous êtes ici » épinglé à 55 % de la hauteur d'écran. Tout ce qui est écrit a la voix d'une signalétique de quai : Archivo étiré et en capitales pour les panneaux, Martian Mono pour les tableaux de départ et les données, texte courant en Archivo à chasse normale. Le fond est une encre profonde (`ink-0`) qui ne lit jamais comme du noir plat grâce à un grain SVG fixe à 35 % d'opacité et à deux halos radiaux teintés par la station active.

La couleur structure la lecture. Le vert `signal` est réservé à l'utilisateur (« vous êtes ici », action principale, sélection, focus, terminus). Chaque station impose sa couleur de ligne à toute la page via `--station` / `--station-rgb` posés sur `:root` par un IntersectionObserver ; barre de progression de la nav, point de marque, remplissage du rail, halos, onglets sélectionnés, années de formation et niveaux de langue suivent tous cette variable. Un seul moment d'animation est réellement mis en scène : le rail et la couleur qui avancent avec le scroll. Le reste est de l'entrée (flou vers net) ou de la réponse à un geste.

La densité est éditoriale : sections espacées de 80 à 200 px, stations séparées de 96 à 200 px, listes en rangées séparées par des filets à 8 % de blanc. Aucune carte : les contenus sont posés directement sur l'encre, et seuls les écrans de produits (navigateur, téléphone, éditeur, tuiles) reçoivent un cadre et une ombre.

**Key Characteristics:**
- Encre profonde à quatre paliers, texte en trois teintes de papier, un seul vert signal.
- Couleur de ligne par station, propagée à toute la page par `--station` / `--station-rgb`.
- Archivo variable : largeur 104–122 pour l'affichage et la signalétique, 100 pour le texte courant.
- Martian Mono en chiffres tabulaires pour dates, URL, cellules du tableau à volets, puces de stack.
- Rangées à filets et pilules, jamais de cartes ; cadres d'écran réservés aux visuels produits.
- Motion : un moment scroll-driven, entrées flou-vers-net, tout inerte sous `prefers-reduced-motion` ou `?static`.

## Colors

Une encre bleutée profonde, trois papiers froids, un vert signal saturé, et cinq couleurs de ligne qui ne coexistent que sur le plan du hero.

### Primary
- **Signal vert** (`signal`) : la couleur de l'utilisateur. Bouton principal, `::selection`, anneau de focus (2 px, décalé de 4 px), point de marque au repos, terminus de la section contact, départ du dégradé du rail, halo du hero (`rgba(92, 240, 162, 0.16)`) et du contact (`0.14`). Jamais utilisé pour un titre ni pour un texte courant.
- **Signal encre** (`signal-ink`) : seul texte autorisé sur fond `signal` (bouton principal, lien d'évitement, sélection).

### Secondary
- **Couleur de station** (`--station`, avec `--station-rgb` pour les alphas) : variable vivante, jamais une valeur fixe dans un composant. Valeurs : bleu Québec `station-akinox`, violet Appia `station-expretio`, rouge 360 `station-360agency`, ambre `station-facilite`, turquoise Lorient `station-lorient`. Elle colore la barre de progression de la nav (2 px), le point de marque une fois scrollé, l'arrêt actif du rail, les halos du parcours (`0.16` et `0.08`), les onglets sélectionnés (`0.12`), les années de formation, les jauges de langue, la face survolée des compétences. Dans une station, la même couleur est locale sous `--s` / `--s-rgb` (années, chiffres, tirets de puces, chips de stack à `0.08` de fond et `0.35` de bordure).

### Neutral
- **Encre 0** (`ink-0`) : fond de page, fond des arrêts de rail (le cercle est évidé sur l'encre).
- **Encre 1** (`ink-1`) : plateau du tableau à volets, champ d'URL des cadres navigateur.
- **Encre 2** (`ink-2`) : fond des cadres d'écran (`screen-frame`), onglet actif de l'éditeur.
- **Encre 3** (`ink-3`) : cellules du tableau à volets, barre de chrome des cadres, onglets d'éditeur.
- **Filet** (`edge`) : tous les séparateurs et bordures de repos (rangées, cadres, plateau, chips inactifs).
- **Filet fort** (`edge-strong`) : bordures de boutons fantômes, bascule de langue, corps des téléphones, encadrés « illustration » en pointillés.
- **Papier** (`paper`) : titres, valeurs, texte des chips, deuxième face des noms.
- **Papier 2** (`paper-2`) : texte courant, ledes, narrations, liens de nav au repos, seconde ligne du nom du hero.
- **Papier 3** (`paper-3`) : labels de signalétique, légendes, URL, nom de famille dans la marque, notes de sources.

### Named Rules
**La règle du signal unique.** Le vert `signal` désigne l'utilisateur et son action ; il ne colore ni titre, ni texte, ni décoration de station. Sur un écran, on le voit sur l'action principale, le focus, le point de marque et rien d'autre.

**La règle de la ligne vivante.** Une couleur de station n'est jamais écrite en dur dans un composant : elle passe par `--station` (page) ou `--s` (station courante), et toute teinte de fond dérivée se fait en `rgba(var(--station-rgb), α)` avec α ≤ 0.18.

**La règle des trois papiers.** Le texte n'a que trois valeurs : `paper` pour ce qui se lit en premier, `paper-2` pour ce qui se lit, `paper-3` pour ce qui se repère. Aucun gris intermédiaire.

## Typography

**Display Font:** Archivo variable (axes `wdth` 62–125, `wght` 100–900), fallback Helvetica Neue, Arial
**Body Font:** Archivo à chasse 100, graisse 400
**Label/Mono Font:** Martian Mono (graisses 300–800), fallback ui-monospace, SF Mono, Menlo

**Character :** une seule famille qui change de largeur selon son rôle. Étirée (104–122) et lourde (700–850) pour les panneaux, normale (100) pour la lecture, étirée et espacée (0.14em) en capitales pour les labels. Martian Mono, toujours en chiffres tabulaires, est la voix des données : dates, URL, tableau de départ, stack.

### Hierarchy
- **Display** (Archivo wdth 116 / wght 850, `min(fluid(40, 118), 9.6vw)`, interligne 0.88, capitales) : le nom du hero. Les noms d'entreprise utilisent la même famille à wdth 104 (122 dès 820 px) / wght 850 avec une taille bornée pour que le mot le plus long tienne sur une ligne (`fluid(44, 128)` plafonné par `min(80vw, 1150px) / (glyphe × longueur)`). Le titre du contact monte à wdth 120 / wght 850, `fluid(48, 140)`.
- **Headline** (wdth 118 / wght 800, `fluid(40, 96)`, interligne 0.95, capitales) : titres de section « Parcours », « Expertise », « Formation ».
- **Tagline** (wdth 108 / wght 700, `fluid(22, 34)`, interligne 1.1, espacement -0.02em) : phrase d'accroche de chaque station. Même réglage à `fluid(24, 46)` pour les compétences.
- **Title** (wdth 108 / wght 700, `fluid(20, 28)`, interligne 1.15) : intitulés de diplômes, noms de langues (`fluid(20, 26)`).
- **Lede** (wdth 100 / wght 400, `fluid(17, 22)`, interligne 1.45, `paper-2`, 54–62ch, `text-wrap: pretty`) : introduction du hero (`fluid(17, 24)`, 56ch) et ledes de section.
- **Body** (wdth 100 / wght 400, 1.0625rem, interligne 1.55, `paper-2`) : narrations de station (`fluid(16, 18)`), puces (0.98rem). Rôle et ville à wght 500, `fluid(16, 21)`.
- **Label / signage** (wdth 112–120 / wght 600–700, 0.72rem, espacement 0.14em, capitales, interligne 1) : boutons, liens de nav, labels de stack, titres de plateforme, labels de contact, marqueur « vous êtes ici », onglets du deck.
- **Mono** (Martian Mono 500–600, tabular-nums) : années de station (`fluid(14, 20)`, 600, espacement 0.04em, couleur de station), bascule FR/EN (0.78rem, 600), chips de stack (0.74rem, 500), URL des cadres (0.66rem), notes de sources (0.68rem, 400), cellules du tableau à volets (600, taille calée sur la largeur de cellule).
- **Figures** (wdth 112 / wght 800, `fluid(28, 44)`, interligne 1, couleur de station) : chiffres clés en `dd` avant leur `dt` à 0.85rem `paper-3`.

### Named Rules
**La règle de la chasse.** La largeur Archivo dit le rôle : ≥ 104 et capitales pour ce qui s'affiche, 100 pour ce qui se lit. Un texte courant n'est jamais étiré, un titre n'est jamais à chasse 100.

**La règle du tableau de départ.** Toute donnée (date, URL, version, stack, chiffre de tableau) est en Martian Mono à chiffres tabulaires ; toute prose est en Archivo. Les deux ne se mélangent pas dans une même ligne, sauf le séparateur.

**La règle de la ligne entière.** Un nom d'entreprise ne se coupe jamais dans un mot : la taille se réduit avant la césure (`overflow-wrap: normal` + plafond calculé).

## Layout

Un seul conteneur : `min(100% - 2 × gutter, 1360px)` centré, gouttière fluide `clamp(16px, 4vw, 48px)`. Points de rupture mobile-first : 560 px (`sm`), 820 px (`md`), 1080 px (`lg`), 1400 px (`xl`). Nav fixe de 64 px (`--nav-h`) avec un voile en dégradé vertical `rgba(7,8,12,.92) → 0` qui n'apparaît qu'une fois scrollé, et une barre de progression de 2 px en couleur de station au bord inférieur.

Le hero occupe `100svh`, grille à une colonne alignée à gauche, plan de ligne SVG en arrière-plan (opacité 0.5 → 0.7 à `md` → 0.85 à `lg`, masqué vers le bas sous `md`). Le parcours est une grille `rail | stations` de 28 px + 16 px d'écart, 72 px + 32 px à `md`, 96 px + 48 px à `lg`. Chaque station est une grille en-tête / corps ; le corps passe en deux colonnes `5fr / 7fr` à `lg`, inversées `7fr / 5fr` pour les stations paires à `xl`. Les en-têtes de section « titre | lede » passent en deux colonnes égales à `lg`. La formation passe en `7fr / 5fr` à `lg`.

Rythme vertical par `fluid(min, max)` entre 360 et 1440 px : sections `fluid(80, 160)` à `fluid(100, 200)` de padding, en-tête de section `fluid(48, 120)` de marge basse, stations séparées de `fluid(96, 200)`, intérieur de station `fluid(28, 48)`, corps `fluid(32, 56)`. Les rangées (chiffres, plateformes, diplômes, contacts) ont 16 à 26 px de padding vertical entre deux filets `edge`. Écarts fixes de 8 px (chips), 12 px (puces, actions), 20 px (blocs d'en-tête) et 22 px (texte de station).

Densité mobile : la nav ne garde que la marque, « Contact » et FR/EN ; le tableau à volets se réduit à des cellules de `clamp(0.5rem, 2.3vw, 1.55rem)` de large ; le marqueur textuel « vous êtes ici » n'apparaît qu'à `lg`.

## Elevation & Depth

Le système est plat et tonal : la profondeur vient des quatre paliers d'encre, des filets à 8 % de blanc, du grain fixe et des halos radiaux en couleur de station. Les ombres n'existent que sous les objets physiques du monde : écrans, plateau du tableau à volets, téléphone. Elles sont toujours grandes, très floues, très décalées vers le bas et à alpha élevé sur l'encre, jamais dures ni offset. Le glass (backdrop-filter) n'est pas utilisé ; le voile de nav est un simple dégradé opaque.

### Shadow Vocabulary
- **Cadre d'écran** (`box-shadow: 0 30px 60px -20px rgba(0,0,0,.7), 0 12px 24px -12px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.05)`) : navigateur, éditeur, tuiles ; le filet intérieur de 1 px en haut simule l'arête éclairée.
- **Téléphone** (`box-shadow: 0 40px 70px -30px rgba(0,0,0,.85), inset 0 0 0 2px rgba(255,255,255,.04)`) : corps `#0a0b10`, rayon 38 px, écran 28 px.
- **Plateau à volets** (`box-shadow: inset 0 2px 8px rgba(0,0,0,.6), 0 20px 40px -24px rgba(0,0,0,.8)`) : le tableau est enfoncé dans l'encre.
- **Halo d'arrêt actif** (`box-shadow: 0 0 0 6px rgba(var(--station-rgb), .18)`) : anneau plat, pas une ombre ; même recette sur le terminus (`rgba(92,240,162,.15)`) et le point de marque (`0 0 0 3px ink-0, 0 0 22px rgba(255,255,255,.8)`).

### Named Rules
**La règle de l'objet.** Une ombre portée n'est posée que sous une chose qui existerait physiquement (écran, tableau, appareil). Un bloc de texte, une rangée, un chip ne portent jamais d'ombre.

**La règle du halo plat.** L'emphase d'un point ou d'un arrêt se fait par un anneau `0 0 0 N px` en alpha de la couleur active, jamais par un flou.

## Shapes

Deux familles de formes. Les interactifs textuels sont des pilules (`999px`) : boutons, liens de nav, bascule de langue, onglets du deck, rails et jauges. Les objets sont des rectangles à coins doux gradués selon leur échelle : cellule de volet 3 px, tag de légende 4 px, chip de stack et lien d'évitement 6 px, plateau et enveloppe du tableau 8 px, cadre d'écran 14 px, téléphone 38 px extérieur / 28 px écran. Les points (arrêts, marque, terminus, voyants) sont des cercles évidés : fond `ink-0`, bordure 3 à 5 px dans la couleur active.

Les bordures sont des filets de 1 px en `edge` (repos) ou `edge-strong` (interactif fantôme). L'encadré « illustration » utilise un pointillé 1 px `edge-strong` pour distinguer une reconstitution d'une vraie interface. Les puces de liste sont des tirets de 12 × 2 px en couleur de station, les séparateurs d'années des traits de 36 × 2 px à 60 % d'opacité. Aucun coin vif sur un élément interactif, aucune découpe ni forme oblique.

## Components

### Buttons
- **Shape :** pilule (`999px`), signalétique 0.72rem wdth 118 / wght 700, capitales, espacement 0.14em, padding `1.05em 1.5em`, icône 1.1em à 0.75em du texte.
- **Primary :** fond et bordure `signal`, texte `signal-ink`. Survol : fond `#7cf5b6`, remontée de 2 px.
- **Ghost :** transparent, bordure 1 px `edge-strong`, texte `paper`. Survol : bordure `paper`, remontée de 2 px.
- **Hover / Focus :** transitions 0.25s `ease-out`; focus visible = contour 2 px `signal` décalé de 4 px avec rayon 4 px (mixin `focus-ring`, partagé par tous les interactifs). Le survol n'existe que sur `(hover: hover) and (pointer: fine)`.

### Chips
- **Chip de stack** (Martian Mono 0.74rem / 500, padding `0.55em 0.9em`, rayon 6 px) : fond `rgba(var(--s-rgb), .08)`, bordure 1 px `rgba(var(--s-rgb), .35)`, texte `paper`. Inerte, purement informatif.
- **Onglet de deck** (signalétique 0.72rem / 600, pilule, padding `0.9em 1.1em`) : bordure `edge`, texte `paper-3`, index en Martian Mono 0.7em couleur station. Sélectionné : bordure `station`, fond `rgba(var(--station-rgb), .12)`, texte `paper`.
- **Tag de légende** (signalétique 0.6rem, rayon 4 px) : « interface réelle » en fond `rgba(var(--s-rgb), .16)` texte `paper` ; « illustration » en pointillé `edge-strong` texte `paper-2`.

### Cards / Containers
Le système n'a pas de cartes. Les contenus (chiffres, plateformes, diplômes, contacts) sont des **rangées à filets** : `border-top` sur la liste, `border-bottom: 1px edge` sur chaque rangée, padding vertical 16–26 px, grille icône / label / valeur (`28px 140px 1fr` à `md`). La rangée de contact se décale de 8 px au survol et passe sa valeur en `signal`. Les seuls conteneurs sont les **cadres d'écran** (voir composant signature).

### Inputs / Fields
Aucun champ de saisie dans le produit ; le contact se fait par liens directs. Seule la bascule FR/EN (Martian Mono 0.78rem / 600, pilule, bordure `edge-strong`, texte `paper-3`, langue active en `paper`) tient lieu de contrôle.

### Navigation
- Barre fixe 64 px, gouttière latérale, marque à gauche (point de 12 px bordé 3 px `signal`, devient `station` une fois scrollé ; prénom en signalétique wdth 115 / 700 espacée 0.1em, nom en 500 `paper-3` masqué sous `sm`).
- Liens en signalétique wdth 112 / 600, `paper-2`, padding `0.9em 1em`, pilule ; survol `paper` sur `rgba(255,255,255,.06)`. Sous `md`, seul le dernier lien (« Contact ») reste.
- Voile en dégradé `rgba(7,8,12,.92) → 0` fondu en 0.4s dès le premier scroll ; barre de progression 2 px en couleur de station.
- Lien d'évitement : fond `signal`, rayon 6 px, visible seulement au focus.

### Tableau à volets (composant signature)
Un tableau de départs qui fait défiler rôle, stack, ancienneté et ville. Plateau `ink-1`, bordure `edge`, rayon 8 px, padding 0.55em, ombre enfoncée, `perspective: 600px`. Cellules Martian Mono 600, `ink-3`, rayon 3 px, largeur `clamp(0.5rem, 2.3vw, 1.55rem)`, hauteur 1.55 × largeur, taille de police 1.05 × largeur, fente centrale de 1 px à 80 % de noir. Moitié haute en dégradé `#272c3d → #1d2130`, moitié basse `#181c29 → #12151f`. Chaque volet bascule en 0.1s (`ease-flap` pour la chute, `ease-out` pour le rattrapage), décalé de 28 ms par cellule ; la phrase tient 3.4s. En reduced motion / `?static`, la cible est affichée directement.

### Rail et station (composant signature)
Rail de 4 px : fantôme `rgba(255,255,255,.07)` sur toute la hauteur, remplissage en dégradé vertical `signal → station à 60 %` mis à l'échelle par le scroll (spring stiffness 90 / damping 26 / mass 0.5, fenêtre `start 55%` → `end 55%`). Arrêts de 16 px (20 px à `md`) évidés `ink-0` bordés 4–5 px dans la couleur de leur station, posés à la hauteur mesurée de chaque en-tête ; l'arrêt actif grandit de 1.35 et prend un halo. Marqueur collant à `top: 55vh` : point blanc de 12 px avec halo lumineux et label vertical « vous êtes ici » en signalétique `paper-3` (≥ `lg`). L'en-tête de station empile années (mono, couleur station, séparateur 36 × 2 px), nom d'entreprise (display), rôle · ville (`paper-2` / séparateur `paper-3`).

### Cadres d'écran (composant signature)
Mixin `screen-frame` : fond `ink-2`, bordure `edge`, rayon 14 px, ombre de cadre, `overflow: hidden`. Variante **navigateur** : chrome de 34 px `ink-3` avec trois voyants 9 px à 18 % de blanc et URL en Martian Mono 0.66rem sur pilule `ink-1` ; image en 16/10 alignée en haut. Variante **téléphone** : ratio 9/19, corps `#0a0b10`, encoche 34 % / 20 px, écran blanc rayon 28 px, capture qui défile en 16s aller-retour. Variante **éditeur** : onglets Martian Mono 0.7rem, onglet actif souligné 2 px `station`, panneaux avant / flèche / après (ancien barré en `rgba(255,75,92,.5)`, nouveau sur `rgba(var(--station-rgb), .06)`). Les cadres sont enveloppés dans un **Tilt** (perspective 1400 px, ±7° suivant le pointeur souris, spring 120 / 18 / 0.6, inerte au toucher et en reduced motion). Le **deck** Appia superpose trois cadres en `translate3d` / `rotateY` (0 / -6° / -10°, luminosité 1 / 0.7 / 0.45) permutés par les onglets, transition 0.7s.

### Motion
- **Un seul moment mis en scène :** le rail qui se remplit et la couleur de page qui change avec le scroll. Tout le reste est entrée ou réponse.
- **Entrées :** `opacity 0 → 1`, `y 24–30px → 0`, `filter: blur(8–10px) → 0`, 0.9s, courbe `ease-out` `cubic-bezier(0.16, 1, 0.3, 1)`, une seule fois, marge de déclenchement -10 %. Le hero cascade ses blocs ; le plan SVG trace ses lignes (`pathLength`) et fait apparaître ses arrêts.
- **Réponses :** survols en 0.2–0.35s `ease-out` (remontée 2 px, décalage 8 px, changement de bordure), faces de compétences qui glissent en 0.55s, tuiles Lorient en entrée décalée de 80 ms.
- **Courbes :** `--ease-out` pour tout ; `--ease-flap` `cubic-bezier(0.4, 0, 0.7, 0.2)` réservé à la chute d'un volet.
- **Défilement :** Lenis (`lerp 0.11`, `wheelMultiplier 0.95`) avec ancres à -24 px, uniquement hors reduced motion.
- **Reduced motion et `?static` :** le hook `useReducedMotion` renvoie vrai si l'OS le demande ou si l'URL porte `?static`. Alors : pas de Lenis, pas d'entrées, rail rempli à 100 %, tableau figé sur sa phrase, Tilt inerte, plan SVG tracé d'emblée, aucune boucle (flèche de scroll, défilement de téléphone, tuiles). Les changements de couleur de station restent actifs.

## Do's and Don'ts

### Do:
- **Do** poser tout contenu directement sur `ink-0` et le structurer par des filets 1 px `edge` ; un nouveau bloc de contenu est une rangée, pas une boîte.
- **Do** dériver toute teinte de station de `--station` / `--station-rgb` (ou `--s` / `--s-rgb` dans une station) avec un alpha ≤ 0.18 pour les fonds et ≤ 0.35 pour les bordures.
- **Do** utiliser Archivo étiré (wdth ≥ 104, wght ≥ 700) et les capitales pour tout ce qui est titre ou signalétique, et Archivo wdth 100 / 400 pour tout ce qui se lit.
- **Do** mettre les données (dates, URL, versions, stack, cellules) en Martian Mono à chiffres tabulaires.
- **Do** dimensionner le rythme vertical avec `fluid(min, max)` entre 360 et 1440 px et le rythme horizontal avec `--gutter` et le conteneur 1360 px.
- **Do** appliquer `focus-ring` (2 px `signal`, décalage 4 px) à tout interactif et restreindre les survols à `(hover: hover) and (pointer: fine)`.
- **Do** faire entrer un élément par flou-vers-net (`blur(8px)` → 0, 0.9s, `ease-out`), une seule fois, et rendre ce mouvement inerte sous reduced motion / `?static`.
- **Do** distinguer une reconstitution d'une vraie interface par le tag « illustration » en pointillé et créditer l'éditeur en légende.

### Don't:
- **Don't** créer de cartes : pas de bloc de texte avec fond `ink-1`/`ink-2`, bordure et ombre. Les cadres d'écran sont réservés aux visuels produits.
- **Don't** ajouter de kicker ou d'eyebrow au-dessus d'un titre ; les titres de section se tiennent seuls avec leur lede.
- **Don't** numéroter les sections ni les stations ; la position est dite par le rail et le marqueur, pas par un chiffre.
- **Don't** appliquer de dégradé à du texte (`background-clip: text`). Les dégradés du monde sont réservés au rail, aux volets, au voile de nav et aux halos.
- **Don't** utiliser `backdrop-filter` ni aucun effet verre ; le voile de nav est un dégradé opaque.
- **Don't** porter d'ombre sous un texte, une rangée ou un chip ; les ombres appartiennent aux écrans, au plateau et au téléphone.
- **Don't** écrire une couleur de station en dur dans un composant ni utiliser `signal` pour un titre, un texte ou une décoration de station.
- **Don't** laisser un nom d'entreprise se couper dans un mot ; réduire la taille avant la césure.
- **Don't** introduire un quatrième gris de texte ou une graisse Archivo entre 400 et 700 pour le texte courant (500 est réservé à rôle · ville et aux valeurs de contact).
