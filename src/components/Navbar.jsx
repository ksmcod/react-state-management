import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { ThemeContext } from "../context/ThemeContext"

export default function Navbar() {
    const { isLightTheme,light,dark } = useContext(ThemeContext)
    const { isAuth } = useContext(AuthContext)
    const theme = isLightTheme ? light : dark
  return (
    <div style={{ background:theme.ui, color:theme.syntax }}>
        <nav>
            <h1>Context App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        { isAuth ? "Logged in!" : "Logged out!"}
        </nav>
    </div>
  )
}
