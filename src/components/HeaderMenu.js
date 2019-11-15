import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../actions';

import Basket from '../svg/Basket';
import CartDropDown from './CartDropDown';
import ModalSearch from './ModalSearch';

const { closeMenu, toggleMenu, setSearch, clearSearch } = actions;

const HeaderMenu = () => {
	const categoriesOpen = useSelector((state) => state.categories);

	const dispatch = useDispatch();

	const [ cartOpened, setCartOpened ] = useState(false);
	const [ isSearch, setIsSearch ] = useState(false);

	const cartBtnRef = useRef(null);
	const categoriesRef = useRef(null);

	useEffect(
		() => {
			document.addEventListener('click', showCategories);

			return () => {
				document.removeEventListener('click', showCategories);
			};
		},
		[ categoriesOpen, cartOpened ]
	);

	const showCategories = (e) => {
		const event = e;

		event.stopPropagation();

		if (event.target === categoriesRef.current) {
			setCartOpened(false);
			dispatch(toggleMenu());
		} else if (event.target === cartBtnRef.current) {
			dispatch(closeMenu());
			setCartOpened((prev) => !prev);
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
	};

	const handleCloseSearch = () => {
		dispatch(clearSearch());
		setIsSearch(false);
	};

	return (
		<div className='headerMenu'>
			<div className='categories__btn' ref={categoriesRef}>
				Categories {categoriesOpen ? <span>&#9650;</span> : <span>&#9661;</span>}
			</div>
			<NavLink to='/products'>All</NavLink>
			<div className='search -shr' onClick={handleOpenSearch}>
				Search
			</div>
			<Basket fill='none' ref={cartBtnRef} anim={true} />
			<CartDropDown cartOpened={cartOpened} />
			<ModalSearch searchOpened={isSearch} closeSearch={handleCloseSearch} execSearch={handleSearch} />
		</div>
	);
};

export default HeaderMenu;
