import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()
{
    // variables go here
    // let counter = 10

    // use state is one of the 'hooks', useful to bring consistency in UI
    // like here, we are displaying counter variable at multiple places
    // and to update it everywhere using plain JS is just too much work
    const [counter, setCounter] = useState(10)
    // useState() takes initial value as argument
    // return [variable, setterForVariable]
    // we must use this setter to update this variable in UI, and in our code too

    // function to increase counter value
    function increaseCounter()
    {
        if(counter<20)
        {

            setCounter(counter+1)
            // this console log gives old value only, since counter updating job pushed in queue (will see)
            // so counter actually updated after this function call only
            console.log(counter)
        }
    }
    
    // function to decrease counter value
    function decreaseCounter()
    {
        if(counter>0)
        {
            setCounter(counter-1)
            console.log(counter)
        }
    }

    return (
        <>

            <h1>Counter App</h1>

            <h2>Counter is {counter}</h2>

            {/* This is how you add an event listener in jsx (or rather, tell babel to add it in the object, so that render method will it actually) */} 
            <button onClick={increaseCounter}>
                Increase counter {counter}
            </button>

            <button onClick={decreaseCounter}>
                Decrease counter {counter}
            </button>

            <p>Counter: {counter}</p>
        </>
    )
}

export default App
