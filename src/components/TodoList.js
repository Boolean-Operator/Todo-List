import React from 'react'

import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default TodoList;