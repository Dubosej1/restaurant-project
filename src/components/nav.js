import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PageContext } from '../index.js';

export function Nav(props) {
  const tabs = ['home', `about`, `menu`, `location`, `contact`];
  let navItems = tabs.map((tab, index) => (
    <NavBtn key={index} tab={tab} navtype={props.navtype} />
  ));

  let navClass = props.navtype === `mobile` ? `mobile` : ``;

  return <nav className={`${navClass}nav`}>{navItems}</nav>;
}

Nav.propTypes = {
  navtype: PropTypes.string,
};

function NavBtn(props) {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  const clickHandler = () => setCurrentPage(props.tab);

  let activeClassName;

  if (props.tab === currentPage) activeClassName = `active`;
  else activeClassName = ``;

  return (
    <button
      className={`btn btn__nav btn__${props.navtype}nav ${activeClassName}`}
      onClick={clickHandler}
    >
      {props.tab}
    </button>
  );
}

NavBtn.propTypes = {
  tab: PropTypes.string,
  navtype: PropTypes.string,
};

export function DesktopNav() {
  return <Nav navtype="desktop" />;
}

export function MobileNav() {
  return <Nav navtype="mobile" />;
}

export function MobileNavContainer() {
  return (
    <div className="mobile-nav__container">
      <MobileNav />
    </div>
  );
}
