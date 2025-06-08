# Artificium Frontend

🚀 Ai Project Management Frontend Application.

<!-- Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

## Expanding the ESLint configuration

## Table of Content

- Prerequisites
- Developement
  - manual Installation
  - Docker
- Commit Conventions
- Useful links

## prerequisites

- React/Nextjs
- Javascript
- Tailwindcss
- Zustand
- Tanstack query (Strongly recommend as this project relies heavily on react query)

## Developemnt

### Manual Installation:

```bash
git clone https://github.com/CreatorXperience/Artificium-Frontend.git
cd Artificium-Frontend
npm i
npm run dev
```

### Using Docker:

### prerequisites:

- Docker Desktop (windows/macos) [Docker Desktop]()

- Docker (Linux) [Docker Linux]()

```bash
git clone https://github.com/CreatorXperience/Artificium-Frontend.git

docker buildx build -t artificium:latest  .

docker run  --rm -d -p 3000:3000 artificium:latest
```

## Commit Conventions:

### Branching

### Commit

### Pulling

### Pushing

### Merging

## Useful Links

- Project Documentaton: [Notion]()
- Project Diagramming: [Miro]()
- Figma Design: [Figma]()

**Ignore**

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```
