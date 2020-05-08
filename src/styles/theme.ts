// theme.ts
import { DefaultTheme } from 'styled-components'
import { invert, darken } from '../utils/color'

interface ColorPalette {
  background: string
  backgroundDark: string
  primary: string
  secondary: string
  white: string
}

const palettes: ColorPalette[] = [
  {
    background: '#d8c593',
    backgroundDark: '#708160',
    primary: '#dd7631',
    secondary: invert('#dd7631'),
    white: '#ffffff',
  },
  {
    background: '#fff3cd',
    backgroundDark: '#4d3e3e',
    primary: '#d97652',
    secondary: invert('#d97652'),
    white: '#ffffff',
  },
  {
    background: '#e9e1cc',
    backgroundDark: '#ea728c',
    primary: '#6e5773',
    secondary: darken('#6e5773', 42),
    white: '#ffffff',
  },
  {
    background: '#cfb495',
    backgroundDark: '#758184',
    primary: '#5d5b6a',
    secondary: darken('#5d5b6a', 42),
    white: '#ffffff',
  },
  {
    background: '#f4f4f4',
    backgroundDark: '#3a3535',
    primary: '#ff7315',
    secondary: darken('#ff7315', 60),
    white: '#ffffff',
  },
  {
    background: '#c7f0db',
    backgroundDark: '#6c7b95',
    primary: '#464159',
    secondary: darken('#464159', 60),
    white: '#ffffff',
  },
  {
    background: '#e5e4cc',
    backgroundDark: '#bac7a7',
    primary: '#889e81',
    secondary: '#698474',
    white: '#ffffff',
  },
  {
    background: '#6fb98f',
    backgroundDark: '#2c7873',
    primary: '#004445',
    secondary: darken('#004445', 42),
    white: '#ffffff',
  },
  {
    background: '#d7c79e',
    backgroundDark: '#e08f62',
    primary: '#a35638',
    secondary: darken('#a35638', 42),
    white: '#ffffff',
  },
  {
    background: '#d597ce',
    backgroundDark: '#745c97',
    primary: '#39375b',
    secondary: darken('#39375b', 42),
    white: '#ffffff',
  },
  {
    background: '#eafbea',
    backgroundDark: '#6f9a8d',
    primary: '#1f6650',
    secondary: darken('#1f6650', 42),
    white: '#ffffff',
  },
  {
    background: '#dfcdc3',
    backgroundDark: '#5f6769',
    primary: '#719192',
    secondary: darken('#719192', 42),
    white: '#ffffff',
  },
  {
    background: '#42b883',
    backgroundDark: '#347474',
    primary: '#35495e',
    secondary: darken('#35495e', 42),
    white: '#ffffff',
  },
  {
    background: '#4d4545',
    backgroundDark: '#393232',
    primary: '#ed8d8d',
    secondary: darken('#ed8d8d', 42),
    white: '#ffffff',
  },
]

// const randomPalette = (): string => {
//   const index = Math.floor(Math.random() * palettes.length)
//   return palettes[index]
// }

const theme: DefaultTheme = {
  borderRadius: '6px',

  colors: {
    background: '#d8c593',
    backgroundDark: '#708160',
    primary: '#dd7631',
    secondary: invert('#dd7631'),
    white: '#ffffff',
  },
}

export const randomTheme = (): DefaultTheme => {
  const index = Math.floor(Math.random() * palettes.length)
  return { ...theme, colors: { ...palettes[index] } }
}

export { theme }
