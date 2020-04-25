import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Header from '../components/Header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
