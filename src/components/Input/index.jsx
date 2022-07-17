import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles'

const Input = ({onChange, value, type, name, placeholder, errorText}) => (
  <>
    <S.FormItem className={errorText && 'error'}>
      <input value={value} type={type} name={name} placeholder={placeholder} onChange={onChange}/>
    </S.FormItem>
    {errorText && <S.Error>{errorText}</S.Error>}
  </>
);

Input.defaultProps = {
  value: null,
  type: 'text'
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired
};

export default Input;
