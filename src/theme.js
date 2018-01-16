import { theme } from '@hackclub/design-system'
import palx from 'palx'

const primary = '#0069ff'
const palette = palx(primary)

export const greys = {
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff'
}

export const colors = {
  primary,
  ...greys,
  ...palette
}

theme.colors = colors
theme.font = '-apple-system, BlinkMacSystemFont, Roboto, sans-serif'

export default theme
