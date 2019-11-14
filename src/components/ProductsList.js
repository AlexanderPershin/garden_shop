import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsList = () => {
	const { category } = useParams();

	return <div>ProductsList {category}</div>;
};

export default ProductsList;
