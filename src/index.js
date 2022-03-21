import './sass/style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SelectHeader from './components/header.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: `home`,
      isMobile: false,
    };
    this.setPage = this.setPage.bind(this);
  }

  setPage = (event) => {
    this.setState({
      currentPage: event.target.page,
    });
  };

  render() {
    return (
      <SelectHeader
        currentPage={this.state.currentPage}
        isMobile={this.state.isMobile}
        setPage={this.setPage}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// this.setPageToHome = this.setPageToHome.bind(this);
// this.setPageToAbout = this.setPageToAbout.bind(this);
// this.setPageToMenu = this.setPageToMenu.bind(this);
// this.setPageToLocation = this.setPageToLocation.bind(this);
// this.setPageToContact = this.setPageToContact.bind(this);

// setPageToHome = () => {
//   this.setState({
//     currentPage: `home`,
//   });
// };

// setPageToAbout = () => {
//   this.setState({
//     currentPage: `about`,
//   });
// };

// setPageToMenu = () => {
//   this.setState({
//     currentPage: `menu`,
//   });
// };

// setPageToLocation = () => {
//   this.setState({
//     currentPage: `location`,
//   });
// };

// setPageToContact = () => {
//   this.setState({
//     currentPage: `contact`,
//   });
// };
