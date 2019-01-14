import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import contentOutputStyles from './contentOutput';

const Output = styled.div`
  ${contentOutputStyles};
`;
const example = `
<h1>Heading 1</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non arcu at est accumsan varius. Etiam eu libero orci. Praesent vehicula fermentum eros, at pulvinar erat aliquam vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce aliquam vulputate dolor, ac tristique nisl tempus sit amet. Vivamus placerat, urna in dignissim luctus, erat velit ultricies justo, a interdum nisi felis ac diam. Aenean condimentum tincidunt ante eu iaculis. Etiam malesuada leo enim.
</p>
<h2>Heading 2</h2>
<p>
Quisque auctor et tortor quis dapibus. Duis in augue sit amet nulla egestas porttitor eget in est. Fusce scelerisque ultricies felis. Nullam molestie vestibulum ex, sed aliquet eros faucibus convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eleifend pellentesque mi, vitae molestie nunc tristique sed. Aliquam in mollis nisl, sit amet laoreet eros. Suspendisse potenti. Proin finibus neque turpis, placerat sodales justo sagittis at.
</p>
<h3>Heading 3</h3>
<p>
Quisque auctor et tortor quis dapibus. Duis in augue sit amet nulla egestas porttitor eget in est. Fusce scelerisque ultricies felis. Nullam molestie vestibulum ex, sed aliquet eros faucibus convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eleifend pellentesque mi, vitae molestie nunc tristique sed. Aliquam in mollis nisl, sit amet laoreet eros. Suspendisse potenti. Proin finibus neque turpis, placerat sodales justo sagittis at.
</p>
<h4>Heading 4</h4>
<p>
Quisque auctor et tortor quis dapibus. <strong>Duis in augue sit amet nulla egestas porttitor eget in est.</strong> Fusce scelerisque ultricies felis. Nullam molestie vestibulum ex, sed aliquet eros faucibus convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eleifend pellentesque mi, vitae molestie nunc tristique sed. Aliquam in mollis nisl, sit amet laoreet eros. Suspendisse potenti. Proin finibus neque turpis, placerat sodales justo sagittis at.
</p>
<h5>Heading 5</h5>
<p>
<em>Quisque auctor et tortor quis dapibus. Duis in augue sit amet nulla egestas porttitor eget in est. Fusce scelerisque ultricies felis.</em> Nullam molestie vestibulum ex, sed aliquet eros faucibus convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eleifend pellentesque mi, vitae molestie nunc tristique sed. Aliquam in mollis nisl, sit amet laoreet eros. Suspendisse potenti. Proin finibus neque turpis, placerat sodales justo sagittis at.
</p>
<blockquote>
<p>One person’s waste is raw material for someone else.</p>
</blockquote>
<p>
Etiam dapibus mi non risus fringilla molestie. Morbi varius sodales turpis ut suscipit. Nulla vel ligula eget orci volutpat mollis eget nec velit. Donec vel tincidunt lorem. Donec odio tortor, iaculis at consequat nec, iaculis vitae libero. Pellentesque tempor orci et orci semper vehicula. Vivamus at eros turpis. In justo ligula, blandit non ex ut, porttitor faucibus elit. Fusce eleifend, tellus id volutpat bibendum, dolor turpis convallis est, ut imperdiet massa magna vel velit. Donec non sodales lacus, a cursus libero. Sed dapibus varius massa. Ut laoreet lorem magna, a ullamcorper est euismod vel. Donec sagittis porttitor massa quis tempor.
<a href="https://www.w3schools.com">This is a short link</a>
Etiam dapibus mi non risus fringilla molestie. Morbi varius sodales turpis ut suscipit. Nulla vel ligula eget orci volutpat mollis eget nec velit. Donec vel tincidunt lorem. Donec odio tortor, iaculis at consequat nec, iaculis vitae libero. Pellentesque tempor orci et orci semper vehicula. Vivamus at eros turpis. In justo ligula, blandit non ex ut, porttitor faucibus elit. Fusce eleifend, tellus id volutpat bibendum, dolor turpis convallis est, ut imperdiet massa magna vel velit. Donec non sodales lacus, a cursus libero. Sed dapibus varius massa. Ut laoreet lorem magna, a ullamcorper est euismod vel. Donec sagittis porttitor massa quis tempor.
<a href="https://www.w3schools.com">This is a very long link, which seems to continue way too long for its own good and even further than that endangering several different species across the globe</a>
</p>
<ul>
  <li>List Item</li>
  <li>List Item</li>
  <li>List Item</li>
  <li>List Item</li>
</ul>
<p>
Quisque auctor et tortor quis dapibus. Duis in augue sit amet nulla egestas porttitor eget in est. Fusce scelerisque ultricies felis. Nullam molestie vestibulum ex, sed aliquet eros faucibus convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eleifend pellentesque mi, vitae molestie nunc tristique sed. Aliquam in mollis nisl, sit amet laoreet eros. Suspendisse potenti. Proin finibus neque turpis, placerat sodales justo sagittis at.
</p>
<ol>
  <li>List Item</li>
  <li>List Item</li>
  <li>List Item</li>
  <li>List Item</li>
</ol>
<p>
Quisque auctor et tortor quis dapibus. Duis in augue sit amet nulla egestas porttitor eget in est. Fusce scelerisque ultricies felis. Nullam molestie vestibulum ex, sed aliquet eros faucibus convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eleifend pellentesque mi, vitae molestie nunc tristique sed. Aliquam in mollis nisl, sit amet laoreet eros. Suspendisse potenti. Proin finibus neque turpis, placerat sodales justo sagittis at.
</p>
<table>
  <thead>
    <th>Name</th>
    <th>Telephone</th>
    <th>Hobbies</th>
    <th>Status</th>
  </thead>
  <tbody>
    <tr>
      <td>Bill Gates</td>
      <td>55577854</td>
      <td>Bridge</td>
      <td>Pending</td>
    </tr>
    <tr>
      <td>David Yates</td>
      <td>66677854</td>
      <td>Movies</td>
      <td>Filming</td>
    </tr>
  </tbody>
</table>
`;

storiesOf('Content Styles', module).add('article', () => (
  <Output dangerouslySetInnerHTML={{ __html: example }} />
));
