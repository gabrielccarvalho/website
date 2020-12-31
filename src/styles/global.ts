import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background}
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
  ::selection {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.primary};
  }
`