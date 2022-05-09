import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { DesktopNav } from './nav.js';

function Header(props) {
  const nav = props.isMobile ? <MobileNavButton /> : <DesktopNav />;
  const ref = useRef(null);

  useEffect(() => {
    props.headerPadding(ref.current.clientHeight);
  }, []);

  return (
    <header className={`header sticky`} ref={ref}>
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
  headerPadding: PropTypes.func,
};

class MobileNavButton extends React.Component {
  render() {
    return <></>;
  }
}

export default Header;

// function Header(props) {
//   const nav = props.isMobile ? <MobileNavButton /> : <DesktopNav />;

//   const [stickyClass, setStickyClass] = useState(null);
//   const ref = useRef(null);

//   useEffect(() => {
//     window.addEventListener(`scroll`, stickNavBar);
//     props.headerPadding(ref.current.clientHeight);
//     console.log(ref.current.clientHeight);

//     return () => {
//       window.removeEventListener(`scroll`, stickNavBar);
//     };
//   }, []);

//   const stickNavBar = () => {
//     if (window !== undefined) {
//       let windowHeight = window.scrollY;
//       windowHeight > 100 ? setStickyClass(`sticky`) : setStickyClass(null);
//     }
//   };

//   return (
//     <header className={`header sticky`} ref={ref}>
//       <img
//         src="https://via.placeholder.com/120"
//         className="header__logo"
//         alt="Site Logo"
//       />
//       <React.Fragment>{nav}</React.Fragment>
//     </header>
//   );
// }
