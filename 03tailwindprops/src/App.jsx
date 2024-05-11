import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

    const myObj = {
        username: "Sanket",
        age: 20
    }

    return (
        <>
            {/* This is how you specify classes in jsx. Similarly, other html element attributes can be specified with different names */}
            <h1 className="text-3xl font-bold underline bg-black text-yellow-300">
                Hello world!
            </h1>

            {/* we know that below jsx statement is nothing but a function call in js */}
            {/* so, can we pass some arguments? Yes! */}
            {/* That is essentially what props are. */}
            {/* except string every other prop needs to be an jsx expression, i.e., enclosed in curly braces */}
            {/* <Card name="Sanket Gupta" age={20} obj={myObj} /> */}
            <Card name="Sanket Gupta" position="SWE" company="XYZ" />
            <Card name="Sarah Dayan" position="Staff Engineer" company="Algolia" />
            <Card />
        </>
    )
}

export default App
