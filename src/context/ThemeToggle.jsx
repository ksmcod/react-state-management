import { ThemeContext } from "./ThemeContext";

export default function ThemeToggle() {
  return (
    <ThemeContext.Consumer>
        {context => {
            const { toggleTheme } = context
            return (
                <button onClick={ toggleTheme }>Toggle Theme</button>
            )
        }}
    </ThemeContext.Consumer>
  )
}
