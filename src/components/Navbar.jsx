import { AuthContext } from "../context/AuthContext"
import { ThemeContext } from "../context/ThemeContext"

export default function Navbar() {
    return (
        <AuthContext.Consumer >
            {authContext => {
                return (
                <ThemeContext.Consumer >
                    {themeContext => {
                        const { isLightTheme,light,dark } = themeContext
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
                            { authContext ? "Logged in!" : "Logged out!"}
                            </nav>
                        </div>
                        )
                }}
                </ThemeContext.Consumer>
                )
            }}
        </AuthContext.Consumer>
    )
}
