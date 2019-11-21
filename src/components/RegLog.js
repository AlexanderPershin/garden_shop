import React from 'react';
import { useParams, Redirect, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login } from '../actions';

import AnimBtn from './AnimBtn';
import LinkButton from './LinkButton';

const RegLog = () => {
  const { enter } = useParams();
  const logged = useSelector(state => state.logged);
  const dispatch = useDispatch();

  const handleRegister = e => {
    e.preventDefault();
    alert('you registered!');
    dispatch(login());
  };

  const handleLogin = e => {
    e.preventDefault();
    alert('you logged in!');
    dispatch(login());
  };

  const renderForm = () => {
    if (enter === 'register' && !logged) {
      return (
        <div className='reglog__reg'>
          <h1 className='reglog__regHeading'>
            Please, Enter Your Register Data
          </h1>
          <form className='reglog__regForm' onSubmit={handleRegister}>
            <input type='text' placeholder='name' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <AnimBtn onClick={() => {}} showArrow={false}>
              Submit
            </AnimBtn>
          </form>
        </div>
      );
    } else if (enter === 'login' && !logged) {
      return (
        <div className='reglog__log'>
          <h1 className='reglog__logHeading'>
            Please, Enter Your Login&Password
          </h1>
          <form className='reglog__logForm' onSubmit={handleLogin}>
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <AnimBtn onClick={() => {}} showArrow={false}>
              Submit
            </AnimBtn>
          </form>
        </div>
      );
    } else if (enter === 'logout') {
      dispatch(logout());
      return <Redirect to='/reglog/login' />;
    } else {
      return <Redirect to='/reglog/login' />;
    }
  };

  return (
    <div className='reglog'>
      {!logged && (
        <div className='reglog__nav'>
          <NavLink
            to='/reglog/register'
            className='reglog__navItem'
            activeClassName='-regActive'
          >
            Register
          </NavLink>
          <NavLink
            to='/reglog/login'
            className='reglog__navItem'
            activeClassName='-regActive'
          >
            Login
          </NavLink>
        </div>
      )}
      <div className='reglog__body'>
        {logged && (
          <div className='reglog__log'>
            <h1 className='reglog__logHeading'>You're logged in!</h1>
            <div>
              Please, look at our{' '}
              <LinkButton
                className='gotoGoods'
                to='/products'
                label='goods'
                showArrow={true}
              />
            </div>
          </div>
        )}

        {renderForm()}
      </div>
    </div>
  );
};

export default RegLog;
