import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './Todo/TodoTemplate';
import TodoInsert from './Insert/TodoInsert';
import TodoList from './list/TodoList';

const TodoIndex = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "운동",
      checked: true,
    },
    {
      id: 2,
      text: "공부",
      checked: false,
    },
    {
      id: 3,
      text: "청소",
      checked: true,
    }
  ]);
  const nextId = useRef(4);

  const onInsert = useCallback(
    text =>{
      const todo ={
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  const onRemove = useCallback(
    id =>{
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  )

  const onToggle = useCallback(
    id =>{
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo,checked : !todo.checked}: todo),
      );
    },
    [todos],
  );
  return(
    <TodoTemplate>
      <TodoInsert onInsert ={onInsert}/>
      <TodoList todos = {todos} onRemove = {onRemove} onToggle ={onToggle}/>
    </TodoTemplate>
  )
}

export default TodoIndex;