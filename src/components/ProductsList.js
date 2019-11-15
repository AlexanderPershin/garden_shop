import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../actions';

const ProductsList = () => {
	const { category } = useParams();

	const searchString = useSelector((state) => state.search);
	const dispatch = useDispatch();
	const { clearSearch } = actions;

	const handleClearSearch = () => {
		dispatch(clearSearch());
	};

	return (
		<div>
			<h2>ProductsList</h2> <h3>{category}</h3>{' '}
			{searchString && (
				<fieldset>
					<legend>Search: {searchString}</legend>
					<div>Here will be search options</div>
					<button onClick={handleClearSearch}>Clear Search</button>
				</fieldset>
			)}
		</div>
	);
};

export default ProductsList;
