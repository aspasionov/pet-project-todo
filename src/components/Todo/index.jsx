import React, { useState } from 'react';

import TodoList from './components/TodoList';
import CreateNew from './components/CreateNew';
import Wrap from './components/Wrap';

const Todo = () => {
  const [todoArr, setTodoArr] = useState([]);
  const handleSave = (newData) => {
    setTodoArr((prevState) => [
      ...prevState,
      { id: prevState.length + 1, name: newData }
    ]);
  };

  return (
    <Wrap>
      <TodoList data={todoArr} />
      <CreateNew handleSave={handleSave} />
    </Wrap>
  );
};

export default Todo;
