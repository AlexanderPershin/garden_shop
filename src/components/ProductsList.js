import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTrail, animated, config } from 'react-spring';

import LinkButton from './LinkButton';
import AnimBtn from './AnimBtn';

import { addToCart, clearSearch } from '../actions';

const ProductsList = () => {
  const [itemsCount, setItemsCount] = useState(5);
  const { category } = useParams();

  const searchString = useSelector(state => state.search);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleClearSearch = () => {
    dispatch(clearSearch());
  };

  const handleAddItem = item => {
    // handle item
    dispatch(addToCart(item));
  };

  const getFilteredList = () => {
    const filtered = products
      .filter(item => {
        return item.name.toLowerCase().includes(searchString);
      })
      .filter(item => {
        return category ? item.category === category : item;
      });

    return [...filtered].slice(0, itemsCount);
  };

  const trail = useTrail(getFilteredList().length, {
    from: {
      opacity: 0.5,
      transform: `perspective(500px) translate3d(50px, -5px, 50px)`
    },
    to: {
      opacity: 1,
      transform: `perspective(500px) translate3d(0px, 0px, 0px)`
    },
    transformOrigin: 'center',
    config: config.gentle,
    reset: true
  });

  const renderAnimatedList = () => {
    return trail.map((props, index) => {
      const {
        name,
        category,
        picture,
        price,
        amount,
        special
      } = getFilteredList()[index];

      return (
        <animated.li
          style={{
            ...props,
            backgroundImage: `url(${picture})`
          }}
          className='productList__item'
          key={name}
        >
          <ul>
            <h3 className='item__heading'>{name}</h3>
            <li className='item__price'>{price}$</li>
            {special && (
              <li className='disc'>
                <span className='discountWrap'>
                  <span className='discount'>-{special}%</span>
                </span>
              </li>
            )}
            <li className='item__amount'>{amount} left</li>
            <li className='item__addBtn'>
              <AnimBtn
                showArrow={false}
                onClick={() =>
                  handleAddItem({
                    name,
                    category,
                    picture,
                    price,
                    amount,
                    special: special,
                    incart: 1
                  })
                }
                label=''
              >
                Add To Cart
              </AnimBtn>
            </li>
          </ul>
        </animated.li>
      );
    });
  };

  const loadMore = () => {
    setItemsCount(prevItemsCount => prevItemsCount + 3);
  };

  return (
    <div className='productList'>
      <h2 className='productList__heading'>Our Products</h2>{' '}
      {category && (
        <h3 className='productList__category'>
          Category: {category} |{' '}
          <LinkButton
            className='linkBtn'
            to='/products'
            label='all categories'
          />
        </h3>
      )}{' '}
      {searchString && (
        <fieldset className='productList__search'>
          <legend className='productList__legend'>
            Search: {searchString}
          </legend>
          <div className='productList__options'>
            Here will be search options
          </div>
          <button className='productList__clearBtn' onClick={handleClearSearch}>
            Clear Search <span>&times;</span>
          </button>
        </fieldset>
      )}
      {getFilteredList().length > 0 && (
        <ul className='productList__body'>{renderAnimatedList()}</ul>
      )}
      <AnimBtn
        showArrow={false}
        className='productList__loadMore'
        onClick={loadMore}
      >
        Load More
      </AnimBtn>
    </div>
  );
};

export default ProductsList;
