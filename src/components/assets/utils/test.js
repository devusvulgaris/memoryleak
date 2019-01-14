import {
  initThemeConfig,
  setupThemeConfig,
  getFontSizeBase,
  getCommonTheme,
  getCustomThemes,
  pxToRem,
} from './';
import getTheme from '../theme';
import { fontSizeBase } from '../theme/typography';
import { black } from '../theme/colors';
import commonTheme from '../theme/common';

describe('themeConfig inits', () => {
  it('automatically as default', () => {
    expect(getFontSizeBase()).toEqual(fontSizeBase);
    expect(typeof getTheme()).toEqual('object');
  });

  it('with customs', () => {
    initThemeConfig({ fontSizeBase: 20 });
    expect(getFontSizeBase()).toEqual(20);
  });

  it('resets after another init', () => {
    initThemeConfig({ fontSizeBase: 20 });
    expect(getFontSizeBase()).toEqual(20);
    initThemeConfig();
    expect(getFontSizeBase()).toEqual(fontSizeBase);
  });
});

const commonThemeExtra = { getTestData: () => 'hello world', testVar: 'test' };
const configExtra = { fontSizeBase: 16 };
const customThemes = {
  testTheme: {
    primaryColor: 'hotpink',
  },
};

describe('with initiated themeConfig', () => {
  beforeEach(() => {
    initThemeConfig();
  });
  it('setupThemeConfig by default sets up default themes', () => {
    setupThemeConfig();
    expect(typeof getTheme('primary')).toEqual('object');
    expect(getTheme('primary').primaryColor).toEqual(black);
  });
  it('setupThemeConfig setups config, theme and adds customs themes', () => {
    setupThemeConfig(commonThemeExtra, configExtra, customThemes);
    expect(typeof getTheme()).toEqual('object');
    expect(getTheme().testVar).toEqual('test');
    expect(getTheme().getTestData()).toEqual('hello world');
    expect(getFontSizeBase()).toEqual(16);
    expect(typeof getTheme('testTheme')).toEqual('object');
    expect(getTheme('testTheme').primaryColor).toEqual('hotpink');
  });

  it('getFontSizeBase returns font size', () => {
    expect(getFontSizeBase()).toEqual(fontSizeBase);
  });

  it('getCommonTheme returns common theme', () => {
    expect(getCommonTheme()).toEqual(commonTheme);
  });

  it('getCustomThemes returns custom themes set in setup', () => {
    setupThemeConfig(null, null, customThemes);
    expect(getCustomThemes()).toEqual(customThemes);
  });

  it('pxToRem returns rems based on fontSizeBase', () => {
    expect(typeof pxToRem()).toEqual('number');
    expect(pxToRem(fontSizeBase)).toEqual(1);
    initThemeConfig({ fontSizeBase: 20 });
    expect(pxToRem(20)).toEqual(1);
  });
});
