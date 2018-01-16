import React, { Fragment } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Container,
  mediaQueries
} from '@hackclub/design-system'
import ThemeProvider from './ThemeProvider'
import theme, { colors } from './theme'
import styled from 'styled-components'

const Article = Box.withComponent('article').extend`
  max-width: 44rem;
  margin: auto;
  padding: 1rem;

  > p {
    font-size: 1.25rem;
    line-height: 1.75;
    margin-top: 1rem;
    margin-bottom: 1rem;
    &.first {
      font-size: 1.5rem;
    }
    &[data-before] {
      position: relative;
      margin-top: 2rem;
      :before {
        content: attr(data-before);
        left: 0;
        top: -4rem;
        font-size: 3rem;
        position: absolute;
        line-height: 1;
        ${mediaQueries[1]} {
          margin-top: 1rem;
          left: -4rem;
          top: 0;
          font-size: 3rem;
        }
      }
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
  text-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.125);
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
      <Text className="first">
        2017 has been intensely <em>full</em> and 2018 looks even bigger. I’ve
        made an attempt to chronicle some of my more significant adventures
        here, if you’re interested in my life!
      </Text>
    </Article>

    <Spring>
      <Heading.h1 f={6}>Spring</Heading.h1>
    </Spring>
    <Article>
      <p>
        In February I started a club at my high school for teaching students to
        code—run by students, for students. It’s a part of{' '}
        <a href="https://hackclub.com">Hack Club</a>, a network of high school
        coding clubs all around the world. Over about a dozen meetings, over 40
        students came and built their first websites. Hack Club continues to be
        an extremely rewarding side project, and I relaunched it in the fall.
      </p>

      <figure>
        <img src="spring/hackclub.jpg" />
      </figure>

      <p data-before="✈️">
        In March, I won a diversity scholarship from Facebook to go to
        ReactConf. It was my first tech conference and my first time in
        California (San Francisco + Santa Clara). I met Zach Latta, Mark Otto,
        Brian Lovin, Bryn Jackson, Max Stoiber, Chris Lloyd, and the Airbnb
        React team, as well as tons of other attendees at the conference, and
        learned a ton about JavaScript. The trip was ridiculously fun.
      </p>

      <figure className="multiple">
        <img src="spring/sf.jpg" />
        <img src="spring/reactconf.jpg" />
      </figure>

      <p data-before="🌈">
        On a much more personal note—since September 2016 I had been coming to
        the realization that I’m not straight. Though I live in a very
        progressive/accepting place and family, it was nonetheless
        internally-tumultuous for me to share this. Over the spring, I started
        coming out as queer to my parents and friends to their wonderful love
        and support.
      </p>

      <p>
        At the end of the spring, I did lots of coding, turned 16, got my black
        belt in Taekwondo, and finished tenth grade.
      </p>

      <figure className="multiple">
        <img src="spring/birthday.jpg" className="portrait" />
        <img src="spring/tkd.jpg" />
        <img src="spring/mn.jpg" />
      </figure>
    </Article>

    <Summer>
      <Heading.h1 f={6}>Summer</Heading.h1>
    </Summer>
    <Article>
      <p data-before="🏰">
        This year I had hands-down the best summer yet. I moved to Providence,
        RI to attend RISD’s Pre-College program studying industrial design. It
        was my first time living away from home (6 weeks), and the RISD program
        was extremely intense, but it was crazy fun, and I grew enormously as a
        designer and artist. I also went on weekend trips to Provincetown,
        Newport, Block Island, and Boston and met incredible friends (Katie,
        Walter, Bella, Moon, Connor, and so many others).
      </p>
      <figure className="multiple">
        <img src="summer/providence.jpg" />
        <img src="summer/playground.jpg" />
        <img src="summer/lunch.jpg" />
        <img src="summer/class.jpg" />
      </figure>
    </Article>

    <Fall>
      <Heading.h1 f={6}>Fall</Heading.h1>
    </Fall>
    <Article>
      <p>
        In September, I went to PennApps, a massive hackathon in Philadelphia. I
        met three other hackers and in 48 hours made{' '}
        <a href="https://www.blink.care">Blink</a>, a hardware product + website
        that lets locked-in people communicate by blinking Morse code. Building
        the project proved exhilarating, if exhausting, and we’re continuing to
        work on the product.
      </p>

      <figure className="multiple">
        <img src="fall/pennapps_team.jpg" />
        <img src="fall/pennapps_working.jpg" />
      </figure>

      <p>
        During PennApps, <a href="https://zachlatta.com/">Zach Latta</a>, the
        executive director of Hack Club, called because he needed someone to
        redesign Hack Club’s website. I joined the team as a web
        designer-developer soon after, and in a few weeks, shipped an all-new{' '}
        <a href="https://hackclub.com/">hackclub.com</a>! (Like everything we
        do, it’s <a href="https://github.com/hackclub/site">open source</a>.)
        Since then, I’ve continued working on our marketing website, application
        flow, and built a{' '}
        <a href="https://design.hackclub.com">design system</a> for our
        websites. I won the Congressional App Challenge in PA-05 for the new
        site.
      </p>

      <p>
        My learning to code (starting in 2012-13) has been one of the most
        defining processes of my life, as it has given me a creative outlet and
        a real voice. I spent nearly 500 hours coding in 2017, working on dozens
        of projects. This fall, I’ve spent hundreds of hours on Hack Club,
        working to empower thousands of students around the world with the same
        amazing skill I’ve been so privileged to acquire.
      </p>

      <p>
        As a queer, progressive, environmentally-conscious person, the last year
        of US politics has proven disturbing. However, in late September, I
        launched <a href="https://lachlanjc.me/fossilfunded">Fossil Funded</a>,
        a website for seeing the US Congess’ funding from fossil fuel companies
        and making contacting your Representative super simple. (This follows{' '}
        <a href="https://lachlanjc.me/nrafunded">NRA Funded</a>, which I built
        after the devastating mass shooting in Orlando in summer 2016, and{' '}
        <a href="http://www.usecalltoaction.com">Call to Action</a>.) These
        sites are just the start of a far-larger project I’m working on in
        spring 2018, which you will hear about on Twitter :)
      </p>

      <figure>
        <img src="fall/meadow.jpg" />
      </figure>

      <p data-before="🌈">
        I don’t have a long tale to tell here, but more months into my journey
        of discovering my identity, I came out to the people in my life again,
        as non-binary. I use they/them pronouns. Everyone’s been supportive, and
        it’s been awesome.
      </p>
    </Article>

    <Winter>
      <Heading.h1 f={6}>Year in Review</Heading.h1>
    </Winter>
    <Article>
      <p data-before="💕">
        This year I formed a number of deep friendships that have been
        invaluable in keeping me happy and healthy. Shoutout to Ethan, Lena,
        Dan, Ashley, Zoë, Patrick, and all the other wonderful people who
        support and spend time with me.
      </p>

      <p>
        2017 has unquestionably been the most foundational in my life so far.
        Though the year has been, for the most part, happy, you can never know
        what you’ll regret in the future, if the way you spend your time remains
        effective over the long-term, if you’re setting yourself up for failure
        in whatever sense. But while we wait, on we must march. There’s always
        another year waiting.
      </p>
    </Article>

    <Footer color="slate" bg="smoke" align="center" f={2} pt={4} pb={5}>
      Made with ♥️ by Lachlan Campbell
    </Footer>
  </ThemeProvider>
)
