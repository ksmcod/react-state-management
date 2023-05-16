import { useEffect } from "react"
import Navbar from "./components/Navbar"
import BookList from "./BookList"
import ThemeContextProvider from "./context/ThemeContext"

export default function App() {
useEffect(() => {
  document.title = "Context & Hooks"
},[])
  return(
    <div className="app">
      <ThemeContextProvider>
        <Navbar/>
        <BookList/> 
      </ThemeContextProvider>
    </div>
  )
}