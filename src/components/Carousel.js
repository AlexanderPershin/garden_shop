import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import classNames from 'classnames';

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

  const handleDotClick = idx => {
    setStopped(true);
    set(idx);
  };

  // TODO: add event listeners for next and prev slides

  const calcSpecPrice = (pr = 100, disc = 50) => {
    // Here pr=100 is 100$ price, disc=50 is 50% discount
    const discInPercent = disc / 100;
    const discInDollars = pr * discInPercent;
    const newPrice = pr - discInDollars;
    return newPrice;
  };

  const renderDots = () => {
    const dots = specials.map((item, ind) => {
      const btnClasses = classNames('carousel__dot', {
        '-activeDot': ind === index
      });

      return (
        <button
          key={ind}
          className={btnClasses}
          onClick={() => handleDotClick(ind)}
        ></button>
      );
    });

    return dots;
  };

  return (
    <div className='carousel'>
      <div className='carousel__active'>
        {tr.map(({ item, props, key }) => (
          <animated.div
            onClick={handleStopCarousel}
            className='carousel__item'
            key={key}
            style={{
              ...props,
              backgroundImage: `url(/img/${item.picture}`
            }}
          >
            <h3>{item.name}</h3>
            <div className='carousel__discWrap'>
              <div className='carousel__discount'>-{item.special}%</div>
            </div>
            <div className='carousel__price'>
              Only
              <span className='carousel__prevPrice'>{item.price}$</span>&nbsp;
              <span className='carousel__specPrice'>
                {calcSpecPrice(item.price, item.special)}$
              </span>
            </div>
          </animated.div>
        ))}
      </div>
      <div className='carousel__ui'>
        <button className='carousel__left'>prev</button>
        <button className='carousel__right'>next</button>
        <div className='carousel__dots'>{renderDots()}</div>
      </div>
    </div>
  );
};

export default Carousel;
