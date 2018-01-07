import React from 'react'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from './theme'

export const Base = styled.main`
  font-family: ${props => props.theme.font};
  line-height: 1.6;
  * {
    box-sizing: border-box;
  }
`

const ThemeProvider = props => (
  <StyledThemeProvider theme={theme}>
    <Base id="hello" {...props} />
  </StyledThemeProvider>
)

export default ThemeProvider
