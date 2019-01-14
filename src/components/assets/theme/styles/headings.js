import { css } from 'styled-components';
import { mq, pxToRem } from '../../../assets';
import { headingLineHeight } from '../typography';

export default {
  base: `
    -webkit-font-smoothing: antialiased;
    font-weight: 600;
    letter-spacing: 0;
    word-break: break-word;
    hyphens: auto;
  `,
  h1: css`
    font-size: ${pxToRem(50)}rem;
    line-height: ${headingLineHeight};

    ${mq(768)(css`
      font-size: ${pxToRem(90)}rem;
    `)};
  `,
  h2: css`
    font-size: ${pxToRem(34)}rem;
    line-height: 1.1;

    ${mq(768)(css`
      font-size: ${pxToRem(50)}rem;
    `)};
  `,
  h3: css`
    font-size: ${pxToRem(24)}rem;
    line-height: 1.1;

    ${mq(768)(css`
      font-size: ${pxToRem(36)}rem;
    `)};
  `,
  h4: css`
    font-size: ${pxToRem(19)}rem;
    line-height: 1.26;

    ${mq(768)(css`
      font-size: ${pxToRem(24)}rem;
    `)};
  `,
  h5: css`
    font-size: ${pxToRem(17)}rem;
    line-height: 1.58;

    ${mq(768)(css`
      font-size: ${pxToRem(19)}rem;
    `)};
  `,
  h6: `
    font-size: ${pxToRem(15)}rem;
    letter-spacing: ${pxToRem(0.5)}rem;
    line-height: 1.4;
  `,
};
