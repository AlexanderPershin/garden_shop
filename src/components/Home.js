import React, { useState, useRef, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { getSpecials } from '../helpers';

import Carousel from './Carousel';
import LogoSimple from '../svg/LogoSimple';
import AnimBtn from './AnimBtn';

const Home = () => {
  const [videoPlay, setVideoPlay] = useState(false);
  const [hovered, setHovered] = useState(false);

  const videoRef = useRef(null);

  const products = useSelector(state => state.products);

  const spec = getSpecials(products);

  const handlePlayVideo = () => {
    setVideoPlay(prevPlay => !prevPlay);
  };

  const handleHoverVideo = () => {
    setHovered(true);
  };
  const handleUnhoverVideo = () => {
    setHovered(false);
  };

  useEffect(() => {
    videoPlay ? videoRef.current.play() : videoRef.current.pause();
  }, [videoPlay]);

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
        <h2 className='home__specHeading'>About Our Shop</h2>
        <div className='home__about'>
          <div className='home__playerWrap'>
            <video
              className='home__player'
              poster='/img/it-was-all-yellow.jpg'
              ref={videoRef}
              loop
              onClick={handlePlayVideo}
              onMouseOver={handleHoverVideo}
              onMouseLeave={handleUnhoverVideo}
            >
              <source src='/img/it-was-all-yellow.mp4' type='video/mp4' />
              <source src='/img/it-was-all-yellow.ogv' type='video/ogg' />
              <source src='/img/it-was-all-yellow.webm' type='video/webm' />
              Sorry, your browser doesn't support embedded videos
            </video>

            {!videoPlay && (
              <div className='controls'>
                <div className='bar'>
                  <div className='bar__content'></div>
                </div>
                <div className='buttons'>
                  <AnimBtn
                    className='play'
                    onClick={handlePlayVideo}
                    showArrow={false}
                  >
                    Play
                  </AnimBtn>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
