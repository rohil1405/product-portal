import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = ({ to, text, textBold }) => (
  <div className='link-wrap' style={{paddingTop: '10px'}}>
    {text}
    <Link to={to} style={{textDecoration: 'none'}}>
      <b>{textBold}</b>
    </Link>
  </div>
);

export default LinkComponent;
