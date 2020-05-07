import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.background};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
  }
`

export default GlobalStyle
