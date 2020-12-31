import GlobalStyle from '@/styles/global'
import type { AppProps } from 'next/app'

export default function Site({ Component, pageProps }: AppProps) {
  return ( 
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  ) 
}