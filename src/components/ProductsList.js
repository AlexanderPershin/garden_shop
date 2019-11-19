import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import LinkButton from './LinkButton';
import AnimBtn from './AnimBtn';

import { addToCart, clearSearch } from '../actions';

const ProductsList = () => {
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

  const renderList = () => {
    //cart item example
    // const cartItem = {
    // 	name: 'Flower',
    //  category: 'flowers',
    // 	picture: 'flowers.jpg',
    // 	price: 100,
    // 	amount: 1
    // };

    return products
      .filter(item => {
        return item.name.toLowerCase().includes(searchString);
      })
      .filter(item => {
        return category ? item.category === category : item;
      })
      .map(({ name, category, picture, price, amount }) => (
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
              <AnimBtn
                showArrow={false}
                onClick={() =>
                  handleAddItem({
                    name,
                    category,
                    picture,
                    price,
                    amount,
                    incart: 1
                  })
                }
                label=''
              >
                Add To Cart
              </AnimBtn>
            </li>
          </ul>
        </li>
      ));
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
      <ul className='productList__body'>{renderList()}</ul>
    </div>
  );
};

export default ProductsList;
