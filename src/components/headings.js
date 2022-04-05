import React from 'react';
import PropTypes from 'prop-types';

export function SectionHeading(props) {
  return <h1 className={`${props.comp}__section-heading`}>{props.text}</h1>;
}

export function SectionHeadingWithDeco(props) {
  return (
    <div className={`${props.comp}__section-heading-container`}>
      <HeadingDecoration />
      <SectionHeading comp={props.comp} text={props.text} />
      <HeadingDecoration />
    </div>
  );
}

function HeadingDecoration() {
  return <span className="heading-decoration"> </span>;
}

SectionHeading.propTypes = {
  comp: PropTypes.string,
  text: PropTypes.string,
};

SectionHeadingWithDeco.propTypes = {
  comp: PropTypes.string,
  text: PropTypes.string,
};
