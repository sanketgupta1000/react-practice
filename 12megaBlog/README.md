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

## Component based design

In production grade applications, we design components for all kinds of things, from small buttons to large page components(which are themselves using the smaller components). This is to ensure scalability, code-reusability, and consistency in UI.

# Concept of react hook form

React hook form simplifies many things such as passing a ref in a component, adding validators for it, and so on. Useful to take care of some redundant things.

# Concept of authentication in appwrite

In appwrite, account can be created with account.create() method. After creation of an account, a session can be create using email and password with the account.createEmailPasswordSession() method. This method does the following:

1. Create a session object at the backend, and store the session id along with the user data.

2. In the response, the session id is retrieved, and stored in cookie. If cookie not accessible, it is stored in localStorage.

3. But still, this only creates the session at backend (of course, session is always stored at backend). How do we know in out app that the user is logged in or not?

4. For this, we need to call account.get(), it returns the user data if there is session id in the request and there is a session for that id.