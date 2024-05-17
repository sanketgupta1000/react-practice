# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Context API vs Redux Toolkit

1. Type of solution: Context API is a react specific state management solution, whereas redux toolkit is a general state management solution for all JS apps.

2. Type of data store: No centralized data store in context api, in general we may have multiple contexts, each for a functionality/feature, making apps using it hard to debug. RTK has centralized data store, making debugging easier.

3. Data access/flow: In context api, the data access mechanisms are not definite, it is more on the developer to ensure that data is accessed through methods. In RTK, specific mechanisms to access data called reducers.

4. Simplicity: Context api is a light-weight and simple solution with less boiler plate, meant for small to medium scale systems. RTK is a complex solution with more boiler plate, meant for large scale systems.

# Hight level steps of using RTK

1. Create slice
2. Create store
3. Access/Update store in components through useDispatch and useSelector.
4. Wrap the app in provider