import { css } from 'styled-components';
import headingStyles from './headings';
import buttonStyles from './buttons';
import { textSize } from '../typography';
import { pxToRem } from '../../utils';
import { mq } from '../../../assets';
import * as c from '../colors';

export default css`
  font-size: ${pxToRem(textSize)}em;
  font-weight: 300;

  &:after {
    content: '';
    clear: both;
    display: table;
  }

  ${mq(1025)(css`
    &[data-dynamic-size] {
      font-size: ${pxToRem(textSize + 2)}em;
    }
  `)};

  h1,
  h2,
  h3,
  h4,
  h5 {
    ${headingStyles.base};
  }

  h1 {
    ${headingStyles.h2};
  }

  h2 {
    ${headingStyles.h3};
  }

  h3 {
    ${headingStyles.h4};
  }

  h4 {
    ${headingStyles.h5};
  }

  h5 {
    ${headingStyles.h6};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    padding-top: 1em;
    margin-bottom: 0.625em;
  }

  p,
  li {
    color: ${c.black};
    line-height: 1.733;
  }

  p,
  ul,
  ol {
    margin-bottom: 1.5em;
  }

  a:not(.motley-button) {
    color: ${props => props.theme.linkColor};
    display: inline;
    box-shadow: inset 0 -0.125em 0 0 ${props => props.theme.linkColorAlt};
    padding-bottom: 0.1em;
    transition: box-shadow 0.15s ease-in;
    z-index: 1;

    &:hover,
    &:active {
      transition-timing-function: ease-out;
      box-shadow: inset 0 -0.125em 0 0 ${props => props.theme.linkColor};
    }

    &:active {
      text-shadow: 0 0 rgba(0, 0, 0, 0.333);
    }
  }

  .motley-button {
    ${buttonStyles.base};
    ${buttonStyles.primary};
  }

  em,
  i {
    font-style: italic;
  }

  strong,
  b {
    font-weight: 700;
  }

  ul,
  ol {
    margin-left: 1.75em;
  }

  ul {
    list-style: outside disc;
  }

  ol {
    list-style: outside decimal;
  }

  li {
    margin-bottom: 0.125em;
    padding-left: 0.25em;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  iframe {
    width: 100%;
  }

  figure {
    margin: 0 auto;
    max-width: 100%;
  }

  blockquote {
    font-weight: 600;
    font-size: 1.2em;
    margin: 0 0 2em calc(1.75em + 4%);
    padding: 2em 0 0;
    max-width: 520px;
    text-align: left;

    &:before {
      content: '';
      display: inline-block;
      height: 1.875em;
      width: 0.925em;
      color: ${props => props.theme.highlightColor};
      background: currentColor;
      box-shadow: -1.325em 0em 0 0 currentColor;
      transform: skewX(-15deg);
    }

    p {
      line-height: 1.4;
    }

    p:not(:last-child) {
      margin-bottom: 0;
    }
  }

  ${mq(600)`
    blockquote {
      &:before {
        float: left;
      }

      p {
        margin-left: 2em;
      }
    }
  `};

  .alignleft {
    margin-left: 0;
  }

  .alignright {
    margin-right: 0;
  }

  p {
    img {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }

    .alignleft {
      float: left;
      margin-right: 1rem;
    }

    .aligncenter {
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 1rem;
    }
  }

  .size-full {
    width: 100%;
  }

  figure {
    a {
      width: 100%;
    }
  }

  .wp-video {
    position: relative;
    width: 100% !important;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    video {
      position: absolute;
      height: 100%;
      width: 100%;
    }
  }

  &.video-wrapper {
    p {
      position: relative;

      &:after {
        content: '';
        display: block;
        padding-bottom: 56.25%;
      }
    }

    iframe {
      position: absolute;
      height: 100%;
    }
  }

  figcaption {
    color: ${c.captionColor};
    font-weight: 200;
    text-align: center;
    padding: 1rem 1rem 0;
  }

  table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1.5em;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: ${pxToRem(textSize - 2)}rem;

    td,
    th {
      border-bottom: 1px solid ${c.borderColor};
      vertical-align: top;
      padding: 1.35em 1em;
    }

    td {
      text-align: right;

      &:first-child {
        text-align: left;
      }
      &:nth-last-child(n + 3) ~ td {
        text-align: left;
      }
    }

    thead {
      background: ${props => props.theme.primaryColor};
      color: ${props => props.theme.bgColor};
      font-weight: 600;
      text-align: left;

      th {
        vertical-align: bottom;
      }
    }
  }
`;
