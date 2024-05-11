import { useState } from 'react'
import Button from './components/Button'

function App()
{

    // variable to control color
    const [color, setColor] = useState("blue")

    return (
        <>

            {/* can also use color variable in className as bg-{color}-500. But it will create problem */}
            {/* tailwind generates css based on classes given, during compilation(can say so)  */}
            {/* but if we give variable in className, it will be applied during runtime, by react in the client*/}
            {/* will not take effect then, since css is not generated for that class */}
            {/* so, better use inline css only */}
            <div className="w-full h-screen" style={{backgroundColor:color}}>

                <div className="fixed top-10 bg-white px-3 py-2 left-2/4 rounded-xl">

                    <Button color="red" textColor="white" setter={setColor}/>
                    <Button color="blue" textColor="white" setter={setColor}/>
                    <Button color="green" textColor="white" setter={setColor}/>

                </div>

            </div>

        </>
    )
}

export default App
