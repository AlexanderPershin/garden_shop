import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';

const LinkButton = ({ to, className, label, showArrow = true }) => {
	const AnimatedLink = animated(Link);

	const [ props, set, stop ] = useSpring(() => ({
		opacity: 0.7,
		boxShadow: '0 5px 5px rgba(0,0,0,0.3)',
		transform: `translateY(0px) scale(1)`,
		config: config.wobbly
	}));

	const handleHover = () => {
		set({ opacity: 1, boxShadow: '0 10px 5px rgba(0,0,0,0.5)', transform: `translateY(-5px) scale(1.1)` });
	};

	const handleLeave = () => {
		set({ opacity: 0.7, boxShadow: '0 5px 5px rgba(0,0,0,0.3)', transform: `translateY(0px) scale(1)` });
	};

	return (
		<AnimatedLink
			key='hello'
			onMouseOver={handleHover}
			onMouseLeave={handleLeave}
			style={props}
			className={className}
			to={to}
		>
			{label} {showArrow ? <span>&rarr;</span> : null}
		</AnimatedLink>
	);
};

export default memo(LinkButton);
