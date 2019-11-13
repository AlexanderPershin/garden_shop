import React from 'react';

import { Link } from 'react-router-dom';

import HeaderMenu from './HeaderMenu';
import Logo from '../svg/Logo';

const Header = () => {
	return (
		<header className='header'>
			<Link to='/'>
				<Logo fill='green' />
			</Link>
			<HeaderMenu />
		</header>
	);
};

export default Header;
