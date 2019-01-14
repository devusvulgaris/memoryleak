import { css } from 'styled-components';
import { mq, pxToRem } from '../../';
import { brown } from '../colors';
import { textSizeLarge, textSizeSmall, textSizeLead } from '../typography';

const mobileDecrement = 0.75;
const calcLineHeight = (base, size, mobile = false) =>
  mobile ? base * mobileDecrement / (size * mobileDecrement) : base / size;
const calcFontSize = (size, mobile) =>
  pxToRem(mobile ? size * mobileDecrement : size);

// Ready styles
const textStyles = {
  subtitle: `
    font-weight: 600;
    margin-bottom: .25em;
    color: ${brown};
    line-height: 1;
    letter-spacing: ${pxToRem(0.5)}rem;
  `,
  largeText: `
    font-size: ${pxToRem(textSizeLarge)}rem;
    line-height: ${30 / textSizeLarge};
  `,
  leadText: css`
    &,
    p {
      line-height: ${calcLineHeight(36, textSizeLead, true)};
      font-size: ${calcFontSize(textSizeLead, true)}rem;
      margin-bottom: 1em;
    }

    ${mq(768)(`
      &,
      p {
        line-height: ${calcLineHeight(36, textSizeLead)};
        font-size: ${calcFontSize(textSizeLead)}rem;
      }
    `)};
  `,
  smallText: `
    text-transform: uppercase;
    font-size: ${pxToRem(textSizeSmall)}rem;
    line-height: ${24 / textSizeSmall};
    font-weight: 600;
    letter-spacing: 2px;
    color: inherit;
  `,
  metaText: `
    text-transform: uppercase;
    font-size: ${pxToRem(textSizeSmall)}rem;
    font-weight: 600;
  `,
};

export default textStyles;
