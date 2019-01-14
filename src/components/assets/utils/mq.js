import { css } from 'styled-components';
import { pxToRem } from './';

export const mq = size => styles => css`
  @media (min-width: ${pxToRem(size, 16)}em) {
    ${styles};
  }
`;

export const maxMq = size => styles => css`
  @media (max-width: ${pxToRem(size - 1, 16)}em) {
    ${styles};
  }
`;
