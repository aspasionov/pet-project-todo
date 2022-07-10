import React from 'react';
import PropTypes from 'prop-types';

import BtnStyled from './styles';

// eslint-disable-next-line react/jsx-props-no-spreading
const Btn = ({ onClick, type, children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <BtnStyled {...rest} onClick={onClick} type={type}>
    {children}
  </BtnStyled>
);

Btn.defaultProps = {
  type: 'button',
  text: 'Btn'
};

Btn.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  text: PropTypes.string
};

export default Btn;
