// Scrimba Chap. Functional Components

import React from 'react';
import ReactDOM from 'react-dom';

const MyInfo = () => {
  return (
    <div>
      <h1>Mark</h1>
      <p>Paragraph about me...</p>
      <ul>
        <li>spot 1</li>
        <li>spot 2</li>
        <li>spot 3</li>
      </ul>
    </div>
    
  )
}


ReactDOM.render(< MyInfo />, document.getElementById('app'));