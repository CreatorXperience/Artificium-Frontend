# **Artificium Frontend**

## **🚀 Ai Project Management Frontend Application.**

## **Table of Content**

- Prerequisites
  - Minimum skills required for this project
- Developement
  - manual Installation
  - Docker
- Commit Conventions
  - What Is Conventional Commits?
  - Commit Message Structure
  - Key Commit Types (For Frontend Projects)
  - Breaking Changes
  - Examples for a Frontend Project
  - Best Practices
  - Commit type
- Branching
  - Creating new branch
  - Checkout to an existing branch
  - Pulling
  - Pushing
  - Merging
- Useful links

## **prerequisites**

### **Minimum skills required for this project**

- React/Nextjs
- Javascript
- Tailwindcss

## **Developemnt**

### **Manual Installation:**

```bash
git clone https://github.com/CreatorXperience/Artificium-Frontend.git
cd Artificium-Frontend
npm i
npm run dev
```

## **Using Docker:**

### **prerequisites:**

- Docker Desktop (windows/macos) [Docker Desktop](https://www.docker.com/products/docker-desktop)

- Docker (Linux) [Docker](https://docs.docker.com/desktop/linux/install/)

```bash
git clone https://github.com/CreatorXperience/Artificium-Frontend.git

cd Artificium-Frontend

docker buildx build -t artificium:latest  .

docker run  --rm -d -p 3000:3000 artificium:latest
```

## **Commit Conventions:**

### **What Is Conventional Commits?**

A standardized commit message format that improves clarity and consistency in project history, automation (e.g., changelogs, versioning), and team collaboration.

---

### 📦 **Commit Message Structure**

```
<type>[optional scope][!]: <description>

[optional body]

[optional footer(s)]
```

---

### 🚀 **Key Commit Types (For Frontend Projects)**

| Type       | Purpose                                               | SemVer Impact |
| ---------- | ----------------------------------------------------- | ------------- |
| `feat`     | Add a new feature (e.g., new UI component)            | **MINOR**     |
| `fix`      | Patch a bug (e.g., layout, state bug)                 | **PATCH**     |
| `docs`     | Update documentation                                  | None          |
| `style`    | CSS/styling-only changes (no logic)                   | None          |
| `refactor` | Code changes without fixing a bug or adding a feature | None          |
| `perf`     | Improve performance (e.g., faster render)             | None          |
| `test`     | Add or update tests                                   | None          |
| `chore`    | Maintenance tasks (e.g., dep updates)                 | None          |
| `build`    | Changes to build system (e.g., Webpack, Vite)         | None          |
| `ci`       | Continuous Integration changes                        | None          |

---

### ⚠️ **Breaking Changes**

- Use `!` in the type/scope: `feat!:`
- Or add footer:

  ```
  BREAKING CHANGE: <explanation>
  ```

Examples:

```bash
feat!: remove support for IE11
BREAKING CHANGE: Dropped support for legacy browsers.
```

```bash
refactor(router)!: migrate to new routing system
```

---

### ✍️ **Examples for a Frontend Project**

```bash
feat(navbar): add mobile menu toggle

fix(form): resolve input validation bug

docs(readme): update setup instructions

style(button): change hover color for accessibility

refactor(ui): simplify modal component logic

perf: debounce search input for better UX

test(button): add unit tests for disabled state

chore: update Tailwind to v3.4
```

---

### 📌 **Best Practices**

- Use consistent types to help with automation (e.g., release notes, changelogs).
- Keep descriptions clear and concise.
- Include scope (like `form`, `auth`, `layout`) to show affected area.
- Use breaking change indicators when needed.

## 🌴 **Branching**

### 🌴 **Creating new branch**

1.before creating a new branch, make sure you checkout to main branch and then pull the latest change to bring your local project update to date

```bash
git checkout main
git pull origin main
```

2. before creating new branch, check your trello ticket ID along with the type of ticket e.g refactor,feature.

3. create a new branch using the git checkout command e.g ` git checkout -b ft-#17-create-nav-component` or `git checkout -b ch-#20-sort-user-messages`

### 🌴 **Checking out to existing branch**

1.  make sure you commit your latest change before checking out to an existing branch

2.  use the `git checkout command` to checkout to an exising branch e.g `git checkout ft-#17-create-nav-component `

### ⬇️ **Pulling**

1. checkout to the remote branch you want to pull from before before executing the command:

```bash
git pull origin <any-remote-branch>
```

### ⬆️ **Pushing**

1. push your local branch to a remote repository using the command:

```bash
git push origin <your-local-branch>

```

### 🤝 **Merging**

1. Add a fellow engineer / repository administrator as a reviewer to review your work before merging

2. Any change requested by the reviewer should be addressed before merging.

## 🔗 **Useful Links**

- Project Documentaton: [Notion](https://www.notion.so/Application-Flow-Planning-18969dc0d7c68011a987d05650b85f29?source=copy_link)
- Project Diagramming: [Miro](https://miro.com/app/board/uXjVLn8stTo=/)
- Figma Design: [Figma](https://www.figma.com/design/c5Lx5Db3XDdjf8esRWNgqi/Artificium---AI-Content-Creation-App---UI-Kit--Community-?node-id=7-45267&p=f&t=OEVGhMBubGuDIt2B-0)

**Ignore this below**

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
