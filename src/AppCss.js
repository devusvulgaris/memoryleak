import { injectGlobal } from 'styled-components';

// Creates a global stylesheet and adds it to <head>
// Shouldn't preferably be used for anything else than html/body styles
// eslint-disable-next-line
injectGlobal`
 .hui {
  .esri-view {
    position: relative;
    height: 490px;
    max-height: 490px;
    overflow: hidden;
    padding: 0;

    .esri-view-surface--inset-outline:focus:after {
      display: none;
      content: none;
    }

    .esri-popup__main-container {
      max-height: 100%;
      width: 325px;
      left: 50%;
      transform: translateX(-50%);
    }

    .esri-popup__content {
      margin: 0px;
    }

    .esri-popup__header {
      position: absolute;
      z-index: 5;
      min-height: 40px;
      right: 0;
      top: 0;
      width: 100%;
    }

    .esri-icon-close {
      border-radius: 50%;
      background: #FFF;
      text-align: center;
      height: 26px;
      width: 26px;
      flex: 0 0 26px;

      &:before {
        color: #000;
        vertical-align: -29%;
      }
    }

    .esri-attribution,
    .esri-popup__feature-menu,
    .esri-popup__feature-buttons,
    .esri-popup__footer {
      display: none;
    }

    .esri-popup__button {
      &.esri-popup__button--dock {
        display: none;
      }
    }

    .esri-popup__header-container {
      &.esri-popup__header-container--button {
        display: none;
      }
    }
  }

  .map-teaser {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8% 1em 2%;
    color: ${props => props.theme.bgColor};
    min-height: 200px;
    max-height: 200px;

    img {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      min-height: 200px;
      max-height: 200px;
      height: 100%;
      z-index: -1;
    }

    .tagline {
      ${props => props.theme.getStyle('tag')};
      color: ${props => props.theme.primaryColor};
      background: ${props => props.theme.bgColor};
      font-size: 0.85em;
    }

    .title {
      ${props => props.theme.getStyle('headings.base')};
      ${props => props.theme.getStyle('headings.h4')};
      margin: 0 auto 1.5rem;
      padding-top: 0.5rem;
    }

    a {
      ${props => props.theme.getStyle('buttons.base')};
      ${props => props.theme.getStyle('buttons.primary')};
      align-self: center;
      text-decoration: none;
    }
  }
 }
`;
// NOTE: object as hidden is due to resize-aware components using object, which shows up in IE with weird outline/border that can't be disabled apparently.
