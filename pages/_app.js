import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useRouter } from 'next/router'

const queryClient = new QueryClient()

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
    font-family: 'Open Sans', sans-serif;
    -webkit-overflow-scrolling: touch;
  }

  a {
    :focus {
      outline: none;
      text-decoration: underline;
    }
    cursor: pointer;
    text-decoration: none;
  }
`

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
      <ReactQueryDevtools />
      <Analytics />
      <SpeedInsights route={router.pathname} />
    </QueryClientProvider>
  )
}

export default MyApp
