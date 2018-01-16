const { createElement: h } = require('react')
const theme = require('./theme').default

const width = 512

module.exports = props =>
  h(
    'main',
    {
      style: {
        boxSizing: 'border-box',
        width,
        height: width,
        backgroundColor: theme.colors.primary,
        backgroundImage: `linear-gradient(
          128deg,
          ${theme.colors.primary},
          ${theme.colors.indigo[4]}
        )`,
        padding: 48
      }
    },
    h(
      'div',
      {
        style: {
          fontFamily: `"Avenir Next", ${theme.font}`,
          fontSize: width / 2,
          fontWeight: '700',
          color: theme.colors.white,
          wordBreak: 'break-all',
          lineHeight: '0.875',
          textAlign: 'center'
        }
      },
      [
        20,
        h(
          'span',
          {
            style: {
              fontStyle: 'italic',
              fontWeight: '900',
              letterSpacing: '-.08em',
              position: 'relative',
              left: '-.08em'
            }
          },
          17
        )
      ]
    )
  )
