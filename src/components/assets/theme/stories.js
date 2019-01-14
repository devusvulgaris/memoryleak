import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import getTheme from './';

const Container = styled.div`
  max-width: 700px;
`;

const Circle = styled.div`
  width: 91px;
  height: 91px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: ${props => props.bg};
`;
const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
  margin-right: 27px;
  margin-bottom: 1rem;
  width: 130px;
`;

// eslint-disable-next-line
const PaletteColor = ({ color, name }) => (
  <Wrapper>
    <Circle bg={color} />
    {name}
    <br />
    {color}
  </Wrapper>
);
const commonTheme = getTheme();
const getThemeColors = themeName => {
  const theme = getTheme(themeName);
  return Object.keys(theme)
    .filter(key => key.toLowerCase().includes('color'))
    .reduce((obj, key) => {
      if (
        typeof commonTheme[key] === 'undefined' ||
        commonTheme[key] !== theme[key]
      ) {
        obj[key] = theme[key];
      }
      return obj;
    }, {});
};
storiesOf('Theme colors', module)
  .add('common theme', () => {
    const themeColors = Object.keys(commonTheme)
      .filter(key => key.toLowerCase().includes('color'))
      .reduce((obj, key) => {
        obj[key] = commonTheme[key];
        return obj;
      }, {});

    return (
      <Container>
        {Object.keys(themeColors).map(key => (
          <PaletteColor color={themeColors[key]} name={key} />
        ))}
      </Container>
    );
  })
  .add('primary theme', () => {
    const themeColors = getThemeColors('primary');

    return (
      <Container>
        {Object.keys(themeColors).map(key => (
          <PaletteColor color={themeColors[key]} name={key} />
        ))}
      </Container>
    );
  })
  .add('primary theme inverted', () => {
    const themeColors = getThemeColors('primaryInverted');
    return (
      <Container>
        {Object.keys(themeColors).map(key => (
          <PaletteColor color={themeColors[key]} name={key} />
        ))}
      </Container>
    );
  })
  .add('secondary theme', () => {
    const themeColors = getThemeColors('secondary');

    return (
      <Container>
        {Object.keys(themeColors).map(key => (
          <PaletteColor color={themeColors[key]} name={key} />
        ))}
      </Container>
    );
  })
  .add('secondary theme inverted', () => {
    const themeColors = getThemeColors('secondaryInverted');

    return (
      <Container>
        {Object.keys(themeColors).map(key => (
          <PaletteColor color={themeColors[key]} name={key} />
        ))}
      </Container>
    );
  })
  .add('alt theme', () => {
    const themeColors = getThemeColors('alt');

    return (
      <Container>
        {Object.keys(themeColors).map(key => (
          <PaletteColor color={themeColors[key]} name={key} />
        ))}
      </Container>
    );
  })
  .add('alt theme inverted', () => {
    const themeColors = getThemeColors('altInverted');

    return (
      <Container>
        {Object.keys(themeColors).map(key => (
          <PaletteColor color={themeColors[key]} name={key} />
        ))}
      </Container>
    );
  });
