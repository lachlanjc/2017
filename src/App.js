import React, { Fragment } from 'react'
import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  mediaQueries
} from '@hackclub/design-system'
import ThemeProvider from './ThemeProvider'
import theme, { colors } from './theme'
import styled from 'styled-components'

const Article = Container.extend.attrs({ p: 3 })`
  > p {
    font-size: 1.25rem;
    font-family: ${theme.serif};
    line-height: 1.75;
    margin-top: .5rem;
    margin-bottom: .5rem;
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

  img {
    width: 100%;
  }

  h2, blockquote {
    font-style: italic;
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
    em { font-style: normal; }
    position: relative;
    &:before {
      content: '';
      left: -4rem;
      position: absolute;
      font-size: 6rem;
      line-height: 1;
      color: ${props => props.theme.colors.smoke};
    }
    p { margin: .5rem 0; }
  }

  ${mediaQueries[1]} {
    display: grid;
    grid-template-columns: 1fr 42rem;
    grid-column-gap: 1rem;
    justify-content: center;
    > div {
      grid-column: 2;
      margin: 1rem 0 1rem -8rem;
    }
    > p, > ol {
      grid-column: 2;
    }
    h2, blockquote {
      grid-column: 2;
      margin-left: -8rem;
    }
    img {
      grid-column: 1;
    }
  }
`

const Footnotes = Box.extend.attrs({
  is: 'ol',
  bg: 'smoke',
  color: 'slate',
  px: 4,
  py: 3,
  mx: [null, -4]
})`
  border-radius: .5rem;
  word-break: break-word;
  &:before {
    content: 'Footnotes';
    display: block;
    font-weight: 700;
    letter-spacing: .1em;
    margin-bottom: .25rem;
    text-transform: uppercase;
  }
`

const Slide = Flex.extend.attrs({
  align: 'center',
  justify: 'center',
  color: 'white',
  p: [2, 3, 4]
})`
  height: 50vh;
  max-height: 100vh;
  text-align: center;
  text-shadow: 0 .125rem .5rem rgba(0,0,0,.125);
  h1, h2 { font-weight: 800; }
`
const Header = Slide.extend`
  min-height: 75vh;
  background-image: url(https://user-images.githubusercontent.com/5074763/34448454-82874dd0-ecbb-11e7-99fc-47c5231a290e.JPG);
  background-size: cover;
  background-position: center 66%;
`
const Season = Slide.extend`
  min-height: 25vh !important;
  max-height: 50vh !important;
`
const Spring = Season.extend`
  background-color: ${props => props.theme.colors.green[6]};
  background-image: linear-gradient(
    -32deg,
    ${props => props.theme.colors.lime[5]},
    ${props => props.theme.colors.green[6]}
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
  <Fragment>
    <title>2017 in Review – @lachlanjc</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://gt-america-mjxkcyadka.now.sh/index.css"
    />
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <ThemeProvider>
      <Header>
        <Container maxWidth={48 * 16}>
          <Heading.h1 f={[6, 7]}>2017 in Review</Heading.h1>
          <Heading.h2 f={[3, 4]}>
            <em>Lachlan Campbell – @lachlanjc</em>
          </Heading.h2>
        </Container>
      </Header>

      <Article py={[4, 5]}>
        <blockquote>
          <p>2017 was a crazy year.</p>
        </blockquote>
      </Article>

      <Spring>
        <Heading f={6}>Spring</Heading>
      </Spring>
      <Article>
        <p />
      </Article>

      <Summer>
        <Heading f={6}>Summer</Heading>
      </Summer>
      <Article>
        <p />
      </Article>

      <Fall>
        <Heading f={6}>Fall</Heading>
      </Fall>
      <Article>
        <p />
      </Article>

      <Winter>
        <Heading f={6}>Winter</Heading>
      </Winter>
      <Article>
        <p />
      </Article>
      <Footer color="slate" bg="smoke" align="center" f={2} pt={4} pb={5}>
        Made with ♥️ by Lachlan Campbell, 2017.
      </Footer>
    </ThemeProvider>
  </Fragment>
)

const css = `
*{box-sizing:border-box}body{line-height:1.5;margin:0}a{color:${colors.primary}}
`
