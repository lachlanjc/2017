import React, { Fragment } from 'react'
import { Provider, Container, Box, Flex, Heading, Text } from 'rebass'
import styled from 'styled-components'
import theme, { colors, mx } from './theme'

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
      color: ${colors.primary};
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
    color: ${colors.primary};
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
      color: ${colors.smoke};
    }
    p { margin: .5rem 0; }
  }

  ${mx[1]} {
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
  background-color: ${props => props.theme.colors.blue[6]};
  background-image: linear-gradient(
    16deg,
    ${props => props.theme.colors.cyan[6]},
    ${props => props.theme.colors.lime[6]},
    ${props => props.theme.colors.yellow[6]},
    ${props => props.theme.colors.orange[6]},
    ${props => props.theme.colors.red[6]}
  );
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

const Footer = Box.extend.attrs({
  is: 'footer',
  color: 'slate',
  bg: 'smoke',
  f: 2,
  pt: 4,
  pb: 5
})`text-align: center;`

export default () => (
  <Fragment>
    <title>2017 in Review – @lachlanjc</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <Provider theme={theme}>
      <Header>
        <Container maxWidth={48 * 16}>
          <Heading is="h1" f={[6, 7]}>
            2017 in Review
          </Heading>
          <Heading f={[3, 4]}>
            <em>Lachlan Campbell – @lachlanjc</em>
          </Heading>
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
      <Footer>Made with ♥️ by Lachlan Campbell, 2017.</Footer>
    </Provider>
  </Fragment>
)

const css = `
*{box-sizing:border-box}body{line-height:1.5;margin:0}a{color:${colors.primary}}
@font-face{font-family:Slack-Averta;font-style:normal;font-weight:400;src:url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-regular.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-regular.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Averta;font-style:normal;font-weight:700;src:url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-bold.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-bold.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Averta;font-style:normal;font-weight:900;src:url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-black.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-black.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Averta;font-style:italic;font-weight:400;src:url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-regular-italic.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/averta/averta-regular-italic.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Tiempos;font-style:normal;font-weight:400;src:url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-headline/tiempos-headline-regular.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-headline/tiempos-headline-regular.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Tiempos;font-style:italic;font-weight:400;src:url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-text/tiempos-text-regular-italic.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-text/tiempos-text-regular-italic.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Tiempos;font-style:normal;font-weight:500;src:url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-headline/tiempos-headline-semibold.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-headline/tiempos-headline-semibold.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Tiempos;font-style:italic;font-weight:500;src:url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-text/tiempos-text-semibold-italic.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-text/tiempos-text-semibold-italic.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
@font-face{font-family:Slack-Tiempos;font-style:normal;font-weight:700;src:url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-headline/tiempos-headline-bold.woff2) format('woff2'),url(https://a.slack-edge.com/436da/marketing/fonts/tiempos-headline/tiempos-headline-bold.woff) format('woff');unicode-range:U+0000-F8FE,U+F900-FFFF}
`
