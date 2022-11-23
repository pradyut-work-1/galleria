import '../styles/globals.css'
import '../styles/navbar.css'
import ThemeWrapper from '../src/Wrapper/Theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeWrapper>
  <Component {...pageProps} />
  </ThemeWrapper>
  )
}

export default MyApp
