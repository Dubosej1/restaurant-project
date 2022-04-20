import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer.js';
import { SectionHeadingWithDeco, SectionHeading } from './headings.js';
import MapMarker from '../assets/location-pin.png';

export default function Contact() {
  return (
    <div>
      <ContactPageBody />
      <Footer />
    </div>
  );
}

function ContactPageBody() {
  const sectionHeadingElem = (
    <SectionHeading comp="contact-main" text="Contact Us" />
  );

  const greeting = `We want to hear you tell us your suggestions or criticisms`;

  return (
    <div className="contact-main">
      <SectionHeadingWithDeco comp="contact-main" text={sectionHeadingElem} />
      <div className="contact-main__info-container">
        <div className="contact-main__greeting-container">
          <span className="contact-main__greeting">{greeting}</span>
        </div>
        {/* <ContactForm /> */}
      </div>
    </div>
  );
}
