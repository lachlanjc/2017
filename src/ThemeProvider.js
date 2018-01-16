import React, { Fragment } from 'react'
import { ThemeProvider as Root, injectGlobal } from 'styled-components'
import theme from './theme'

injectGlobal`
  body {
    font-family: ${theme.font} !important;
    line-height: 1.5;
  }
`

const ThemeProvider = props => (
  <Root
    theme={theme}
    {...props}
    children={<Fragment>{props.children}</Fragment>}
  />
)

export default ThemeProvider
