import { useEffect, useState } from "react"
import { ThemeContextProvider } from "./contexts/ThemeContext"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"

function App()
{

    // will create the state for theme here. Can also do it in another place, will try in a variation
    const [theme, setTheme] = useState("light")

    const setLightTheme = ()=>{
        setTheme("light")
    }

    const setDarkTheme = ()=>{
        setTheme("dark")
    }

    // useEffect for changing in html class as soon as theme changes
    useEffect(()=>{
        const htmlEle = document.querySelector("html")
        htmlEle.classList.remove("light", "dark")
        htmlEle.classList.add(theme)
    }, [theme])

    return (

        <ThemeContextProvider value={{theme, setLightTheme, setDarkTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>
        </ThemeContextProvider>

    )
}

export default App
