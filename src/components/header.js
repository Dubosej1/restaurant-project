import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nav = this.props.isMobile ? (
      <MobileNavButton />
    ) : (
      <Nav mobile={false} setPage={this.props.setPage} />
    );
    return (
      <header className="header">
        <img
          src="https://via.placeholder.com/120"
          className="header__logo"
          alt="Site Logo"
        />
        <React.Fragment>{nav}</React.Fragment>
      </header>
    );
  }
}

Header.propTypes = {
  isMobile: PropTypes.bool,
  setPage: PropTypes.func,
};

class MobileNavButton extends React.Component {
  render() {
    return <></>;
  }
}

// class NavLink extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isActive: false,
//     };

//     setActive;
//   }
// }

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const navClassName = this.props.mobile ? `mobileNav` : `nav`;
    return (
      <nav className="nav">
        <button
          className={`btn btn__${navClassName} btn__home`}
          onClick={this.props.setPage}
          data-page="home"
        >
          Home
        </button>
        <button
          className={`btn btn__${navClassName} btn__about`}
          onClick={this.props.setPage}
          data-page="about"
        >
          About
        </button>
        <button
          className={`btn btn__${navClassName} btn__menu`}
          onClick={this.props.setPage}
          data-page="menu"
        >
          Menu
        </button>
        <button
          className={`btn btn__${navClassName} btn__location`}
          onClick={this.props.setPage}
          data-page="location"
        >
          Location
        </button>
        <button
          className={`btn btn__${navClassName} btn__contact`}
          onClick={this.props.setPage}
          data-page="contact"
        >
          Contact
        </button>
      </nav>
    );
  }
}

Nav.propTypes = {
  mobile: PropTypes.bool,
  setPage: PropTypes.func,
};

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="header">
//         <img
//           src="https://via.placeholder.com/50"
//           className="header__logo"
//           alt="Site Logo"
//         />
// <nav className="nav">
//   <button className="btn btn__nav btn__home">Home</button>
//   <button className="btn btn__nav btn__menu">Menu</button>
//   <button className="btn btn__nav btn__location">Location</button>
//   <button className="btn btn__nav btn__contact">Contact</button>
// </nav>
//       </header>
//     );
//   }
// }

export default Header;
