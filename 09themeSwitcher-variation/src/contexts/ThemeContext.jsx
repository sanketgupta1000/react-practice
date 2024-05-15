import React, { useContext, useState, useEffect } from "react"

// creating a context for theme
// these are just default values, will be used only if no provider above the component using the context
const ThemeContext = React.createContext({
    theme: "light",
    setLightTheme: ()=>{},
    setDarkTheme: ()=>{},
})

// provider
export const ThemeContextProvider = ({children})=>{

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
        <ThemeContext.Provider value={{theme, setLightTheme, setDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// one hook, will be used by the component to get access of the values from nearest ThemeProvider
export function useTheme()
{
    return useContext(ThemeContext)
}