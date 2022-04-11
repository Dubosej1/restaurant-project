import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer.js';
import { SectionHeadingWithDeco, SectionDivider } from './headings.js';
import MapMarker from '../assets/location-pin.png';

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
      <div className="location-main__location-info-container">
        <div className="location-main__location-info-subsection">
          <Address div="location" />
          <PhoneNumber div="location" />
        </div>
        <div className="location-main__map-link-subsection">
          <MapLink />
        </div>
      </div>
      <SectionDivider />
    </div>
  );
}

export function StoreName(props) {
  return (
    <div className={`location-info__store-name--${props.div}`}>
      <span>New Haven Store</span>
    </div>
  );
}

StoreName.propTypes = {
  div: PropTypes.string,
};

export function PhoneNumber(props) {
  return (
    <div className={`location-info__phone-number--${props.div}`}>
      <span>(203) 555-7536</span>
    </div>
  );
}

PhoneNumber.propTypes = {
  div: PropTypes.string,
};

export function Address(props) {
  return (
    <div className={`location-info__address--${props.div}`}>
      <span>1455 Whalley Ave</span>
      <span>New Haven, CT 06511</span>
    </div>
  );
}

Address.propTypes = {
  div: PropTypes.string,
};

export function MapLink() {
  const mapURL = `https://www.google.com/maps/search/?api=1&query=1455+Whalley+Ave.+New+Haven%2C+CT+06511`;

  return (
    <div className="location-info__map-link-container">
      <img
        className="location-info__map-link-marker"
        src={MapMarker}
        alt="Map Marker"
      ></img>
      <a className="location-info__map-link" href={mapURL}>
        OPEN MAP
      </a>
    </div>
  );
}
