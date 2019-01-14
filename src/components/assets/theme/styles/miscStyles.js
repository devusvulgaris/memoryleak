import { css } from 'styled-components';
import { pxToRem } from '../../utils';

/*
  * USE these WMODs if some important browser needs 'em
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(57,57,57, 0.3)), color-stop(20%, rgba(45,45,45, 0.6)));
  background: -webkit-linear-gradient(90deg, rgba(45,45,45, 0.6) 0%, rgba(57,57,57, 0.3) 20%);
  background: -o-linear-gradient(90deg, rgba(45,45,45, 0.6) 0%, rgba(57,57,57, 0.3) 20%);
  background: -ms-linear-gradient(90deg, rgba(45,45,45, 0.6) 0%, rgba(57,57,57, 0.3) 20%);
*/
export const imageOverlay = `
  &:before {
    content: '';
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    background: linear-gradient(0deg, rgba(45,45,45, 0.6) 0%, rgba(57,57,57, 0.3) 20%);
  }
`;

export const tagStyle = css`
  display: inline-block;
  text-transform: uppercase;
  line-height: 1;
  padding: 0.3em 1.15em;
  font-size: ${pxToRem(12)}em;
  font-weight: 600;
  letter-spacing: 1px;
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.bgColor};

  a& {
    transition-property: background, color;
    transition-timing-function: ease-in;
    transition-duration: 0.125s;
    &:hover,
    &:focus {
      transition-timing-function: ease-out;
      background: ${props => props.theme.highlightColor};
      color: ${props => props.theme.highlightColorInverted};
    }
  }
`;
