import React, { useContext } from "react"

// creating a context for theme
// these are just default values, will be used only if no provider above the component using the context
const ThemeContext = React.createContext({
    theme: "light",
    setLightTheme: ()=>{},
    setDarkTheme: ()=>{},
})

// provider
export const ThemeContextProvider = ThemeContext.Provider

// one hook, will be used by the component to get access of the values from nearest ThemeProvider
export function useTheme()
{
    return useContext(ThemeContext)
}