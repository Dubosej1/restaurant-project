import React, { useState } from 'react';
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
        <ContactForm />
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [phone, setPhone] = useState(``);
  const [message, setMessage] = useState(``);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneInput = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageInput = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form
      className="contact-form"
      action="mailto:johnavenfreelance@gmail.com"
      method="POST"
      encType="multipart/form-data"
      name="ContactForm"
    >
      <input
        className="contact-form__input"
        placeholder="Your name"
        value={name}
        onChange={handleNameInput}
      />
      <input
        className="contact-form__input"
        placeholder="Your email"
        value={email}
        onChange={handleEmailInput}
      />
      <input
        className="contact-form__input"
        placeholder="Area Code/Phone"
        value={phone}
        onChange={handlePhoneInput}
      />
      <textarea
        className="contact-form__input textarea"
        placeholder="Type your message here!"
        value={message}
        onChange={handleMessageInput}
      />
      <input className="contact-form__submit-btn" type="submit" value="Send" />
    </form>
  );
}
