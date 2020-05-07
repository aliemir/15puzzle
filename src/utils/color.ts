type LightenDarkenFunction = (color: string, change: number) => string
type InvertColorFunction = (color: string) => string
type HexToRgbFunction = (hex: string) => number[]
type RgbToHexFunction = (r: number, g: number, b: number) => string

const hex2rgb: HexToRgbFunction = (hex) => {
  let hexColor = hex
  if (hexColor[0] === '#') {
    hexColor = hexColor.slice(1)
  }
  return hexColor.match(/.{1,2}/g)?.map((h) => parseInt(h, 16)) ?? [0, 0, 0]
}
const rgb2hex: RgbToHexFunction = (r, g, b) => {
  return `#${(r < 16 ? '0' : '') + r.toString(16).toUpperCase()}${
    (g < 16 ? '0' : '') + g.toString(16).toUpperCase()
  }${(b < 16 ? '0' : '') + b.toString(16).toUpperCase()}`
}

const lightenDarken: LightenDarkenFunction = (color, change) => {
  let rgbColor = color[0] === '#' ? hex2rgb(color.slice(1)) : hex2rgb(color)
  rgbColor = rgbColor.map((n) => {
    let changed = n + change
    if (changed > 255) changed = 255
    else if (changed < 0) changed = 0
    return changed
  })
  return rgb2hex(rgbColor[0], rgbColor[1], rgbColor[2])
}

export const invert: InvertColorFunction = (color) => {
  let hexColor = color
  if (hexColor[0] === '#') {
    hexColor = hexColor.slice(1)
  }
  let rgbColor = hex2rgb(hexColor)
  rgbColor = rgbColor.map((n) => 255 - n)
  return rgb2hex(rgbColor[0], rgbColor[1], rgbColor[2])
}

export const lighten: LightenDarkenFunction = (color, change) => {
  return lightenDarken(color, change)
}

export const darken: LightenDarkenFunction = (color, change) => {
  return lightenDarken(color, change * -1)
}

export const testables = {
  hex2rgb: hex2rgb,
  rgb2hex: rgb2hex,
  lightenDarken: lightenDarken,
  invert: invert,
  lighten: lighten,
  darken: darken,
}
