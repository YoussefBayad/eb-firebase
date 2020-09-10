import React from 'react';
//redux
import { useDispatch } from 'react-redux';
import types from '../../redux/Products/products.types';
//style
import './index.scss';
const Count = ({ id, count }) => {
  const dispatch = useDispatch();
  return (
    <div className="count">
      <button onClick={() => dispatch({ type: types.INCREMENT, id })}>+</button>
      {count}
      <button onClick={() => dispatch({ type: types.DECREMENT, id })}>-</button>
    </div>
  );
};

export default Count;
