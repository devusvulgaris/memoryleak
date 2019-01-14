/*
 * All site specific theme related constants and configurations go here.
 */

export const layout = {
  small: '600px',
  medium: '810px',
  inner: '1140px', // Inner layout: Layout which doesn't count the padding. This is the basic content width around the site.
  outer: '1208px', // Outer layout: Layout which counts the padding. Use to layout content, which should go from side to side. 1140px + 2*2rem (horizontal spacing at desktop)
  siteOffset: '1320px', // site - (site - inner / 2)
  site: '1440px',
  content: '810px',
  footer: '100%',
  get default() {
    return this.outer;
  },
  get header() {
    return this.site;
  },
  get hero() {
    return this.site;
  },
  get M() {
    return this.medium;
  },
  get S() {
    return this.small;
  },
  get L() {
    return this.site;
  },
};

const spacing = {
  horizontal: ['1.411rem', '1.5rem', '2rem'],
  vertical: ['1.411rem', '1.5rem', '2rem'],
  flow: ['2.5rem', '5rem'],
};

const header = {
  height: 90,
};

export const lightboxTheme = {
  container: {
    background: 'rgba(85, 87, 91, 0.9)',
  },
};

export default {
  layout,
  header,
  spacing,
};
