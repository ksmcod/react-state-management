import { ThemeContext } from "./context/ThemeContext";

export default function BookList() {
  return (
    <ThemeContext.Consumer >
        {context => {
            const { isLightTheme,light,dark } = context
            const theme = isLightTheme ? light : dark
            return (
                <div className='book-list' style={{ background:theme.bg, color:theme.syntax }}>
                    <ul>
                        <li style={{ background:theme.ui}}>Game Of Thrones</li>
                        <li style={{ background:theme.ui}}>Don't Split The Difference</li>
                        <li style={{ background:theme.ui}}>Rich Dad Poor Dad</li>
                    </ul>
                </div>
            )
        }}
    </ThemeContext.Consumer>
  )
}
