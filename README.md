# cproj-front

Front best practices - Typescript - jest - enzyme - parcel - react router - fetch / axios - less / sass | Dev - prod

## How to build

### For developement

Get Node.js for your platform (https://nodejs.org/en/)
Node is required only to build the project. It is not required to run it.

1. `npm install`
2. `npm run dev`

### For production

1. `npm install`
2. `npm run build`

#Architecture du front

root
├── package.json
├── package-lock.json
├── node_modules
├── src (localhost:1234)
│ └── index.js
├── .gitignore
└── README.md

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

2. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

3. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

4. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

5. **`README.md`**: A text file containing useful reference information about your project.

6. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

---

-- Initialisation d'un projet en javascript se fait en tapant la commande npm init

Structure du JS

src/js components/ (dumb component) Des composants normalement simples pages/ (HOC High order component) Des composants parents qui vont souvent appeler d'autre composants. Ces composants auront très souvent de la logique

Notre bundler est parcel.

Il va par exemple traduire nos fichiers .less en fichiers .css compréhensible par le navigateur

Parcel est livré avec un sourcemap. qui permet de mapper les fichiers de destination avec les fichiers sources pour pouvoir ajuster votre code source par la suite.

Parcel est livré avec un module de rechargement instantané (en gros, il change le fichier dist à chaque fois que vous sauvegardé un fichier dans votre code source)
