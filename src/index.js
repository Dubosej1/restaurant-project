import './sass/style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';

import Home from './components/home.js';
import About from './components/about.js';

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
    console.log(event.target);
    this.setState({
      currentPage: event.target.dataset.page,
    });
  };

  assignCurrentPage(currPage) {
    let pageElement;
    if (currPage === `home`) pageElement = <Home />;
    if (currPage === `about`) pageElement = <About />;
    // if (currPage === `menu`) pageElement = <Menu />;
    // if (currPage === `location`) pageElement = <Location />;
    // if (currPage === `contact`) pageElement = <Contact />;
    return pageElement;
  }

  render() {
    let currPage = this.state.currentPage;
    let pageElement = this.assignCurrentPage(currPage);

    return (
      <div>
        <Header
          currentPage={this.state.currentPage}
          isMobile={this.state.isMobile}
          setPage={this.setPage}
        />
        {pageElement}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
