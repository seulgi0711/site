import { nightOwl } from '@code-surfer/themes';
import { toTheme } from '@theme-ui/typography';
import merge from 'deepmerge';
import wavesTheme from 'gatsby-theme-waves/src/gatsby-plugin-theme-ui/index';
import typography from 'typography-theme-wordpress-2016';

const typographyTheme = toTheme(typography);

export default merge.all([
  typographyTheme,
  nightOwl,
  wavesTheme,
  {
    colors: {
      primary: '#a9a9b3',
    },
    fonts: {
      body:
        '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif',
      heading:
        '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif',
    },
    styles: {
      blockquote: {
        opacity: 0.5,
        paddingLeft: '28px',
        marginLeft: 0,
      },
      waves: {
        default: {
          Sticker: {
            border: 'none',
          },
        },
      },
    },
  },
  // {
  //   styles: {
  //     waves: {
  //       default: {
  //         Wave: {
  //           width: ['100%', '960px'],
  //           marginTop: '40px',
  //           marginLeft: [0, 'calc(50% - 480px)'],
  //           marginBottom: '40px',
  //           position: 'relative',
  //           display: ['block', 'flex'],
  //         },
  //         ScrollerContainer: {
  //           flex: 1,
  //           paddingLeft: [0, '50px'],
  //           paddingTop: ['50px', 0],
  //         },
  //         ScrollerStep: {
  //           position: 'relative',
  //           padding: [0, '0 10px'],
  //           minHeight: '250px',
  //           display: 'flex',
  //           alignItems: 'center',
  //           borderLeft: ['none', '3px solid transparent'],
  //         },
  //         ScrollerProgress: {
  //           backgroundColor: '#a9a9b3',
  //           position: 'absolute',
  //           left: ['-12px', '-3px'],
  //         },
  //         StickerContainer: {
  //           width: ['100vw', '50%'],
  //           marginLeft: ['calc(50% - 50vw)', 0],
  //           position: ['sticky', 'static'],
  //           top: [0, 'auto'],
  //           zIndex: [1, 'auto'],
  //           height: ['50vh', 'auto'],
  //         },
  //         Sticker: {
  //           position: ['static', 'sticky'],
  //           width: '100%',
  //           height: ['100%', '60vh'],
  //           top: ['auto', '20vh'],
  //           border: ['none', '1px solid'],
  //           // borderColor: 'secondary',
  //         },
  //         // this is used to select the active scroller step
  //         // 0.5 selects the step that is at half the screen height
  //         // 0.7 the step that is at 70% the screen height
  //         focus: [0.7, 0.5],
  //       },
  //     },
  //   },
  // },
]);

// const uiTheme = merge.all([
//   typographyTheme,
//   {
//     colors: {
//       text: theme.darkColor,
//       background: theme.darkBackground,
//     },
//     fonts: {
//       body:
//         'Inter UI,-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica,Arial,sans-serif',
//       heading:
//         'Inter UI,-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica,Arial,sans-serif',
//     },
//     styles: {
//       pre: {
//         variant: `prism`,
//         fontFamily: `monospace`,
//         tabSize: 2,
//         hyphens: `none`,
//         overflow: `auto`,
//         borderRadius: 10,
//         p: 0,
//         pl: 2,
//         color: 'text',
//         backgroundColor: 'background',
//         marginBottom: '28px',
//         whiteSpace: 'pre-wrap',
//         fontSize: '15px',
//       },
//       code: {
//         fontFamily: `monospace`,
//         fontSize: `inherit`,
//         ...nightOwl,
//       },
//       blockquote: {
// color: `inherit`,
// borderLeftColor: `inherit`,
// opacity: 0.5,
// '&.translation': {
//   fontSize: `1em`,
// },
// paddingLeft: '28px',
//       },
//       a: {
//         color: `text`,
//       },
//     },
//   },
// ]);

// // theme.breakpoints = ['1000px'];

// // theme.prism = {
// //   '.builtin, .changed, .keyword, .punctuation, .operator, .tag, .deleted, .string, .attr-value, .char, .number, .inserted': {
// //     color: '#0f8f5e',
// //   },
// //   '.comment, .cdata, .doctype': {
// //     fontStyle: 'italic',
// //   },
// // };

// export default uiTheme;
