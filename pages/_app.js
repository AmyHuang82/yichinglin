import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: normal;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'PingFang TC', 'Microsoft JhengHei', sans-serif;
    -webkit-overflow-scrolling: touch;
  }

  a {
    :focus {
      outline: none;
      text-decoration: underline;
    }
    cursor: pointer;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
