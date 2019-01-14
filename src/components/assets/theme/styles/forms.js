import { css } from 'styled-components';
import { pxToRem } from '../../utils';
import { hexToRgb } from '../../utils/helpers';

export default css`
  width: 100%;
  font-size: ${pxToRem(15)}em;

  label,
  fieldset {
    font-weight: 600;
    color: ${props => props.theme.secondaryColor};
    line-height: 2;
    display: block;
  }

  fieldset {
    padding: 0;
  }

  legend {
    line-height: 1.2;
    margin-bottom: 0.3em;
    padding-top: 0.4rem;
  }

  label {
    margin-bottom: 2em;
  }

  input:not([type='checkbox']),
  input:not([type='radio']),
  textarea,
  select {
    border-radius: 3px;
    color: ${props => props.theme.bgColor};
    background: rgba(${props => hexToRgb(props.theme.primaryColor)}, 0.9);
    font-weight: 400;
    border: 1px solid ${props => props.theme.secondaryColor};
    outline: 0;
    padding: 0.6em 0.8em;
    width: 100%;
    box-shadow: none;
    transition: box-shadow 0.25s ease-in;

    &:focus {
      box-shadow: inset 0 0 3px
        rgba(${props => hexToRgb(props.theme.highlightColorInverted)}, 0.6);
      background: ${props => props.theme.primaryColor};
      transition-timing-function: ease-out;
    }
  }

  input,
  select {
    line-height: 1.1;
  }

  .custom-input-style {
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: ${props => props.theme.bgColor};
    font-weight: 600;
    cursor: pointer;

    &:before {
      content: '';
      display: inline-block;
      margin-right: 1em;
      width: 2.4em;
      height: 2.4em;
      border-radius: 4px;
      border: 1px solid ${props => props.theme.secondaryColor};
      color: inherit;
      background: ${props => props.theme.bgColorSecondary};
      box-shadow: none;
      transition-property: color, border-width, box-shadow;
      transition-duration: 0.125s;
      transition-timing-function: ease-in;
    }

    &:after {
      color: ${props => props.theme.bgColor};
      position: absolute;
      left: 0.7em;
      top: 0.775em;
      transform: scale(0);
      transition: transform 0.25s ease-in;
    }

    &[data-check] {
      &:before {
        content: attr(data-check);
        text-align: center;
        font-weight: 600;
        color: ${props => props.theme.bgColor};
        border-width: 2px;
      }

      &:after {
        content: none;
        display: none;
      }
    }
  }

  input[type='checkbox'],
  input[type='radio'] {
    position: absolute;
    left: -9999px;

    &:focus:not(:checked) {
      + .custom-input-style:before {
        box-shadow: inset 0 0 3px
          rgba(${props => hexToRgb(props.theme.highlightColorInverted)}, 0.6);
        background: ${props => props.theme.primaryColor};
        transition-timing-function: ease-out;
      }
    }

    &:checked {
      + .custom-input-style {
        &:before {
          border-color: ${props => props.theme.highlightColorInverted};
          background: ${props => props.theme.primaryColor};
          border-width: 2px;
          transition-timing-function: ease-out;
        }
        &:after {
          transform: scale(1);
          transition-timing-function: ease-out;
        }
      }
    }
    &:disabled {
      + .custom-input-style {
        opacity: 0.666;
        cursor: default;
      }
    }
  }

  .error-msg {
    color: ${props => props.theme.errorColor};
    position: absolute;
  }

  input[type='checkbox'] {
    + .custom-input-style {
      &:before {
      }
      &:not([data-check]):after {
        ${props => props.theme.getIcon('check')};
      }
    }
  }

  input[type='radio'] {
    + .custom-input-style {
      &:before {
      }
      &:not([data-check]):after {
        ${props => props.theme.getIcon('caret')};
      }
    }
  }

  textarea {
    line-height: 1.4;
  }
`;
