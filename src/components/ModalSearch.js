import React, { useState, useEffect, useRef, memo } from 'react';
import { useTransition, animated, config } from 'react-spring';

const ModalSearch = ({ searchOpened, closeSearch, execSearch }) => {
  const [str, setStr] = useState('');

  const [inpTxt, setInpTxt] = useState('type');

  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchRef, searchOpened]);

  useEffect(() => {
    const handleSwitchInpTxt = () => {
      switch (inpTxt) {
        case 'type': {
          setInpTxt('and');
          return;
        }
        case 'and': {
          setInpTxt('press');
          return;
        }
        case 'press': {
          setInpTxt('Enter \u21B5');
          return;
        }
        case 'Enter \u21B5': {
          setInpTxt('type');
          return;
        }
        default:
          return 'type';
      }
    };

    const interv = searchOpened ? setInterval(handleSwitchInpTxt, 1000) : null;
    return () => {
      clearInterval(interv);
    };
  }, [inpTxt, searchOpened]);

  const transitions = useTransition(searchOpened, null, {
    from: { opacity: 0, transform: 'scale(0.1) translate(100%, -100%)' },
    enter: { opacity: 1, transform: 'scale(1) translate(0%, 0%)' },
    leave: { opacity: 0, transform: 'scale(0.1) translate(100%, -100%)' },
    config: config.wobbly
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div style={props} key={key} className='search__wrapper'>
          <form
            className='search__modal'
            onSubmit={e => {
              execSearch(e, str);
              setStr('');
            }}
          >
            <input
              value={str}
              onChange={e => setStr(e.target.value)}
              className='search__inp'
              type='text'
              ref={searchRef}
              style={props}
              placeholder={inpTxt}
            />
            <animated.div
              style={{
                transform: props.transform.interpolate(
                  tr =>
                    `scale(${tr}) ${tr} translate(${tr * -115}%, ${tr * -150}%)`
                )
              }}
              className='search__btn'
              onClick={closeSearch}
            >
              &times;
            </animated.div>
          </form>
          <div className='search__overlay' />
        </animated.div>
      )
  );
};

export default memo(ModalSearch);
