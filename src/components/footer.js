import React from 'react';
import PropTypes from 'prop-types';
// import FacebookLogo from '../assets/facebook-logo.png';
// import InstagramLogo from '../assets/instagram.png';
import MapMarker from '../assets/location-pin.png';

export default function Footer(props) {
  return (
    <div className="footer">
      <SocialMediaContainer />
      <LocationContainer />
    </div>
  );
}

function SocialMediaContainer() {
  return (
    <div className="footer__social-media-link-container">
      <SocialMediaLink link="www.facebook.com" name="facebook" />
      <SocialMediaLink link="www.instagram.com" name="instagram" />
    </div>
  );
}

function SocialMediaLink(props) {
  return (
    <div className="footer__social-media-link">
      <a className="social-media-link" href={props.link}>
        <div
          className={`social-media-icon social-media-icon__${props.name}`}
        ></div>
      </a>
    </div>
  );
}

function LocationContainer() {
  return (
    <div className="footer__location">
      <div className="footer__location-info-container">
        <StoreName div="footer" />
        <PhoneNumber div="footer" />
        <Address div="footer" />
        <MapLink />
      </div>
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

StoreName.propTypes = {
  div: PropTypes.string,
};

function PhoneNumber(props) {
  return (
    <div className={`location-info__phone-number--${props.div}`}>
      <span>(203) 555-7536</span>
    </div>
  );
}

PhoneNumber.propTypes = {
  div: PropTypes.string,
};

function Address(props) {
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

function MapLink() {
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

SocialMediaLink.propTypes = {
  link: PropTypes.string,
  pic: PropTypes.string,
  name: PropTypes.string,
};
