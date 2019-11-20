import React from 'react';
import { useTransition, animated, config } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';

import { getCartItems } from '../helpers';
import LinkButton from './LinkButton';

import { removeFromCart } from '../actions';

const CartDropDown = ({ cartOpened }) => {
  const products = useSelector(state => state.products);

  const dispatch = useDispatch();

  const transitions = useTransition(cartOpened, null, {
    from: {
      opacity: 0,
      transform:
        'perspective(50rem) translate3d(10rem,-10rem,-20rem) scale(0.9)'
    },
    enter: {
      opacity: 1,
      transform: 'perspective(50rem) translate3d(0rem,0rem,0rem) scale(1)'
    },
    leave: {
      opacity: 0,
      transform:
        'perspective(50rem) translate3d(10rem,-10rem,-20rem) scale(0.9)'
    },
    config: config.wobbly
  });

  const handleRemove = item => {
    dispatch(removeFromCart(item));
  };

  const renderCartList = () => {
    if (getCartItems(products).length > 0) {
      return getCartItems(products).map(item => {
        const { name, price, incart } = item;

        let specDiscount = 0;
        if (item.hasOwnProperty('special')) {
          specDiscount = item.special;
        }

        return (
          <li className='cartDropdown__item' key={name}>
            <span>Name: {name}</span>
            <span>
              {price * incart}$ {specDiscount > 0 && `-${specDiscount}%`}
            </span>
            <span>In Cart: {incart}</span>
            <button onClick={() => handleRemove(item)}>&times;</button>
          </li>
        );
      });
    } else {
      return <li>Here your purchases will be displayed...</li>;
    }
  };

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          style={{
            ...props,
            boxShadow: props.opacity.interpolate(
              o => `${o * 5}px ${o * 5}px ${o * 5}px rgba(0, 0, 0, ${o * 0.5})`
            )
          }}
          className='cartDropdown'
        >
          <div className='cartDropdown__top'>
            <h2 className='cartDropdown__heading'>
              Your Cart [{getCartItems(products).length + ' items'}]
            </h2>
            <LinkButton
              className='linkBtn'
              to='/cart'
              label={'Go To Cart'}
              showArrow={true}
            />
          </div>

          <ul className='cartDropdown__body'>{renderCartList()}</ul>
        </animated.div>
      )
  );
};

export default CartDropDown;
