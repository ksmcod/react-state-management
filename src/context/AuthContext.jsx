import { createContext, useState } from "react"


export const AuthContext = createContext() 


export default function AuthContextProvider({ children }) {
    const [isAuth,setIsAuth] = useState(false)

    function toggleAuth() {
        setIsAuth(!isAuth)
    }
  return (
    <AuthContext.Provider value={isAuth}>
        { children }
    </AuthContext.Provider>
  )
}
