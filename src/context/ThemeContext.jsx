import { Children, createContext, useState } from "react"

export const  ThemeContext = createContext() 

export default function ThemeContextProvider({ children }) {
    const [theme,setTheme] = useState({
        isLightTheme:true,
        light:{ syntax:"#555",ui:"#ddd",bg:"#eee" },
        dark:{ syntax:"#ddd",ui:"#333",bg:"#555" }
    })

    function toggleTheme() {
        setTheme(prevTheme => ({ ...prevTheme, isLightTheme:!prevTheme.isLightTheme }))
    }

  return (
    <ThemeContext.Provider value={{...theme,toggleTheme}} >
        { children }
    </ThemeContext.Provider>
  )
}
