import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LazyInp from './LazyInp';

import { addItem, removeItem, destroyItem, itemAdded } from '../actions';

const CartItem = ({ name, category, picture, price, amount }) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [cnt, setCnt] = useState(amount);

  const handleCnt = count => {
    console.log(count);

    setCnt(count);
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
        <li>Amount: {amount}</li>
        <li>
          Amount:{' '}
          <LazyInp min={0} max={50} step={1} cnt={cnt} setCnt={handleCnt} />
        </li>
      </ul>
    </li>
  );
};

export default CartItem;
