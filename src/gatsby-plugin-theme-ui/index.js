import { toTheme } from '@theme-ui/typography';
import typography from 'typography-theme-wordpress-2016';
import merge from 'deepmerge';
import nightOwl from '@theme-ui/prism/presets/night-owl.json';

const typographyTheme = toTheme(typography);

const innerMargin = 85;
const content = 420;

const darkerBlue = '#0f8f5e';
const lightBlue = '#aaf6d9';
const lighterBlue = '#ebfcf6';

const theme = merge.all([
  typographyTheme,
  {
    fonts: {
      body:
        'Inter UI,-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica,Arial,sans-serif',
      heading:
        'Inter UI,-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica,Arial,sans-serif',
    },
    styles: {
      pre: {
        variant: `prism`,
        fontFamily: `monospace`,
        tabSize: 2,
        hyphens: `none`,
        overflow: `auto`,
        borderRadius: 10,
        p: 0,
        pl: 2,
        color: 'text',
        backgroundColor: 'background',
        marginBottom: '28px',
        whiteSpace: 'pre-wrap',
        fontSize: '15px',
      },
      code: {
        fontFamily: `monospace`,
        fontSize: `inherit`,
        ...nightOwl,
      },
      blockquote: {
        color: `inherit`,
        borderLeftColor: `inherit`,
        opacity: 0.5,
        '&.translation': {
          fontSize: `1em`,
        },
        paddingLeft: '28px',
      },
      waves: {
        default: {
          Wave: {
            width: ['100%', '960px'],
            marginTop: '40px',
            marginLeft: [0, 'calc(50% - 480px)'],
            marginBottom: '40px',
            position: 'relative',
            display: ['block', 'flex'],
          },
          ScrollerContainer: {
            flex: 1,
            paddingLeft: [0, '50px'],
            paddingTop: ['50px', 0],
          },
          ScrollerStep: {
            position: 'relative',
            padding: [0, '0 10px'],
            minHeight: '250px',
            display: 'flex',
            alignItems: 'center',
            borderLeft: ['none', '3px solid transparent'],
          },
          ScrollerProgress: {
            backgroundColor: '#a9a9b3',
            position: 'absolute',
            left: ['-12px', '-3px'],
          },
          StickerContainer: {
            width: ['100vw', '50%'],
            marginLeft: ['calc(50% - 50vw)', 0],
            position: ['sticky', 'static'],
            top: [0, 'auto'],
            zIndex: [1, 'auto'],
            height: ['50vh', 'auto'],
          },
          Sticker: {
            position: ['static', 'sticky'],
            width: '100%',
            height: ['100%', '60vh'],
            top: ['auto', '20vh'],
            border: ['none', '1px solid'],
            borderColor: 'secondary',
          },
          // this is used to select the active scroller step
          // 0.5 selects the step that is at half the screen height
          // 0.7 the step that is at 70% the screen height
          focus: [0.7, 0.5],
        },
      },
      CodeSurfer: {
        pre: {
          color: 'lightText',
          backgroundColor: 'darkBackground',
        },
        code: {
          color: 'lightText',
          backgroundColor: 'darkBackground',
        },
        tokens: {
          'comment cdata doctype': {
            fontStyle: 'italic',
          },
          'builtin changed keyword punctuation operator tag deleted string attr-value char number inserted': {
            color: lightBlue,
          },
        },
      },
    },
  },
]);

// theme.breakpoints = ['1000px'];

// theme.prism = {
//   '.builtin, .changed, .keyword, .punctuation, .operator, .tag, .deleted, .string, .attr-value, .char, .number, .inserted': {
//     color: '#0f8f5e',
//   },
//   '.comment, .cdata, .doctype': {
//     fontStyle: 'italic',
//   },
// };

export default theme;
