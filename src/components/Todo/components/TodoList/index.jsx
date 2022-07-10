import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import { Form } from '../Wrap/styles';

const TodoList = ({ data }) => (
  <Form>
    <p>My list:</p>
    {data?.length ? data.map(TodoItem) : <span>List is empty...</span>}
  </Form>
);

TodoList.propTypes = {
  data: PropTypes.element.isRequired
};

export default TodoList;
