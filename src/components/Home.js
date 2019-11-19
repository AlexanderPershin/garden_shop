import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getSpecials } from '../helpers';

import LogoSimple from '../svg/LogoSimple';

const Home = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const renderSpec = () => {
    const specs = getSpecials(products);

    return specs.map(item => (
      <li key={item.name}>
        {item.name} discount: {item.special}%
      </li>
    ));
  };

  return (
    <div className='home'>
      <h1 className='home__heading productList__heading'>
        <LogoSimple fill='green' />
        arden shop
      </h1>
      <div className='home__content'>
        <ul className='home__spec'>{renderSpec()}</ul>
      </div>
    </div>
  );
};

export default Home;
