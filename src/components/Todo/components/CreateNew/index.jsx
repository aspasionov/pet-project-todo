import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import { AddBtn } from './styles';

const CreateNew = ({ handleSave }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => setInputValue(target.value);

  const onHandleSave = async () => {
    if (inputValue.trim() !== '') {
      await handleSave(inputValue);
      await setInputValue('');
    } else {
      alert('Input is empty...');
    }
  };

  return (
    <div>
      <Input value={inputValue} onChange={handleInputChange} />
      <AddBtn onClick={onHandleSave}>Btn</AddBtn>
    </div>
  );
};

CreateNew.propTypes = {
  handleSave: PropTypes.func.isRequired
};

export default CreateNew;
