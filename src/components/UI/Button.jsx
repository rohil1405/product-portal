import React from 'react';

const Button = ({ id, text }) => (
  <div id={`${id}-btn`}>
    <button id='btn'>{text}</button>
  </div>
);

export default Button;
