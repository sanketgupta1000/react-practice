# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# What is a ref in react?

A ref is nothing but an object in react with a key 'current'. It is created using useRef(). What makes it different from state variables is that changing ref.current does not re-render the component.

# How a ref can be useful?

**Accessing DOM elements**: Refs can be used to access DOM elements directly. This can be done by assigning a reference to the ref prop. This makes the reference become the reference of the DOM element itself.

# A use case for ref

Consider we want to have an input element, and we don't want to display the value associated with it anywhere else except the element. In such case, using a state would be overkill, since it would re-render the component everytime we change the input. Hence we can use a ref to refer to the input field. Just like in this little application.

# Another possible use case

In case we have a variable that is used strictly for programming purposes, and not displayed anywhere in the UI, we can make it a reference. This will help not to re-render the component unnecessarily.

# What is forwardRef?

In case we want to make a custom component, and use a ref for one of its 'private' elements, we can use forwardRef, to forward the reference from the custom component to the element contained inside it.