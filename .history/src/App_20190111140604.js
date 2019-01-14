import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArcgisMap from './components/ArcgisMap'
import { ThemeProvider } from 'styled-components'
import getTheme from './components/assets'
import './theme'

class App extends Component {
  render() {
    return (

      <div className="App">
        <ThemeProvider theme={getTheme('primary')}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ArcgisMap />
          </header>
        </ThemeProvider>
      </div >
    );
  }
}

export default App;
