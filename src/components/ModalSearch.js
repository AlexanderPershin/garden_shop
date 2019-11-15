import React, { Fragment, useState } from 'react';

const ModalSearch = ({ searchOpened, closeSearch, execSearch }) => {
	const [ str, setStr ] = useState('');

	return (
		searchOpened && (
			<Fragment>
				<form
					className='search__modal'
					onSubmit={(e) => {
						execSearch(e, str);
						setStr('');
					}}
				>
					<input
						value={str}
						onChange={(e) => setStr(e.target.value)}
						className='search__inp'
						type='text'
						placeholder='type & press &crarr;'
					/>
					<div className='search__btn' onClick={closeSearch}>
						&times;
					</div>
				</form>
				<div className='search__overlay' />
			</Fragment>
		)
	);
};

export default ModalSearch;
