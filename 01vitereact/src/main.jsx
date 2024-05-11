import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// this logs an object
// indicating that Babel converts jsx syntax to object notation
// console.log(App())

// so can we not directly use an object?
// we can, but it must be created throught React.createElement()

// const MyApp = React.createElement(
//     'a',
//     {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     "Click here to visit google"
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />

    /* can also call directly like this, will never do it though. Just to know what Babel is doing behind the scenes */
    // App()

    // MyApp
)

// so all in all, in render method, react expects a specific type of object
// but we write jsx
// it is babel's job to convert it to correct react understandable code