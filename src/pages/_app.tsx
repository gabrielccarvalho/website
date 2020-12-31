import React from 'react'
import { ThemeProvider } from 'styled-components'
import usePersistedState from '@/utils/usePersistedState'

import light from '@/styles/themes/light'
import dark from '@/styles/themes/dark'

import GlobalStyle from '@/styles/global'
import type { AppProps } from 'next/app'

export default function Site({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return ( 
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  ) 
}