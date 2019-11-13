import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../actions';

import Basket from '../svg/Basket';

const { openMenu, closeMenu, toggleMenu } = actions;

const HeaderMenu = () => {
	const categoriesOpen = useSelector((state) => state.categories);
	const dispatch = useDispatch();

	const categoriesRef = useRef(null);

	useEffect(
		() => {
			document.addEventListener('click', showCategories);

			return () => {
				document.removeEventListener('click', showCategories);
			};
		},
		[ categoriesOpen ]
	);

	const showCategories = (e) => {
		e.stopPropagation();

		if (e.target === categoriesRef.current) {
			dispatch(toggleMenu());
		} else if (categoriesOpen) {
			dispatch(closeMenu());
		} else {
			return;
		}
	};

	return (
		<div className='headerMenu'>
			<div className='categories__btn' ref={categoriesRef}>
				Categories {categoriesOpen ? '-' : '+'}
			</div>
			<NavLink to='/products'>All</NavLink>
			<div>Search</div>
			<Basket fill='none' />
		</div>
	);
};

export default HeaderMenu;
