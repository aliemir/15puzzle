import { testables } from './color'

describe('color functions runs as expected', () => {
  const { hex2rgb, rgb2hex, lightenDarken, invert, lighten, darken } = testables
  it('hex2rgb runs correctly', () => {
    expect(hex2rgb('#FFFFFF')).toEqual([255, 255, 255])
    expect(hex2rgb('7C0C2C')).toEqual([124, 12, 44])
  })
  it('rgb2hex runs correctly', () => {
    expect(rgb2hex(124, 12, 44)).toEqual('#7C0C2C')
    expect(rgb2hex(255, 255, 255)).toEqual('#FFFFFF')
  })
  it('lightenDarken runs correctly', () => {
    expect(lightenDarken('#7C0C2C', 20)).toEqual('#902040')
    expect(lightenDarken('#7C0C2C', -20)).toEqual('#680018')
  })
  it('invert runs correctly', () => {
    expect(invert('#FFFFFF')).toEqual('#000000')
    expect(invert('#7C0C2C')).toEqual('#83F3D3')
  })
  it('lighten runs correctly', () => {
    expect(lighten('#7C0C2C', 20)).toEqual('#902040')
    expect(lighten('#FFFFFF', 20)).toEqual('#FFFFFF')
  })
  it('darken runs correctly', () => {
    expect(darken('#7C0C2C', 20)).toEqual('#680018')
    expect(darken('#000000', 20)).toEqual('#000000')
  })
})
