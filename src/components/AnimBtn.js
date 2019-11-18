import React, { memo } from 'react';
import { useSpring, animated, config } from 'react-spring';

const AnimBtn = ({ onClick, className, label, showArrow = true, children }) => {
  const [props, set] = useSpring(() => ({
    opacity: 0.7,
    boxShadow: '0 5px 5px rgba(0,0,0,0.3)',
    transform: `translateY(0px) scale(1)`,
    config: config.wobbly
  }));

  const handleHover = () => {
    set({
      opacity: 1,
      boxShadow: '0 10px 5px rgba(0,0,0,0.5)',
      transform: `translateY(-5px) scale(1.1)`
    });
  };

  const handleLeave = () => {
    set({
      opacity: 0.7,
      boxShadow: '0 5px 5px rgba(0,0,0,0.3)',
      transform: `translateY(0px) scale(1)`
    });
  };

  const handleClick = e => {
    onClick(e);
  };

  return (
    <animated.button
      key='hello'
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      style={props}
      className={className}
      onClick={handleClick}
    >
      {children} {showArrow ? <span>&rarr;</span> : null}
    </animated.button>
  );
};

export default memo(AnimBtn);
