import { useCallback, useEffect, useRef, useState } from "react"

function App() {

    // variables go here
    const [length, setLength] = useState(8)
    const [isNumberAllowed, setNumberAllowed] = useState(false)
    const [isCharAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("abc")

    //useRef hook, to get access of the text in password field
    // initialli, reference is null
    let passwordRef = useRef(null)

    // useCallback, since want to cache generatePassword function between re-renders
    // takes the function as argument, and its dependencies
    // dependencies are the variables declared in the top level of our module (App in this case)
    // and they are used by the function we are giving to useCallback
    const generatePassword = useCallback(()=>{
        console.log("password generate function called")
        let pass = ""
        let charsToInclude = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(isNumberAllowed)
        {
            charsToInclude += "0123456789"
        }

        if(isCharAllowed)
        {
            charsToInclude += "!@#$%^&*()-=+`,./<>?;'[]\:{}|"
        }

        // now picking at random from charsToInclude and appending in pass
        for(let i = 1; i<=length; i++)
        {
            let index = Math.floor(Math.random()*charsToInclude.length)
            pass += charsToInclude[index]
        }

        // set the password
        setPassword(pass)
    }, [isNumberAllowed, isCharAllowed, length, setPassword])

    // cannot call directly like this
    // generatePassword()

    // need to use useEffect
    // says that call generatePassword when any change in dependencies, as well as when page loads
    useEffect(generatePassword, [length, isNumberAllowed, isCharAllowed, generatePassword])

    // function to copy password to clipboard
    const copyPasswordToClipboard = useCallback(()=>{
        // show that password is selected
        passwordRef.current?.select()
        // copy
        window.navigator.clipboard.writeText(password)
    })

    return (
        <>
            <div className="m-auto w-1/3 rounded-3xl text-center p-3 shadow-xl my-7 bg-indigo-400 text-white">
                
                <h1>Password Generator</h1>

                <div className="flex flex-wrap justify-center mb-3">

                    {/* password field */}
                    {/* also setting the reference */}
                    <input value={password} className="rounded-s-xl p-2 text-black" readOnly ref={passwordRef}  />
                    {console.log("Password state:", password)}
                    {/* copy password btn */}
                    <button
                        className="rounded-e-xl bg-blue-600 p-2 hover:bg-blue-700 active:bg-blue-800"
                        onClick={copyPasswordToClipboard}
                    >
                        Copy
                    </button>

                </div>

                <div className="flex flex-wrap justify-center">

                    {/* slider for length */}
                    <input
                        id="lengthSlider"
                        type="range"
                        min={6} max={100}
                        // value is nothing but an html attribute. It does not 'link' this input to the length variable.
                        // to 'link' it with length variable, we must setLength onChange
                        // this will update the html attribute value too, hence the linking
                        // in general, value and onChange go handinhand to text inputs
                        // and for checkboxes and radios, checked and onChange
                        value={length}
                        className="cursor-pointer"
                        onChange={(e)=>{setLength(e.target.value)}}
                    />
                    <label className="me-3" htmlFor="lengthSlider">Length: {length}</label>

                    {/* checkbox for numbers */}
                    <input type="checkbox" id="numberCheckbox"
                        checked={isNumberAllowed}
                        onChange={()=>{setNumberAllowed(!isNumberAllowed)}}
                    />
                    <label className="me-3" htmlFor="numberCheckbox">Numbers</label>

                    {/* checkbox for characters */}
                    <input type="checkbox" id="charCheckbox"
                        checked={isCharAllowed}
                        onChange={()=>{setCharAllowed(!isCharAllowed)}}
                    />
                    <label htmlFor="charCheckbox">Characters</label>

                </div>

            </div>
        </>
    )
}

export default App
