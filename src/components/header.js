import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from './nav.js';

function Header(props) {
  const nav = props.isMobile ? <MobileNavButton /> : <Nav />;

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

Header.propTypes = {
  isMobile: PropTypes.bool,
  setPage: PropTypes.func,
};

class MobileNavButton extends React.Component {
  render() {
    return <></>;
  }
}

export default Header;
