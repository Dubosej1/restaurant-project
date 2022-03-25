import React from 'react';
import PropTypes from 'prop-types';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  render() {
    return <div>{console.log(this.props.children)}</div>;
  }
}

Nav.propTypes = {
  isMobile: PropTypes.bool,
  setPage: PropTypes.func,
  children: PropTypes.object,
};

export class DesktopNav extends React.Component {
  render() {
    const navType = `desktop`;
    return (
      <Nav>
        {({ isMobile }) => (
          <>
            {isMobile && <MobileNavButton />}
            {!isMobile && (
              <NavElems setPage={this.props.setPage} navType={navType} />
            )}
          </>
        )}
      </Nav>
    );
  }
}

DesktopNav.propTypes = {
  isMobile: PropTypes.bool,
  setPage: PropTypes.func,
  navType: PropTypes.string,
};

export class MobileNav extends React.Component {
  render() {
    const navType = `mobile`;
    const isActiveClassName = this.props.mobileNavActive
      ? `active`
      : `display-none`;
    return (
      <Nav>
        <div className={`mobileNav__container ${isActiveClassName}`}>
          <NavElems setPage={this.props.setPage} navType={navType} />
        </div>
      </Nav>
    );
  }
}

MobileNav.propTypes = {
  isMobile: PropTypes.bool,
  setPage: PropTypes.func,
  mobileNavActive: PropTypes.bool,
};

class MobileNavButton extends React.Component {
  render() {
    return console.log(`mobile nav is rendered`);
  }
}

const NavElems = ({ setPage, navType }) => (
  <nav className="nav">
    <button
      className={`btn btn__${navType} btn__home`}
      onClick={setPage}
      data-page="home"
    >
      Home
    </button>
    <button
      className={`btn btn__${navType} btn__about`}
      onClick={setPage}
      data-page="about"
    >
      About
    </button>
    <button
      className={`btn btn__${navType} btn__menu`}
      onClick={setPage}
      data-page="menu"
    >
      Menu
    </button>
    <button
      className={`btn btn__${navType} btn__location`}
      onClick={setPage}
      data-page="location"
    >
      Location
    </button>
    <button
      className={`btn btn__${navType} btn__contact`}
      onClick={setPage}
      data-page="contact"
    >
      Contact
    </button>
  </nav>
);

NavElems.propTypes = {
  navType: PropTypes.string,
  setPage: PropTypes.func,
};
