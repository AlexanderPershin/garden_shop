import React, { useState, useRef, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { getSpecials } from '../helpers';

import Carousel from './Carousel';
import LogoSimple from '../svg/LogoSimple';

const Home = () => {
  const [videoPlay, setVideoPlay] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

  const videoRef = useRef({ current: { currentTime: 0, duration: 10 } });

  const videoDur = videoRef.current.duration || 10;

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

  const handleTime = e => {
    const newTime = e.target.currentTime;
    setVideoTime(newTime);
  };

  useEffect(() => {
    videoPlay ? videoRef.current.play() : videoRef.current.pause();
  }, [videoPlay, videoTime]);

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
              onTimeUpdate={handleTime}
            >
              <source src='/img/it-was-all-yellow.mp4' type='video/mp4' />
              <source src='/img/it-was-all-yellow.ogv' type='video/ogg' />
              <source src='/img/it-was-all-yellow.webm' type='video/webm' />
              Sorry, your browser doesn't support embedded videos
            </video>

            <div className='controls'>
              {' '}
              <div className='buttons'>
                <button className='play' onClick={handlePlayVideo}>
                  {videoPlay ? 'Pause' : 'Play'}
                </button>
              </div>
              <div className='bar'>
                <div
                  className='bar__content'
                  style={{ width: `${(videoTime / videoDur) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
