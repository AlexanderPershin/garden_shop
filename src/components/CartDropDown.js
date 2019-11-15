import React from 'react';
import { useTransition, animated, config } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';

import LinkButton from './LinkButton';

const CartDropDown = ({ cartOpened }) => {
	const cartContent = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	const transitions = useTransition(cartOpened, null, {
		from: {
			opacity: 0,
			transform: 'perspective(50rem) translate3d(10rem,-10rem,-20rem) scale(0.9)'
		},
		enter: {
			opacity: 1,
			transform: 'perspective(50rem) translate3d(0rem,0rem,0rem) scale(1)'
		},
		leave: {
			opacity: 0,
			transform: 'perspective(50rem) translate3d(10rem,-10rem,-20rem) scale(0.9)'
		},
		config: config.wobbly
	});

	const handleTestItem = () => {
		dispatch({
			type: 'addItem',
			payload: {
				name: 'Flower',
				picture: 'flowers.jpg',
				price: 100,
				amount: 1
			}
		});
	};

	const renderCartList = () => {
		if (cartContent.length > 0) {
			return cartContent.map(({ name, picture, price, amount }) => (
				<li key={name}>
					<span>Name: {name}</span>&nbsp;|&nbsp;
					<span>Price: {price * amount}$</span>&nbsp;|&nbsp;
					<span>Amount: {amount}</span>
				</li>
			));
		} else {
			return <li>Here your purchases will be displayed...</li>;
		}
	};

	return transitions.map(
		({ item, key, props }) =>
			item && (
				<animated.div
					key={key}
					style={{
						...props,
						boxShadow: props.opacity.interpolate(
							(o) => `${o * 5}px ${o * 5}px ${o * 5}px rgba(0, 0, 0, ${o * 0.5})`
						)
					}}
					className='cartDropdown'
				>
					<div className='cartDropdown__top'>
						<h2 className='cartDropdown__heading'>Your Cart [{cartContent.length + ' items'}]</h2>
						<LinkButton
							className='cartDropdown__details'
							to='/cart'
							label={'Go To Cart'}
							showArrow={true}
						/>
					</div>

					<ul className='cartDropdown__body'>
						{renderCartList()}
						<button onClick={handleTestItem}>Add Test Item</button>
					</ul>
				</animated.div>
			)
	);
};

export default CartDropDown;
