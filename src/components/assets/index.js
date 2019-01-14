import { initThemeConfig } from './utils';

export { setupThemeConfig, getFontSizeBase, pxToRem } from './utils';
export { hexToRgb } from './utils/helpers';
export { mq, maxMq } from './utils/mq';
export { default as googleMapDefaults } from './utils/googleMap';
export { default as googleMapStyles } from './theme/googleMap';
export { default as getTheme } from './theme';
export { cssFile } from './css/index.css';
export { cssFontsFile } from './css/fonts.css';
export { cssResetFile } from './css/reset.css';
export { cssBaseFile } from './css/base.css';
export { default as colors } from './colors';
export * from './images';

initThemeConfig();
