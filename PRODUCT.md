# PRODUCT.md — Portfolio de Corentin Le Gourrierec

## Produit
Portfolio web one-page, interactif, présentant le parcours de Corentin Le Gourrierec,
développeur web front-end senior (React, TypeScript, SCSS), 12+ ans d'expérience,
basé à Québec (Canada), originaire de Lorient (France).

## Audience et scène d'usage
Recruteurs techniques, leads front-end et gestionnaires d'ingénierie au Québec,
qui ouvrent le lien depuis un CV ou LinkedIn, sur un écran de bureau en journée,
parfois sur mobile. Ils ont moins de deux minutes et veulent des preuves :
quels produits, quelle échelle, quelles technologies.

## Ce que le site doit prouver
1. Corentin a livré des applications d'envergure dans des secteurs critiques
   (santé publique, revenue management ferroviaire, e-commerce automobile).
2. Il maîtrise React/TypeScript et un CSS/SCSS de haut niveau : le site lui-même
   en est la démonstration.
3. Il est accessible, rigoureux et bilingue.

## Vérité produit (source : CV v6, juillet 2026, et sources publiques vérifiées)
- Akinox (oct. 2023 – juin 2026, Québec) : GAP numérique, chiffres publics de la
  rétrospective Akinox 2024 (1 400+ professionnels, 22 GAP, 2 M de demandes/an,
  70 % traitées en moins de 36 h). Captures : gap.soinsvirtuels.gouv.qc.ca (site public).
- Expretio (janv. 2022 – août 2023, Montréal) : Appia 5, revenue management rail,
  20+ opérateurs (expretio.com), Renfe client de référence. Captures : expretio.com/solutions/appia.
  Côté professionnel (plateforme Linx) confidentiel : maquettes publiques akinox.com (FR).
- 360.Agency (janv. 2018 – janv. 2022, Montréal) : Showroom 360-V2. Visuels : 360.agency
  et captures du produit en situation sur gmileperrot.ca (septembre 2026) : inventaires neuf
  et occasion, fiches, calculatrice de paiements, magasiner en ligne, configurateur, garage.
- Facilité Informatique (oct. 2016 – sept. 2017, Montréal) : refonte React d'un produit
  pour le client Vidéotron. Société rachetée par CGI en 2018, n'existe plus sous ce nom.
  Aucun visuel public : illustration.
- Ville de Lorient (sept. 2013 – sept. 2016, alternance à la DOSI) : six projets documentés
  par les rapports de mission et captures d'époque fournis par Corentin
  (~/Desktop/projets lorient) : Musée de la Compagnie des Indes (tablette Windows 8.1, 2014),
  SIV grand public + tablette agents (2015), Annuaire Mobile (2015), LO.géo portail SIG (2015),
  Carnet d'Urgence (2016), Lorient dans ma poche (maquettes 2016, réalisation ensuite confiée
  à Be Attractive → « Lorient et moi », 2017, qui n'est PAS attribuée à Corentin).
  Écrans contenant des numéros de téléphone ou contacts personnels exclus.

## Engagements de marque
- Sombre et immersif (choix utilisateur), one-page storytelling, FR par défaut + EN.
- Les captures d'écran de produits tiers sont créditées à leurs éditeurs.
- Aucune donnée chiffrée inventée : chaque chiffre a une source publique ou vient du CV.

## Contraintes
- Vite + React 19 + TypeScript + SCSS, déploiement statique.
- Accessibilité : contraste, focus visible, `prefers-reduced-motion` respecté.
- Contenu éditable dans `src/i18n/fr.ts` et `src/i18n/en.ts`.
