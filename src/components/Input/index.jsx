import React from 'react';
import PropTypes from 'prop-types';

import InputStyled from './styles';

const Input = ({ onChange, value, type }) => (
  <InputStyled type={type} onChange={onChange} value={value} />
);

Input.defaultProps = {
  value: null,
  type: 'text'
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string
};

export default Input;
