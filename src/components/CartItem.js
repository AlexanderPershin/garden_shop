import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../actions';
import AnimBtn from './AnimBtn';

const CartItem = ({ style, className, ...item }) => {
  const { name, picture, price, amount, incart, special } = item;
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
      style={{
        backgroundImage: `url(${picture})`
      }}
      className='cart__item'
      key={name}
    >
      <ul>
        <h3 className='item__heading'>{name}</h3>
        <li className='item__price'>{price}$</li>
        <li>
          {special && (
            <span className='discountWrap'>
              <span className='discount'>-{special}%</span>
            </span>
          )}
        </li>
        <li className='item__amount'>{amount} left</li>
        <li className='item__addBtn'>
          <AnimBtn
            showArrow={false}
            onClick={() =>
              handleRemove({
                name,
                category: item.category,
                picture,
                price,
                amount,
                incart: 1
              })
            }
            label=''
          >
            &times;
          </AnimBtn>
        </li>
        <li className='item__incart'>
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
      </ul>
    </li>
  );
};

export default CartItem;
