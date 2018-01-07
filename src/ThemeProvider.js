import React from 'react'
import styled, {
  ThemeProvider as StyledThemeProvider,
  injectGlobal
} from 'styled-components'
import theme from './theme'

injectGlobal`
* { box-sizing: border-box; }
body {
  line-height: 1.6;
  margin: 0;
}
`

export const Base = styled.div`
  font-family: ${props => props.theme.font};
  line-height: 1.4;
  * {
    box-sizing: border-box;
  }
`

const ThemeProvider = props => (
  <StyledThemeProvider theme={theme}>
    <Base {...props} />
  </StyledThemeProvider>
)

export default ThemeProvider
