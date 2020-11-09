import { css, Global } from '@emotion/core';
import React from 'react';
import Fonts from './Fonts';
import OverridePrism from './OverridePrism';
import { theme } from './styled';

console.log('theme.lightBackground', theme.lightBackground);

export default function GlobalStyles() {
  console.log('theme.lightBackground', theme.lightBackground);
  return (
    <>
      <Fonts />
      <OverridePrism />
      <Global
        styles={css`
          html {
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            margin: 0;
            padding: 0;
            font-family: 'Inter UI', -apple-system, BlinkMacSystemFont, 'Roboto',
              'Segoe UI', Helvetica, Arial, sans-serif;
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.54;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            font-feature-settings: 'liga', 'tnum', 'case', 'calt', 'zero',
              'ss01', 'locl';
            -webkit-overflow-scrolling: touch;
            -webkit-text-size-adjust: 100%;

            @media (max-width: 684px) {
              font-size: 1rem;
            }

            background-color: ${theme.darkBackground} !important;
            color: ${theme.darkColor} !important;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            display: flex;
            align-items: center;
            line-height: 1.3;
          }

          h1 {
            font-size: 2.625rem;
          }

          h2 {
            font-size: 1.625rem;
          }

          h3 {
            font-size: 1.375rem;
          }

          h4 {
            font-size: 1.125rem;
          }

          @media (max-width: 684px) {
            h1 {
              font-size: 2rem;
            }

            h2 {
              font-size: 1.4rem;
            }

            h3 {
              font-size: 1.15rem;
            }

            h4 {
              font-size: 1.125rem;
            }
          }

          a {
            color: inherit;
          }

          img {
            display: block;
            max-width: 100%;

            &.left {
              margin-right: auto;
            }

            &.center {
              margin-left: auto;
              margin-right: auto;
            }

            &.right {
              margin-left: auto;
            }
          }

          figure {
            display: table;
            max-width: 100%;
            margin: 25px 0;

            &.left {
              margin-right: auto;
            }

            &.center {
              margin-left: auto;
              margin-right: auto;
            }

            &.right {
              margin-left: auto;
            }

            figcaption {
              font-size: 14px;
              margin-top: 5px;
              opacity: 0.8;

              &.left {
                text-align: left;
              }

              &.center {
                text-align: center;
              }

              &.right {
                text-align: right;
              }
            }
          }

          code {
            font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
            font-feature-settings: normal;
            font-weight: normal;
            background: ${theme.lightBackgroundSecondary};
            padding: 1px 6px;
            margin: 0 2px;
            border-radius: 5px;
            font-size: 0.9rem;
            background: ${theme.darkBackgroundSecondary};
          }

          pre {
            background: #1a1a1d;
            padding: 20px;
            border-radius: 8px;
            font-size: 0.9rem;
            overflow: auto;

            @media (max-width: 684px) {
              white-space: pre-wrap;
              word-wrap: break-word;
            }

            code {
              background: none !important;
              color: #ccc;
              margin: 0;
              padding: 0;
              font-size: 0.9rem;
            }
          }

          blockquote {
            border-left: 2px solid;
            margin: 40px;
            padding: 10px 20px;

            @media (max-width: 684px) {
              margin: 10px;
              padding: 10px;
            }

            p:first-of-type {
              margin-top: 0;
            }

            p:last-of-type {
              margin-bottom: 0;
            }
          }

          table {
            table-layout: fixed;
            border-collapse: collapse;
            width: 100%;
            margin: 40px 0;
            border-radius: 5px;
          }

          table,
          th,
          td {
            border: 1px solid ${theme.lightColor};
            padding: 10px;
            border-color: ${theme.darkColor};
          }

          th {
            background: ${theme.lightBackgroundSecondary};
            background: ${theme.darkBackgroundSecondary};
          }

          ul,
          ol {
            margin-left: 40px;
            padding: 0;

            @media (max-width: 684px) {
              margin-left: 20px;
            }
          }

          ol ol {
            list-style-type: lower-alpha;
          }

          button,
          input,
          textarea {
            font-family: 'Inter UI', -apple-system, BlinkMacSystemFont, 'Roboto',
              'Segoe UI', Helvetica, Arial, sans-serif;
          }

          hr {
            width: 100%;
            border: none;
            background: ${theme.lightBorderColor};
            height: 1px;
            background: ${theme.darkBorderColor};
          }

          .hidden {
            display: none;
          }

          .embedVideo-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;

            iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: 0;
            }
          }

          footer {
            font-size: 1rem;
            text-align: center;
            margin-bottom: 50px;

            @media (max-width: 684px) {
              display: flex;
              flex-direction: column;
            }

            .footerCopyrights {
              &:not(:first-of-type) {
                margin-left: 20px;
                padding-left: 20px;
                border-left: 1px solid;

                @media (max-width: 684px) {
                  margin: 0;
                  padding: 0;
                  border: none;
                }
              }
            }
          }
        `}
      />
    </>
  );
}
