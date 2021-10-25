import React from 'react'
import { ThemeProvider } from 'styled-components'
import usePersistedState from '@/utils/usePersistedState'

import dark from '@/styles/themes/dark'

import GlobalStyle from '@/styles/global'
import type { AppProps } from 'next/app'

export default function Site({ Component, pageProps }: AppProps) {

  return ( 
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}