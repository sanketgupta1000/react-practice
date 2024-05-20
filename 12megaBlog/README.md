# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Best Practices for production

## Environment variables

Keep all the environment variables in an object (see src/config/config.js), and make sure all the environment variables are used as strings.

## Services

Here, we will be using appwrite, which is backend as a service. Now, appwrite has its own api that we need to use in order to manage users, database, files, and so on. If we directly use its specific syntax everywhere in our code, it can impose problems if we decide to migrate from appwrite in future. So, better option is to abstract out the appwrite specific syntax behind a 'service'.