import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, clickEvent, text }) => {
  return (
    <button
      className={`button border rounded w-8 h-8 hover:bg-[#373737] hover:border-none hover:scale-125 hover:rotate-90 transition duration-500 hover:duration-1500  ${className}`}
      onClick={clickEvent}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
};

export default React.memo(Button);
