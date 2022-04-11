import './sass/style.scss';
import React, { useState, createContext, useMemo } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';
import Home from './components/home.js';
import About from './components/about.js';
import Location from './components/location.js';
import FullMenu from './components/fullmenu.js';

export const PageContext = createContext({
  currentPage: ``,
  setCurrentPage: () => {},
});

function App(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(`home`);

  const page = useMemo(() => ({ currentPage, setCurrentPage }), [currentPage]);

  function assignCurrentPage(currentPage) {
    let pageElement;
    if (currentPage === `home`) pageElement = <Home />;
    if (currentPage === `about`) pageElement = <About />;
    if (currentPage === `menu`) pageElement = <FullMenu />;
    if (currentPage === `location`) pageElement = <Location />;
    // if (currentPage === `contact`) pageElement = <Contact />;
    return pageElement;
  }

  let pageElement = assignCurrentPage(currentPage);

  return (
    <PageContext.Provider value={page}>
      <div>
        <Header currentPage={currentPage} isMobile={isMobile} />
        {pageElement}
      </div>
    </PageContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
