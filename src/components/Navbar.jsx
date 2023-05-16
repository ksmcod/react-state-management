import { ThemeContext } from "../context/ThemeContext"

export default function Navbar() {
    return (
        <ThemeContext.Consumer >{context => {
            const { isLightTheme,light,dark } = context
            const theme = isLightTheme ? light : dark
            return (
              <div>
                  <nav style={{ background:theme.ui, color:theme.syntax }}>
                      <h1>Context App</h1>
                      <ul>
                          <li>Home</li>
                          <li>About</li>
                          <li>Contact</li>
                      </ul>
                  </nav>
              </div>
            )
        }}
        </ThemeContext.Consumer>
    )
}