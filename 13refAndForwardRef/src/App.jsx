import { useState, useRef } from "react"
import Input from "./Input";

function App()
{

    // state for one input
    const [value, setValue] = useState("")
    // ref for another input
    const inputRef = useRef(null)
    const passwordRef = useRef(null)

    console.log("re-rendered");
    
    return (

        <div>

            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="State Input"
                />
                <p>State Input Value: {value}</p>
                <button
                    type="submit"
                    onClick={()=>{alert("You entered: "+value)}}
                >
                    Submit
                </button>
            </div>

            {/* similar to previous div, but with ref */}
            <div>
                <input
                    type="text"
                    ref={inputRef}
                    // now think that inputRef.current is a reference of this input, sounds other way around, since we assigned the ref to a prop, but that's how it is
                    placeholder="Ref Input"
                />
                <p>Ref Input Value: {inputRef.current?.value}</p>
                <button
                    type="submit"
                    onClick={()=>{alert("You entered: "+inputRef.current?.value)}}
                >
                    Submit
                </button>
            </div>

            {/* similarly for my Input component */}
            <div>
                <Input
                    type="password"
                    ref={passwordRef}
                />
                <button
                    type="submit"
                    onClick={()=>{alert("You entered: "+passwordRef.current?.value)}}
                >
                    Submit
                </button>
            </div>

        </div>

    )
}

export default App
