import React from 'react';

import { Link } from 'react-router-dom';

const Button = ({ linkTo, children }) => {
  return <Link to={linkTo}>{children}</Link>;
};

export default Button;
