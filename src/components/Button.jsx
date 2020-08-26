import React from 'react';

const Button = ({ method, text }) => {
  return (
    <button type="button" onClick={method}>
      {text}
    </button>
  );
};

export default Button;
