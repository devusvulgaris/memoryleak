import { pxToRem } from '../utils';

export const iconStyle = `
  font-family: 'srv-icons';
  font-style: normal;
  font-weight: normal;
  speak: none;

  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  font-size: ${pxToRem(24)}rem;
  text-decoration: inherit;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const getIconProps = type =>
  ({
    dropdown: {
      char: '\\e801',
      css: `
        font-size: .8em;
        transform: rotate(90deg);
        transition: transform .25s ease-in;
      `,
    },
    calendar: {
      char: '\\e800',
      css: `
      `,
    },
    car: {
      char: '\\e816',
      css: `
        font-size: .75rem;
      `,
    },
    car_big: {
      char: '\\e815',
      css: `
        font-size: 2.25rem;
      `,
    },
    caret: {
      char: '\\e801',
      css: `
        font-size: 1.2rem;
        padding-left: 5px;
      `,
    },
    check: {
      char: '\\e802',
      css: `
        font-size: .9em;
      `,
    },
    search: {
      char: '\\e80b',
      css: `
      `,
    },
    menu_close: {
      char: '\\e813',
      css: `
      `,
    },
    menu: {
      char: '\\e814',
      css: `
      `,
    },
    close: {
      char: '\\e811',
      css: `
      `,
    },
    modal_close: {
      char: '\\e811',
      css: `
      `,
    },
    close_small: {
      char: '\\e812',
      css: `
      `,
    },
    download: {
      char: '\\e805',
      css: `
      `,
    },
    play: {
      char: '\\e80a',
      css: `
      `,
    },
    dropdown_small: {
      char: '\\e815',
      css: `
      `,
    },
    instagram: {
      char: '\\e808',
      css: `
      `,
    },
    twitter: {
      char: '\\e810',
      css: `
      `,
    },
    facebook: {
      char: '\\e806',
      css: `
      `,
    },
    linkedin: {
      char: '\\e809',
      css: `
      `,
    },
    construction_finish: {
      char: '\\e80d',
      css: `
      `,
    },
    construction_plan: {
      char: '\\e80e',
      css: `
      `,
    },
    construction_preMarket: {
      char: '\\e80f',
      css: `
      `,
    },
    construction_construct: {
      char: '\\e80c',
      css: `
      `,
    },
  }[type]);

export const getIcon = (type, flip = false) => {
  let iconCss = iconStyle;
  if (!type) {
    console.error('Icon type must be defined.'); // eslint-disable-line
  } else {
    const iconObject = getIconProps(type);
    if (iconObject) {
      const { char, css } = iconObject;
      iconCss += `content: '${char}';`;
      if (css) {
        iconCss += css;
      }

      if (flip) {
        iconCss += `
          transform: rotate(180deg);
        `;
      }
    } else {
      console.warn(`No such icon (${type})`); // eslint-disable-line
    }
  }
  return iconCss;
};
