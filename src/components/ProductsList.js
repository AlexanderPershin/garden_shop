import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../actions';

import data from '../data.json';

const ProductsList = () => {
	const { category } = useParams();

	const searchString = useSelector((state) => state.search);
	const dispatch = useDispatch();
	const { clearSearch } = actions;

	const handleClearSearch = () => {
		dispatch(clearSearch());
	};

	const renderList = () => {
		//cart item example
		// const cartItem = {
		// 	name: 'Flower',
		//  category: 'flowers',
		// 	picture: 'flowers.jpg',
		// 	price: 100,
		// 	amount: 1
		// };

		return data
			.filter((item) => {
				return item.name.toLowerCase().includes(searchString);
			})
			.filter((item) => {
				return category ? item.category === category : item;
			})
			.map(({ name, category, picture, price, amount }) => (
				<li style={{ backgroundImage: `url(/img/${picture})` }} className='productList__item' key={name}>
					<ul>
						<h3>{name}</h3>
						<li>Category: {category}</li>
						<li>Price: {price}</li>
						<li>Amount: {amount}</li>
					</ul>
				</li>
			));
	};

	return (
		<div className='productList'>
			<h2 className='productList__heading'>Our Products</h2> <h3>{category}</h3>{' '}
			{searchString && (
				<fieldset className='productList__search'>
					<legend className='productList__legend'>Search: {searchString}</legend>
					<div className='productList__options'>Here will be search options</div>
					<button className='productList__clearBtn' onClick={handleClearSearch}>
						Clear Search <span>&times;</span>
					</button>
				</fieldset>
			)}
			<ul className='productList__body'>{renderList()}</ul>
		</div>
	);
};

export default ProductsList;
