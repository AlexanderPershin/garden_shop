import React from 'react';

import { NavLink } from 'react-router-dom';

import Basket from '../svg/Basket';

const HeaderMenu = () => {
	return (
		<div className='headerMenu'>
			<div>Categories</div>
			<NavLink to='/products'>All</NavLink>
			<div>Search</div>
			<Basket fill='none' />
		</div>
	);
};

export default HeaderMenu;
