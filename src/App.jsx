import { useEffect } from "react"
import Navbar from "./components/Navbar"
import BookList from "./BookList"
import ThemeContextProvider from "./context/ThemeContext"
import ThemeToggle from "./context/ThemeToggle"
import AuthContextProvider from "./context/AuthContext"

export default function App() {
useEffect(() => {
  document.title = "Context & Hooks"
},[])
  return(
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider >
          <Navbar/>
          <BookList/>
          <ThemeToggle/> 
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}