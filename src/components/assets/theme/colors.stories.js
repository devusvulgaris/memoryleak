// import React from 'react';
// import styled from 'styled-components';
// import { storiesOf } from '@storybook/react'; //eslint-disable-line
// import {
//   brightBlue,
//   brightBlueLight,
//   brightBlueLighter,
//   brightBlueLightest,
//   deepBlue,
//   deepBlueLight,
//   deepBlueLighter,
//   deepBlueLightest,
//   black,
//   gray,
//   grayLighter,
//   grayLightest,
//   pink,
//   pinkLight,
//   pinkLighter,
//   beige,
//   beigeLight,
//   beigeLighter,
//   blueGray,
//   blueGrayLight,
//   blueGrayLighter,
//   red,
//   green,
//   yellow,
// } from './colors';
//
// const Circle = styled.div`
//   width: 91px;
//   height: 91px;
//   border-radius: 50%;
//   margin: 0 auto;
//   background-color: ${props => props.bg};
// `;
// const Wrapper = styled.div`
//   display: inline-block;
//   text-align: center;
//   margin-right: 27px;
//   width: 130px;
// `;
//
// // eslint-disable-next-line
// const PaletteColor = ({ color, name }) => (
//   <Wrapper>
//     <Circle bg={color} />
//     {name}
//     <br />
//     {color}
//   </Wrapper>
// );
//
// storiesOf('Colors', module)
//   .add('primary palette', () => (
//     <div>
//       <div>
//         <PaletteColor color={brightBlue} name="brightBlue" />
//         <PaletteColor color={brightBlueLight} name="brightBlueLight" />
//         <PaletteColor color={brightBlueLighter} name="brightBlueLighter" />
//         <PaletteColor color={brightBlueLightest} name="brightBlueLightest" />
//       </div>
//       <div>
//         <PaletteColor color={deepBlue} name="deepBlue" />
//         <PaletteColor color={deepBlueLight} name="deepBlueLight" />
//         <PaletteColor color={deepBlueLighter} name="deepBlueLighter" />
//         <PaletteColor color={deepBlueLightest} name="deepBlueLightest" />
//       </div>
//       <div>
//         <PaletteColor color={black} name="black" />
//         <PaletteColor color={gray} name="gray" />
//         <PaletteColor color={grayLighter} name="grayLighter" />
//         <PaletteColor color={grayLightest} name="grayLightest" />
//       </div>
//     </div>
//   ))
//   .add('secondary palette', () => (
//     <div>
//       <div>
//         <PaletteColor color={pink} name="pink" />
//         <PaletteColor color={pinkLight} name="pinkLight" />
//         <PaletteColor color={pinkLighter} name="pinkLighter" />
//       </div>
//       <div>
//         <PaletteColor color={beige} name="beige" />
//         <PaletteColor color={beigeLight} name="beigeLight" />
//         <PaletteColor color={beigeLighter} name="beigeLighter" />
//       </div>
//       <div>
//         <PaletteColor color={blueGray} name="blueGray" />
//         <PaletteColor color={blueGrayLight} name="blueGrayLight" />
//         <PaletteColor color={blueGrayLighter} name="blueGrayLighter" />
//       </div>
//     </div>
//   ))
//   .add('supporting web palette', () => (
//     <div>
//       <div>
//         <PaletteColor color={red} name="red" />
//         <PaletteColor color={green} name="green" />
//         <PaletteColor color={yellow} name="yellow" />
//       </div>
//     </div>
//   ));
