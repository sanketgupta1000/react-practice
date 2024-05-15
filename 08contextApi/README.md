# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Need of context api

Consider that we want to have a component B inside a component A, and we also have some props of B. For B to be able to use the values, the values would need to be passed to A first, and then to B. In case we have more levels of nesting of components, this will create even more problems.

# Solution

Solution is to use context api. Naively speaking, it is a global space which can be accessed by any component. Of course, we need to configure it to be able to actually use it.

# Steps to configure context

1. Create context variable in a file and export it.
2. Create context provider.
3. Use the context wherever required.

## Refer to react.dev notes for the complete concept of context

Basic concept is this: if a components uses a context, then it will ask to the nearest provider (above it in the tree) of that context for the values.