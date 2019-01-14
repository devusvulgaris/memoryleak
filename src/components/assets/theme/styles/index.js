import get from 'lodash.get';

const getStyle = style => {
  const parts = style.split('.');
  const baseSelector = parts.shift();

  return get(
    {
      form: () => require('./forms').default, // eslint-disable-line global-require
      content: () => require('./contentOutput').default, // eslint-disable-line global-require
      tag: () => require('./miscStyles').tagStyle, // eslint-disable-line global-require
      imageOverlay: () => require('./miscStyles').imageOverlay, // eslint-disable-line global-require
      headings: () => get(require('./headings').default, parts.join('.'), ''), // eslint-disable-line global-require
      textStyles: () =>
        get(require('./typographyStyles').default, parts.join('.'), ''), // eslint-disable-line global-require
      buttons: () => get(require('./buttons').default, parts.join('.'), ''), // eslint-disable-line global-require
    },
    baseSelector,
    '',
  );
};

export default getStyle;
