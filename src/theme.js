import { theme } from '@hackclub/design-system'
import palx from 'palx'

const primary = '#0069ff'
const accent = '#ff0069'
const palette = palx(primary)

export const greys = {
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff'
}

export const brand = {
  primary,
  accent,
  success: palette.teal[5],
  info: palette.blue[5],
  warning: palette.orange[5],
  error: palette.red[7],
  muted: greys.silver
}

export const colors = {
  ...brand,
  ...greys,
  ...palette
}

theme.colors = colors
theme.font = '-apple-system, BlinkMacSystemFont, Roboto, sans-serif'

export default theme
