import React, { useState, useRef, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { getSpecials } from '../helpers';

import Carousel from './Carousel';
import LogoSimple from '../svg/LogoSimple';

const Home = () => {
  const [videoPlay, setVideoPlay] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [barWidth, setBarWidth] = useState(0);

  const videoRef = useRef({ current: { currentTime: 0, duration: 10 } });
  const videoBarRef = useRef(null);

  const videoDur = videoRef.current.duration || 10;

  const products = useSelector(state => state.products);

  const spec = getSpecials(products);

  const handlePlayVideo = () => {
    setVideoPlay(prevPlay => !prevPlay);
  };

  const handleTime = e => {
    const newTime = e.target.currentTime;
    const newBarWidth = newTime / videoDur;

    videoPlay && setVideoTime(newTime);
    setBarWidth(newBarWidth * 100);
  };

  const handleSetTime = e => {
    const event = e;
    const previousPlayState = videoPlay;
    setVideoPlay(false);

    // e = Mouse click event.
    const rect = event.target.getBoundingClientRect();
    const { width, left } = rect;
    let x;

    if (event.clientX > 0) {
      x = event.clientX - left; //x position within the element.
    } else {
      x = left;
    }
    const persentX = x / width;

    const calculatedTime = videoRef.current.duration * persentX;

    setBarWidth(persentX * 100);
    setVideoTime(calculatedTime);
    videoRef.current.currentTime = calculatedTime;
    previousPlayState && setVideoPlay(true);
  };

  useEffect(() => {
    videoPlay ? videoRef.current.play() : videoRef.current.pause();
  }, [videoPlay, videoTime, barWidth]);

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
              onTimeUpdate={handleTime}
            >
              <source
                src={`${process.env.PUBLIC_URL}/img/it-was-all-yellow.mp4`}
                type='video/mp4'
              />
              <source
                src={`${process.env.PUBLIC_URL}/img/it-was-all-yellow.ogv`}
                type='video/ogg'
              />
              <source
                src={`${process.env.PUBLIC_URL}/img/it-was-all-yellow.webm`}
                type='video/webm'
              />
              Sorry, your browser doesn't support embedded videos
            </video>

            <div className='controls'>
              {' '}
              <div className='buttons'>
                <button className='play' onClick={handlePlayVideo}>
                  {videoPlay ? 'Pause' : 'Play'}
                </button>
              </div>
              <div className='bar' ref={videoBarRef} onClick={handleSetTime}>
                <div
                  className='bar__content'
                  style={{ width: `${barWidth}%` }}
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
