import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

const Carousel = ({ specials }) => {
  const [index, set] = useState(0);
  const [stopped, setStopped] = useState(false);

  const tr = useTransition(specials[index], item => item.name, {
    from: { opacity: 0.5, transform: `translate3d(-100%, 0, -10rem)` },
    enter: { opacity: 1, transform: `translate3d(0%, 0, 0rem)` },
    leave: { opacity: 0.5, transform: `translate3d(100%, 0, 10rem)` },
    perspective: '50rem',
    config: config.molasses,
    unique: true
  });

  useEffect(() => {
    const tm = setInterval(() => {
      !stopped && set(state => (state + 1) % specials.length);
    }, 2000);
    return () => clearInterval(tm);
  }, [specials, stopped]);

  const handleStopCarousel = () => {
    setStopped(prevStopped => !prevStopped);
  };

  // TODO: add event listeners for next and prev slides

  return (
    <div className='carousel'>
      <div className='carousel__active'>
        {tr.map(
          ({ item, props, key }) =>
            item && (
              <animated.div
                onClick={handleStopCarousel}
                className='carousel__item'
                key={key}
                style={{
                  ...props,
                  backgroundImage: `url(/img/${item.picture}`
                }}
              >
                {item.name}
              </animated.div>
            )
        )}
      </div>
      <div>Index {index}</div>
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
