// theme.ts
import { DefaultTheme } from 'styled-components'
import { invert } from '../utils/color'

const theme: DefaultTheme = {
  borderRadius: '6px',

  colors: {
    background: '#d8c593',
    backgroundDark: '#708160',
    primary: '#dd7631',
    secondary: invert('#dd7631'),
    // secondary: '#bb3b0e',
    white: '#ffffff',
  },
}

export { theme }
