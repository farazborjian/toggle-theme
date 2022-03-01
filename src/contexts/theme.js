import React, { createContext, useState } from 'react'

const themes = {
    light: {
        backgroundColor: "white",
        color: "black"
    },
    dark: {
        backgroundColor: "black",
        color: "white"
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    const theme = isDark ? themes.dark : themes.light
    
    const toggleTheme = () => {
        setIsDark(!isDark)
    }
    return (
        <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}