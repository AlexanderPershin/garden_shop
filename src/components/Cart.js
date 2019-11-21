import React from 'react';
import { useSelector } from 'react-redux';

import { getCartItems, getTotalCost, getTotalAmount } from '../helpers';

import AnimBtn from './AnimBtn';
import CartItem from './CartItem';

const Cart = () => {
  const products = useSelector(state => state.products);

  const renderCartList = () => {
    //cart item example
    // const cartItem = {
    // 	name: 'Flower',
    //  category: 'flowers',
    // 	picture: 'flowers.jpg',
    // 	price: 100,
    // 	amount: 1
    // };

    return getCartItems(products).map(
      ({ name, category, picture, price, amount, incart, special }) => (
        <CartItem
          style={{ backgroundImage: `url(/img/${picture})` }}
          className='productList__item'
          key={name}
          name={name}
          category={category}
          picture={picture}
          price={price}
          amount={amount}
          incart={incart}
          special={special}
        >
          {/* children here */}
        </CartItem>
      )
    );
  };

  const cartAmount = getTotalAmount(products);

  const handleBuyAll = () => {
    alert(`You've bought ${cartAmount} items`);
  };
  return (
    <div className='productList'>
      <h2 className='productList__heading'>Your Cart</h2>
      <h3 className='cart_summary'>
        <span>Total Price: {getTotalCost(products)}$</span>&nbsp;|&nbsp;
        <span>In Cart: {cartAmount}</span>
      </h3>
      <ul className='productList__body'>{renderCartList()}</ul>

      {cartAmount > 0 ? (
        <AnimBtn className='buyBtn' showArrow={false} onClick={handleBuyAll}>
          Buy All
        </AnimBtn>
      ) : null}
    </div>
  );
};

export default Cart;
