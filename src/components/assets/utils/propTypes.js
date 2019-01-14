import {
  arrayOf,
  bool,
  func,
  node,
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

export const linkProp = shape({
  children: node,
  to: oneOfType([string, shape({ search: string })]),
  action: shape({
    component: func,
  }),
  type: oneOf(['', 'link', 'ext', 'action', 'anchor', 'file']),
  spy: bool,
  text: string,
  offset: number,
  showAsButton: bool,
  buttonRole: oneOf(['primary', 'secondary', 'alt']),
});

export const imagesProp = arrayOf(
  shape({
    sourceUrl: string.isRequired,
    height: number,
    width: number,
  }),
);

export const navItemProp = shape({
  text: string.isRequired,
  anchor: string,
  to: oneOfType([string, shape({ search: string })]),
  type: oneOf(['link', 'anchor', 'ext', 'action']),
  appearance: oneOf(['button', 'checkbox']),
});

export const contactInfoProp = shape({
  name: string.isRequired,
  position: string,
  imageUrl: string,
  location: string,
  tel: string,
  email: string,
  links: shape({
    linkedin: string,
  }),
  breakpoint: string,
});
