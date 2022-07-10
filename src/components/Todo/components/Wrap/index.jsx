import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const Wrap = ({ children }) => <Wrapper>{children || ''}</Wrapper>;

Wrap.propTypes = {
  children: PropTypes.element.isRequired
};

export default Wrap;
