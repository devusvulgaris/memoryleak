import { css } from 'styled-components';
import { pxToRem } from '../../utils';
import { highlightColor, highlightColorAlt, primaryColor } from '../colors';
import { getIcon } from '../icons';

export default {
  base: css`
    appearance: none;
    -webkit-font-smoothing: antialiased;
    font-size: ${pxToRem(15)}rem;

    &[data-big-button] {
      font-size: ${pxToRem(19)}rem;
    }
    font-weight: 700;
    letter-spacing: 0.5px;
    border-radius: 3px;
    text-align: center;
    padding: 0.5em 1.4em;
    border: 0;
    position: relative;

    transition-property: color, background;
    transition-timing-function: ease-in;
    transition-duration: 0.125s;

    &:hover {
      transition-timing-function: ease-out;
    }

    &:not(button) {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      &:after {
        ${getIcon('caret')};
        font-size: 0.75em;
        margin-left: 0.5em;
      }
    }

    ${props =>
      props.disabled &&
      `
      opacity: 0.2;
      cursor: default;
      pointer-events: none;
    `};
  `,
  primary: css`
    background-color: ${highlightColor};
    color: ${primaryColor};

    &:hover,
    &:active {
      background-color: ${props =>
        props.theme.inverted ? highlightColorAlt : primaryColor};
      color: ${props =>
        props.theme.inverted ? primaryColor : highlightColorAlt};
    }
  `,
  secondary: css`
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};

    &:hover,
    &:active {
      background-color: ${props => props.theme.secondaryColorAlt};
    }

    ${props =>
      props.inverted &&
      `
      background-color: ${props.theme.primaryColor};
      color: ${props.theme.secondaryColor};
    `};
  `,
};
