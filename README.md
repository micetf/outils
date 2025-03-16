# MiCetF - Outil de recherche

Application moderne pour rechercher et présenter les outils pédagogiques de MiCetF. Cette application permet aux enseignants et élèves de rechercher facilement des outils éducatifs par mots-clés, titre ou description.

## Technologies

-   React 18.2
-   Redux Toolkit
-   Tailwind CSS 3.4
-   Vite
-   Package `micetf-data` pour les données et assets

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/micetf-outils.git
cd micetf-outils

# Installer les dépendances
npm install
# ou
yarn install

# Installation du package micetf-data (depuis GitHub)
npm install github:micetf/micetf-data#v1.0.10
# ou
yarn add github:micetf/micetf-data#v1.0.10
```

## Configuration du package micetf-data

Le package `micetf-data` contient les données des outils et les ressources (images, thumbnails, etc.). Pour l'utiliser correctement :

1. Le package est installé automatiquement depuis GitHub via la commande d'installation
2. Les assets sont copiés automatiquement lors du build grâce au script défini dans `package.json` :
    ```json
    "prebuild": "node node_modules/micetf-data/scripts/copy-assets.js"
    ```
3. Les données sont importées dans l'application via :
    ```javascript
    import { tools, getFullThumbnailPath } from "micetf-data";
    ```

## Développement

```bash
# Lancer le serveur de développement
npm run dev
# ou
yarn dev
```

L'application sera disponible à l'adresse [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
# Compiler l'application pour la production
npm run build
# ou
yarn build
```

Cette commande générera une version optimisée de l'application dans le dossier `dist`.

## Structure du projet

```
micetf-outils/
├── public/          # Ressources statiques
├── src/
│   ├── actions/     # Actions Redux
│   ├── components/  # Composants React
│   ├── reducers/    # Reducers Redux
│   ├── utils/       # Utilitaires
│   ├── index.jsx    # Point d'entrée
│   └── index.css    # Styles globaux
├── tailwind.config.js    # Configuration Tailwind
├── vite.config.js        # Configuration Vite
└── package.json          # Dépendances et scripts
```

## Fonctionnalités

-   Recherche d'outils par titre, description ou mots-clés
-   Filtrage des résultats en temps réel
-   Interface responsive adaptée aux différents appareils
-   Visualisation détaillée des outils sélectionnés
-   Code d'intégration pour inclure les outils dans d'autres sites

## Améliorations proposées

Pour moderniser l'application :

1. Migrer complètement vers Redux Toolkit
2. Convertir tous les composants classes en composants fonctionnels avec hooks
3. Standardiser l'utilisation de Tailwind CSS pour tous les styles
4. Améliorer l'accessibilité et l'UX

## Licence

Copyright © Frédéric MISERY - MiCetF
