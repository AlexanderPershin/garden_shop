import React from 'react';
import { useSelector } from 'react-redux';
import { useTransition, animated, config } from 'react-spring';
import { Link } from 'react-router-dom';

const categoriesList = ['flowers', 'seeds', 'fertilizers', 'tools'];

const CategoriesBody = () => {
  const categoriesOpen = useSelector(state => state.categories);

  // const transitions = useTransition(categoriesOpen, null, {
  // 	from: {
  // 		opacity: 0.7,
  // 		transform: `translateY(-7rem)`
  // 	},
  // 	enter: { opacity: 1, transform: `translateY(8rem)` },
  // 	leave: {
  // 		opacity: 0.7,
  // 		transform: `translateY(-7rem)`
  // 	},
  // 	config: config.wobbly
  // });

  const transitions = useTransition(categoriesOpen, null, {
    from: {
      opacity: 0.7,
      transform: `translateY(-50%)`
    },
    enter: { opacity: 1, transform: `translateY(0%)` },
    leave: {
      opacity: 0.7,
      transform: `translateY(-50%)`
    },
    config: config.wobbly
  });

  const renderCategories = () => {
    return categoriesList.map(item => (
      <Link
        to={`/products/${item}`}
        className={`categoriesItem ${item}`}
        key={item}
      >
        <span>{item}</span>
      </Link>
    ));
  };

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div className='categories__body' key={key} style={props}>
          {renderCategories()}
        </animated.div>
      )
  );
};

export default CategoriesBody;
