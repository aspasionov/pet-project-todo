import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ id, name }) => (
  <div>
    {id} {name}
  </div>
);

TodoItem.defaultProps = {
  id: '',
  name: ''
};

TodoItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
};

export default TodoItem;
