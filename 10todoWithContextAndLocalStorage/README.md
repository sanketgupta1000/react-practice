# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Why context api in a todo?

Because there are some components that will need to use the todo list, as well as functions related to the list. So, better to put everything in a context and use it wherever required. Of course, props can be passed and it won't be much of a problem since this is a small project, will try in a variation.