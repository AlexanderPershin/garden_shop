import React from 'react';
import { useTransition } from 'react-spring';

const Carousel = ({ list }) => {
  return (
    <div className='carousel'>
      <div className='carousel__active'></div>
      <div className='carousel__ui'>
        <button className='carousel__left'>prev</button>
        <button className='carousel__right'>next</button>
        <div className='carousel__dots'>
          <button className='carousel__dot'>.</button>
          <button className='carousel__dot'>.</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
