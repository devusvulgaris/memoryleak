import * as colors from './colors';
import { hexToRgb } from '../utils/helpers';
import { getCommonTheme, getCustomThemes } from '../utils';

const primary = {
  primaryColor: colors.primaryColor,
  secondaryColor: colors.brown,
  secondaryTextColor: colors.textColorSecondary,
  bgColor: colors.bgColor,
  bgColorSecondary: `rgba(${hexToRgb(colors.bgColor)}, .9)`,
  bgColorAlt: colors.bgColorAlt,
  bgColorModal: `rgba(${hexToRgb(colors.black)}, .925)`,
  highlightColorAlt: colors.highlightColorAlt,
};
const primaryInverted = {
  inverted: true,
  primaryColor: colors.white,
  secondaryColor: colors.brown,
  secondaryColorAlt: colors.gray,
  highlightColorInverted: colors.highlightColor,
  bgColorAlt: colors.black,
  linkColor: colors.linkColorAlt,
  linkColorAlt: colors.linkColorAlt,
  bgColor: colors.black,
};
const primaryHighlighted = {
  highlighted: true,
  primaryColor: colors.black,
  secondaryColor: colors.white,
  secondaryColorAlt: colors.gray,
  highlightColor: colors.highlightColorInverted,
  highlightColorInverted: colors.white,
  bgColor: colors.highlightColor,
};
const secondary = {
  primaryColor: colors.white,
  bgColor: colors.brown,
};
const secondaryInverted = {
  inverted: true,
  primaryColor: colors.brown,
  bgColor: colors.white,
};
const alt = {
  primaryColor: colors.primaryColor,
  bgColor: `rgba(${hexToRgb(colors.bgColorAlt)}, .2)`,
  highlightColorAlt: colors.white,
  bgColorAlt: colors.bgColor,
};
const altInverted = {
  inverted: true,
};

const getTheme = themeName => {
  const common = getCommonTheme();
  if (!themeName) {
    return common;
  }

  const customThemes = getCustomThemes();
  const theme = {
    primary,
    primaryInverted,
    primaryHighlighted,
    secondary,
    secondaryInverted,
    alt,
    altInverted,
    ...customThemes,
  }[themeName];
  return { ...common, ...theme };
};

export default getTheme;
