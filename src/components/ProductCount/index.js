import React from 'react';
import { store } from '../../index.js';
import './index.scss';
const Count = ({ id, count }) => {
  return (
    <div className="count">
      <button
        onClick={() => store.dispatch({ type: 'incrementCount', id: id })}
      >
        +
      </button>
      {count}
      <button
        onClick={() => store.dispatch({ type: 'decrementCount', id: id })}
      >
        -
      </button>
    </div>
  );
};

export default Count;
