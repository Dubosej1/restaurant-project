import React from 'react';
import PropTypes from 'prop-types';

export function SectionHeading(props) {
  return <h1 className={`${props.comp}__section-heading`}>{props.text}</h1>;
}

SectionHeading.propTypes = {
  comp: PropTypes.string,
  text: PropTypes.string,
};
