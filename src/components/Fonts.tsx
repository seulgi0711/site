import { css, Global } from '@emotion/core';
import React from 'react';

function Fonts() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Inter UI';
          font-style: normal;
          font-weight: 400;
          src: url('../../static/fonts/Inter-UI-Regular.woff') format('woff');
        }
        @font-face {
          font-family: 'Inter UI';
          font-style: italic;
          font-weight: 400;
          src: url('../../static/fonts/Inter-UI-Italic.woff') format('woff');
        }

        @font-face {
          font-family: 'Inter UI';
          font-style: normal;
          font-weight: 600;
          src: url('../../static/fonts/Inter-UI-Medium.woff') format('woff');
        }
        @font-face {
          font-family: 'Inter UI';
          font-style: italic;
          font-weight: 600;
          src: url('../../static/fonts/Inter-UI-MediumItalic.woff')
            format('woff');
        }

        @font-face {
          font-family: 'Inter UI';
          font-style: normal;
          font-weight: 800;
          src: url('../../static/fonts/Inter-UI-Bold.woff') format('woff');
        }
        @font-face {
          font-family: 'Inter UI';
          font-style: italic;
          font-weight: 800;
          src: url('../../static/fonts/Inter-UI-BoldItalic.woff') format('woff');
        }
      `}
    />
  );
}

export default Fonts;
