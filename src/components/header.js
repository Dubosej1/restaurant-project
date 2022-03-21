import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img
          src="https://via.placeholder.com/50"
          className="header__logo"
          alt="Site Logo"
        />
        <nav className="nav">
          <button className="btn btn__nav btn__home">Home</button>
          <button className="btn btn__nav btn__menu">Menu</button>
          <button className="btn btn__nav btn__location">Location</button>
          <button className="btn btn__nav btn__contact">Contact</button>
        </nav>
      </header>
    );
  }
}

export default Header;
