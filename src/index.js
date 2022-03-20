import './sass/style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/nav.js';

class App extends Component {
  render() {
    return <Nav />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
