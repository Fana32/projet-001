# Projet 001 - CV React avec Vite

Ce projet est un CV développé avec **React** et **Vite** dans le cadre de l'apprentissage du développement web et de la création de composants modulaires.

## 🚀 Étapes d'installation et de lancement

### 1. Créer le projet avec Vite
```bash
npm create vite@latest 001 -- --template react
```

### 2. Entrer dans le dossier et installer les dépendances
```bash
cd 001
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrir ensuite l'adresse affichée dans le terminal : http://localhost:5173

### 4. Créer les trois composants dans le dossier `src/`
- `personnel.jsx` : nom, titre, présentation et contacts
- `competence.jsx` : compétences classées par catégorie
- `experience.jsx` : expériences professionnelles

Chaque fichier contient une fonction qui retourne du JSX, exportée avec `export default`.

### 5. Assembler les composants dans `src/App.jsx`
On importe les trois composants, puis on les affiche les uns sous les autres dans `App`.

### 6. Écrire le style
- `src/index.css` : style global (`body`)
- `src/App.css` : style du CV (une règle par classe utilisée dans les composants)

### 7. Générer la version de production (optionnel)
```bash
npm run build
```
Le résultat est créé dans le dossier `dist/`.

### 8.Rôle des dossiers et des fichiers indispensables

- `node_modules/` : contient toutes les dépendances et bibliothèques tierces installées par npm, nécessaires au fonctionnement de l'application.
- `public/` : reçoit les fichiers statiques (images, favicons, polices) servis directement sans transformation par Vite.
- `src/` : dossier source principal, qui contient tout le code de l'application React.
- `src/personnel.jsx`, `src/competence.jsx`, `src/experience.jsx` : les trois composants du CV.
- `src/App.jsx` : composant racine qui assemble et structure les différents blocs de la page.
- `src/main.jsx` : point d'entrée JavaScript qui monte le composant principal dans la page HTML.
- `src/index.css` : styles globaux de la page.
- `src/App.css` : styles du CV.
- `index.html` : fichier HTML principal, qui contient la balise racine `<div id="root">` où s'injecte l'application React.
- `package.json` : liste des dépendances, des scripts de lancement (`dev`, `build`) et des métadonnées du projet.
- `.oxlintrc.json` : configuration d'Oxlint, l'outil qui vérifie la qualité du code (règles activées, dossiers ignorés).
- `vite.config.js` : configuration de Vite, l'outil de build et le serveur de développement.
- `.gitignore` : indique à Git les fichiers et dossiers à exclure du versionnement (comme `node_modules/` ou les builds).