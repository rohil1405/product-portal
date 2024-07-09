import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = ({ to, text }) => (
  <div className='link-wrap'>
    <Link to={to}>
      <b className='link-text'>{text}</b>
    </Link>
  </div>
);

export default LinkComponent;
