import { injectGlobal } from 'styled-components';
import {
  fontSizeBase,
  lineHeight,
  fontFamily,
  fontWeight,
} from '../theme/typography';

const setBaseCss = config => {
  if (config.disableCss) {
    return;
  }
  // eslint-disable-next-line
  injectGlobal`
    html {
      font-size: ${config.fontSizeBase}px;
      font-family: ${fontFamily};
      line-height: ${lineHeight};
      font-weight: ${fontWeight};
    }
  `;
};

const INITIAL_STATE = {
  fontSizeBase,
  disableCss: false,
};
const themeConfig = {
  config: INITIAL_STATE,
  commonTheme: {},
  customThemes: {},
  updateConfig: function(newConf) {
    this.config = Object.assign({}, this.config, newConf);
    setBaseCss(this.config);
  },
  updateTheme: function(newCommon) {
    this.commonTheme = Object.assign({}, this.commonTheme, newCommon);
  },
  resetState: function() {
    this.config = INITIAL_STATE;
    this.commonTheme = {};
    this.customThemes = {};
  },
  init: function(initWith) {
    this.resetState();
    if (initWith) {
      this.updateConfig(initWith);
    } else {
      setBaseCss(this.config);
    }
    // Init as a function makes it possible to override common theme properties altogether if needed.
    const commonTheme = require('../theme/common').default;
    this.updateTheme(commonTheme);
  },
  setup: function(commonThemeAdditions, configAdditions, customThemes) {
    if (commonThemeAdditions) {
      this.updateTheme(commonThemeAdditions);
    }
    if (configAdditions) {
      this.updateConfig(configAdditions);
    }
    if (customThemes) {
      this.customThemes = customThemes;
    }
  },
  getConfig: function() {
    return this.config;
  },
  getCommonTheme: function() {
    return this.commonTheme;
  },
  getFontSizeBase: function() {
    return this.config.fontSizeBase;
  },
  getCustomThemes: function() {
    return this.customThemes;
  },
};

export const initThemeConfig = args => themeConfig.init(args);
export const setupThemeConfig = (...args) => themeConfig.setup(...args);
export const getFontSizeBase = () => themeConfig.getFontSizeBase();
export const getCommonTheme = () => themeConfig.getCommonTheme();
export const getCustomThemes = () => themeConfig.getCustomThemes();
export const pxToRem = (size, customBase) =>
  size / (customBase || themeConfig.getFontSizeBase());
