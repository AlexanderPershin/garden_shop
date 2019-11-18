import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addItem, removeItem, destroyItem, itemAdded } from '../actions';

import LazyInp from './LazyInp';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const item = {
      name: 'Flower',
      category: 'flowers',
      picture: 'flowers.jpg',
      price: 100,
      amount: 2
    };

    const tm = setTimeout(() => {
      dispatch(addItem(item));

      dispatch(itemAdded(item));
    }, 500);

    return () => clearTimeout(tm);
  }, []);

  const renderCartList = () => {
    //cart item example
    // const cartItem = {
    // 	name: 'Flower',
    //  category: 'flowers',
    // 	picture: 'flowers.jpg',
    // 	price: 100,
    // 	amount: 1
    // };

    return cart.map(({ name, category, picture, price, amount }) => (
      <CartItem
        style={{ backgroundImage: `url(/img/${picture})` }}
        className='productList__item'
        key={name}
        name={name}
        category={category}
        picture={picture}
        price={price}
        amount={amount}
      >
        {/* children here */}
      </CartItem>
    ));
  };

  return (
    <div className='productList'>
      <h2 className='productList__heading'>Your Cart</h2>
      <ul className='productList__body'>{renderCartList()}</ul>
    </div>
  );
};

export default Cart;
