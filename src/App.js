import React, { Fragment } from 'react'
import { Box, Flex, Heading, Text, mediaQueries } from '@hackclub/design-system'
import ThemeProvider from './ThemeProvider'
import theme, { colors } from './theme'
import styled from 'styled-components'

const Article = Box.withComponent('article').extend`
  max-width: 48rem;
  margin: auto;
  padding: 1rem;

  > p {
    font-size: 1.25rem;
    line-height: 1.75;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @supports (-webkit-initial-letter: 2) {
    .first_letter:first-letter {
      -webkit-initial-letter: 2;
      color: ${props => props.theme.colors.primary};
      font-weight: bold;
      font-style: italic;
      padding-right: 0.75rem;
    }
  }

  a {
    color: ${props => props.theme.colors.primary};
  }

  img {
    width: 100%;
  }

  h2,
  blockquote {
    font-style: italic;
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
    em {
      font-style: normal;
    }
  }
  blockquote {
    position: relative;
    p {
      margin: 0.5rem 0;
    }
    :before {
      content: '“';
      left: -3rem;
      top: -0.5rem;
      font-size: 4rem;
      position: absolute;
      line-height: 1;
      color: ${props => props.theme.colors.smoke};
      ${mediaQueries[1]} {
        left: -4rem;
        top: -1rem;
        font-size: 6rem;
      }
    }
  }

  figure {
    display: grid;
    grid-gap: 1rem;
    margin: 1rem -1rem;
    ${mediaQueries[1]} {
      margin: 2rem -4rem;
    }
    ${mediaQueries[2]} {
      &.multiple {
        margin: 3rem -12rem;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(512px, 1fr));
      }
      .portrait {
        grid-row: 1 / span 2;
      }
    }
  }
`

const Slide = Flex.withComponent('section').extend.attrs({
  align: 'center',
  justify: 'center',
  color: 'white',
  p: [2, 3, 4]
})`
  height: 50vh;
  max-height: 100vh;
  h1 {
    font-weight: 800;
    line-height: 1.125;
  }
`
const Header = Slide.withComponent('header').extend`
  min-height: 80vh;
  background-image: url(header.jpg);
  background-size: cover;
  background-position: center;
  text-shadow: 0 .125rem .5rem rgba(0,0,0,.25);
  div {
    background-color: rgba(0, 0, 0, .125);
    box-shadow: 0 0 2rem 2rem rgba(0, 0, 0, .125);
    border-radius: 8rem;
  }
`
const Season = Slide.extend`
  text-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.25);
  min-height: 20vh !important;
  max-height: 33vh !important;
`
const Spring = Season.extend`
  background-color: ${props => props.theme.colors.green[6]};
  background-image: linear-gradient(
    -32deg,
    ${props => props.theme.colors.teal[6]},
    ${props => props.theme.colors.green[7]}
  );
`
const Summer = Season.extend`
  background-color: ${props => props.theme.colors.orange[6]};
  background-image: linear-gradient(
    -32deg,
    ${props => props.theme.colors.yellow[5]},
    ${props => props.theme.colors.orange[6]}
  );
`
const Fall = Season.extend`
  background-color: ${props => props.theme.colors.red[6]};
  background-image: linear-gradient(
    -32deg,
    ${props => props.theme.colors.orange[5]},
    ${props => props.theme.colors.red[6]}
  );
`
const Winter = Season.extend`
  background-color: ${props => props.theme.colors.blue[6]};
  background-image: linear-gradient(
    -32deg,
    ${props => props.theme.colors.cyan[5]},
    ${props => props.theme.colors.blue[6]}
  );
`

const Footer = Box.withComponent('footer')

export default () => (
  <ThemeProvider>
    <Header>
      <Container maxWidth={36} px={2}>
        <Heading.h1 f={[6, 7]} mb={2}>
          2017 in Review
        </Heading.h1>
        <Heading.h2 f={[3, 4]} style={{ fontWeight: 'normal' }}>
          Lachlan Campbell – @lachlanjc
        </Heading.h2>
      </Container>
    </Header>

    <Article py={[4, 5]}>
      <p />
    </Article>

    <Spring>
      <Heading.h1 f={6}>Spring</Heading.h1>
    </Spring>
    <Article>
      <p />
    </Article>

    <Summer>
      <Heading.h1 f={6}>Summer</Heading.h1>
    </Summer>
    <Article>
      <p />
    </Article>

    <Fall>
      <Heading.h1 f={6}>Fall</Heading.h1>
    </Fall>
    <Article>
      <p />
    </Article>

    <Winter>
      <Heading.h1 f={6}>Winter</Heading.h1>
    </Winter>
    <Article>
      <p />
    </Article>

    <Footer color="slate" bg="smoke" align="center" f={2} pt={4} pb={5}>
      Made with ♥️ by Lachlan Campbell.
    </Footer>
  </ThemeProvider>
)
