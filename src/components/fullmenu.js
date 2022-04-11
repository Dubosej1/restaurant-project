import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer.js';
import { SectionHeading, SectionSubheading } from './headings.js';

export default function FullMenu() {
  const subheading = `We have the option of executive combos during the week`;
  return (
    <div className="full-menu">
      <SectionHeading comp="full-menu" text="Menu" />
      <SectionSubheading comp="full-menu" text={subheading} />
      <Footer />
    </div>
  );
}
