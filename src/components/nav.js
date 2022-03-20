import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <img
          src="https://via.placeholder.com/50"
          className="nav__logo"
          alt="logo"
        />
        <div className="nav__btn-container">
          <button className="btn btn__nav btn__home">Home</button>
          <button className="btn btn__nav btn__menu">Menu</button>
          <button className="btn btn__nav btn__location">Location</button>
          <button className="btn btn__nav btn__contact">Contact</button>
        </div>
      </div>
    );
  }
}

export default Nav;
