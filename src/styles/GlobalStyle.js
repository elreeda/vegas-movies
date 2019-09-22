import { createGlobalStyle } from 'styled-components'

import theme from 'styles/theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', 'Open sans', sans-serif;
    line-height: 24px;
    background-color: ${theme.darkBg};
    color: #FFF;
  }
`

export default GlobalStyle
