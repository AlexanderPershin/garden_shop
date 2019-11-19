import React from 'react';

import { useSelector } from 'react-redux';

import { getSpecials } from '../helpers';

import Carousel from './Carousel';
import LogoSimple from '../svg/LogoSimple';

const Home = () => {
  const products = useSelector(state => state.products);

  const spec = getSpecials(products);

  return (
    <div className='home'>
      <h1 className='home__heading'>
        <LogoSimple fill='green' />
        arden shop
      </h1>
      <div className='home__content'>
        <h2 className='home__specHeading'>Our special offers</h2>
        <div className='home__spec'>
          {spec.length > 0 && <Carousel specials={spec} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
