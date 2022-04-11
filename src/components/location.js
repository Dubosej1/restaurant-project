import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer.js';
import { SectionHeadingWithDeco } from './headings.js';

export default function Location() {
  return (
    <div>
      <LocationPageBody />
      <Footer />
    </div>
  );
}

function LocationPageBody() {
  const sectionHeadingElem = <StoreName div="location" />;

  return (
    <div className="location-main">
      <SectionHeadingWithDeco comp="location-main" text={sectionHeadingElem} />
    </div>
  );
}

function StoreName(props) {
  return (
    <div className={`location-info__store-name--${props.div}`}>
      <span>New Haven Store</span>
    </div>
  );
}
