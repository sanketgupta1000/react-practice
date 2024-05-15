# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Why theme switcher to demonstrate context api?

If we think in general, we may have many toggles for switching the theme. One may be in navigation bar at the top, one may be in a collapsible side bar, and so on. All these need to access and work on the same data/state. Of course, we may explicitly pass the state as a prop. But, that would only make our complex code more complex and unreadable, if think of some other other applications where many components share thr same data. Hence, we are using context api.