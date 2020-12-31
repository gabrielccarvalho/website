import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #333333;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
  ::selection {
    color: black;
    background: #aaffec;
  }
`