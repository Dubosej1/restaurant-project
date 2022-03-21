import React from 'react';

// class NavButton extends React.Component {
//   render() {
//     return (

//     );
//   }
// }

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
          src="https://via.placeholder.com/50"
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
};

class MobileNavButton extends React.Component {
  render() {
    <></>;
  }
}

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navClassName = this.props.mobile ? `mobileNav` : `nav`;
    return (
      <nav className="nav">
        <button
          className={`btn btn__${navClassName} btn__home`}
          onClick={this.props.setPage}
          page="home"
        >
          Home
        </button>
        <button
          className={`btn btn__${navClassName} btn__about`}
          onClick={this.props.setPage}
          page="about"
        >
          About
        </button>
        <button
          className={`btn btn__${navClassName} btn__menu`}
          onClick={this.props.setPage}
          page="menu"
        >
          Menu
        </button>
        <button
          className={`btn btn__${navClassName} btn__location`}
          onClick={this.props.setPage}
          page="location"
        >
          Location
        </button>
        <button
          className={`btn btn__${navClassName} btn__contact`}
          onClick={this.props.setPage}
          page="contact"
        >
          Contact
        </button>
      </nav>
    );
  }
}

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
