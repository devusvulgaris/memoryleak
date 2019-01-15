import React, { Component } from 'react';
import 'core-js/fn/object/assign';
import './App.css';
import ArcgisMap from './components/ArcgisMap/new'
// import MyMap from './components/ArcgisMap/new'
import { ThemeProvider } from 'styled-components'
import { getTheme } from './components/assets'
import './theme'
import './AppCss'


import mapItems from './mapItems'

class App extends Component {
  render() {
    return (

      <div className="App">
        <ThemeProvider theme={getTheme('primary')}>
        {/*  <MyMap />  */}
    <ArcgisMap mapItems={mapItems} /> 
        
        </ThemeProvider>
      </div >
    );
  }
}

export default App;
