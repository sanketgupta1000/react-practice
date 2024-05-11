# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Need of Hook in Currency Converter

Whenever I change the 'from' currency, it is expected that the currency conversion rates from that particular currency to all other currency are fetched at that time only (for efficiency and real time reasons). 

This means that whenever a particupar thing is changed in UI (or when a variable is changed), we need to do something. This is essentially what a hook does! Specifically, useEffect hook. Here, we don't directly use useEffect. Instead, we create our 'wrapper' hook which internally uses useEffect.