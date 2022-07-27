import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, clickEvent, text }) => {
  return (
    <button className={className} onClick={clickEvent}>
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
};

export default Button;
