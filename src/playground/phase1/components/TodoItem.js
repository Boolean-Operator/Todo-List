import React from 'react';

const TodoItem = () => {
  const todoItem = 'Placeholder text here'
  return (
    <div className="list-item">
      <span>
        <p className="item-text">
          <input type="checkbox" />
          {`${todoItem}`}
        </p>
      </span>
      <button className="button">Edit</button>
    </div>
    
  )
}


export default TodoItem;
