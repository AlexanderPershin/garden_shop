import React, { useState, useEffect } from 'react';
import PropsTypes from 'prop-types';

const LazyInp = props => {
  // const [cnt, setCnt] = useState(props.min);
  let { cnt, setCnt, disabled, ...otherProps } = props;

  const [inputValue, setInputValue] = useState(cnt);

  useEffect(() => {
    setInputValue(props.cnt);
  }, [props]);

  const increase = () => {
    const step = props.step;
    if (cnt + step <= props.max) {
      set(cnt + step);
    }
  };

  const decrease = () => {
    const step = props.step;
    if (cnt - step >= props.min) {
      set(cnt - step);
    }
  };

  const set = newCnt => {
    let newParsedVal;
    let newVal = Math.min(Math.max(newCnt, props.min), props.max);

    if (newVal % 1 === 0) {
      newParsedVal = parseInt(newVal);
    } else {
      newParsedVal = parseFloat(parseFloat(newVal).toFixed(2));
    }

    setCnt(newParsedVal);
    setInputValue(newParsedVal);
  };

  const setValue = newStr => {
    setInputValue(newStr);
  };

  const applyValue = () => {
    let newVal;
    if (inputValue % 1 === 0) {
      newVal = parseInt(inputValue);
    } else {
      newVal = parseFloat(inputValue).toFixed(2);
    }

    set(isNaN(newVal) ? props.min : newVal);
  };

  const checkEnterKey = e => {
    if (e.keyCode === 13) {
      applyValue();
    }
  };

  return (
    <div className='m-lazyInp'>
      <button
        className='a-lazyInp__dec'
        onClick={decrease}
        disabled={disabled || props.min === cnt}
      >
        -
      </button>
      <input
        className='a-lazyInp__input'
        value={inputValue}
        onChange={e => setValue(e.target.value)}
        onBlur={e => applyValue(e.target.value)}
        onKeyUp={checkEnterKey}
        disabled={disabled}
        {...otherProps}
      />
      <button
        className='a-lazyInp__inc'
        onClick={increase}
        disabled={disabled || props.max === cnt}
      >
        +
      </button>
    </div>
  );
};

LazyInp.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  cnt: 0
};

LazyInp.propTypes = {
  min: PropsTypes.number,
  max: PropsTypes.number,
  step: PropsTypes.number,
  cnt: PropsTypes.number,
  setCnt: PropsTypes.func.isRequired
};

export default LazyInp;
