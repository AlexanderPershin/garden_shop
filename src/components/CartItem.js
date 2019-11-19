import React from 'react';
import { useDispatch } from 'react-redux';

// import LazyInp from './LazyInp';

import { addToCart, removeFromCart } from '../actions';

const CartItem = ({ style, className, ...item }) => {
  const { name, category, picture, price, amount, incart } = item;
  const dispatch = useDispatch();

  const handleAmount = e => {
    dispatch(
      addToCart({
        ...item,
        incart: e.target.valueAsNumber
      })
    );
  };

  const handleRemove = e => {
    dispatch(removeFromCart(item));
  };

  return (
    <li
      style={{ backgroundImage: `url(/img/${picture})` }}
      className='productList__item'
      key={name}
    >
      <ul>
        <h3>{name}</h3>
        <li>Category: {category}</li>
        <li>Price: {price}</li>
        <li>Available: {amount}</li>
        <li>
          In Cart:{' '}
          <input
            type='number'
            value={incart}
            step='1'
            max={amount + incart}
            min='0'
            onChange={handleAmount}
          />
        </li>
        <li>
          <button onClick={handleRemove}>Remove &times;</button>
        </li>
      </ul>
    </li>
  );
};

export default CartItem;
