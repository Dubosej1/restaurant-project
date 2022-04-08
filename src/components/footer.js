import React from 'react';
import PropTypes from 'prop-types';
// import FacebookLogo from '../assets/facebook-logo.png';
// import InstagramLogo from '../assets/instagram.png';

export default function Footer(props) {
  return (
    <div className="footer">
      <SocialMediaContainer />
      {/* <LocationContainer /> */}
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

SocialMediaLink.propTypes = {
  link: PropTypes.string,
  pic: PropTypes.string,
  name: PropTypes.string,
};
