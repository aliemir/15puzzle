import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <link
        href='https://fonts.googleapis.com/css?family=Baloo+2:400,500,600,700,800&display=swap'
        rel='stylesheet'
      />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
