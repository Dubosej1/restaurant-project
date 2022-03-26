import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { PageContext } from '../index.js';

export function Nav(props) {
  const tabs = ['home', `about`, `menu`, `location`, `contact`];
  let navItems = tabs.map((tab, index) => <NavBtn key={index} tab={tab} />);

  return <nav>{navItems}</nav>;
}

function NavBtn(props) {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  const clickHandler = () => setCurrentPage(props.tab);

  let activeClassName;

  if (props.tab === currentPage) activeClassName = `active`;
  else activeClassName = ``;

  return (
    <button
      className={`btn btn__nav ${activeClassName}`}
      onClick={clickHandler}
    >
      {props.tab}
    </button>
  );
}

NavBtn.propTypes = {
  tab: PropTypes.string,
};
