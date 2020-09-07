import React from 'react';
//redux
import { useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from '../../redux/products';
//style
import './index.scss';
const Count = ({ id, count }) => {
  const dispatch = useDispatch();
  return (
    <div className="count">
      <button onClick={() => dispatch({ type: INCREMENT, id })}>+</button>
      {count}
      <button onClick={() => dispatch({ type: DECREMENT, id })}>-</button>
    </div>
  );
};

export default Count;
