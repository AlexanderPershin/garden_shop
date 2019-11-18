import React, { useRef, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../actions';

import Basket from '../svg/Basket';
import CartDropDown from './CartDropDown';
import ModalSearch from './ModalSearch';

const { closeMenu, toggleMenu, setSearch, clearSearch } = actions;

const HeaderMenu = () => {
  const history = useHistory();

  const categoriesOpen = useSelector(state => state.categories);

  const dispatch = useDispatch();

  const [cartOpened, setCartOpened] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const cartBtnRef = useRef(null);
  const categoriesRef = useRef(null);
  // triangulars refs
  const tr1 = useRef(null);
  const tr2 = useRef(null);

  useEffect(() => {
    document.addEventListener('click', showCategories);

    return () => {
      document.removeEventListener('click', showCategories);
    };
  }, [categoriesOpen, cartOpened]);

  const showCategories = e => {
    const event = e;

    event.stopPropagation();

    // If you click on button or icon on button
    if (
      event.target === categoriesRef.current ||
      event.target === tr1.current ||
      event.target === tr2.current
    ) {
      setCartOpened(false);
      dispatch(toggleMenu());
    } else if (event.target === cartBtnRef.current) {
      dispatch(closeMenu());
      setCartOpened(prev => !prev);
    } else if (categoriesOpen) {
      dispatch(closeMenu());
    } else {
      setCartOpened(false);
    }
  };

  const handleOpenSearch = () => {
    setIsSearch(true);
  };

  const handleSearch = (e, str) => {
    e.preventDefault();
    dispatch(setSearch(str));
    setIsSearch(false);
    history.push('/products');
  };

  const handleCloseSearch = () => {
    setIsSearch(false);
  };

  const handleAllClick = () => {
    dispatch(clearSearch());
  };

  return (
    <div className='headerMenu'>
      <div className='categories__btn' ref={categoriesRef}>
        Categories{' '}
        {categoriesOpen ? (
          <span ref={tr1}>&#9650;</span>
        ) : (
          <span ref={tr2}>&#9661;</span>
        )}
      </div>
      <NavLink to='/products' onClick={handleAllClick}>
        All
      </NavLink>
      <div className='search -shr' onClick={handleOpenSearch}>
        Search
      </div>
      <Basket fill='none' ref={cartBtnRef} anim={true} />
      <CartDropDown cartOpened={cartOpened} />
      <ModalSearch
        searchOpened={isSearch}
        closeSearch={handleCloseSearch}
        execSearch={handleSearch}
      />
    </div>
  );
};

export default HeaderMenu;
