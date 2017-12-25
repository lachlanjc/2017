import palx from 'palx'

const primary = '#0069ff'
const accent = '#ff0069'
const palette = palx(primary)

export const colors = {
  ...palette,
  primary,
  accent,
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  bg: '#f5efe6',
  white: '#ffffff'
}

export const mp = [32, 48, 64, 80]
export const mx = mp.map(w => `@media screen and (min-width:${w}em)`)

const theme = {
  colors,
  font: 'Slack-Averta, -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
  serif: 'Slack-Tiempos, "Times New Roman", Georgia, serif'
}

export default theme
