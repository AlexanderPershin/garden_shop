export const categMenu = (state = false, action) => {
	switch (action.type) {
		case 'toggle':
			return !state;
		case 'open':
			return true;
		case 'close':
			return false;
		default:
			return state;
	}
};

export const cartContent = (state = [], action) => {
	//cart item example
	// const cartItem = {
	// 	name: 'Flower',
	// category: 'flowers',
	// 	picture: 'flowers.jpg',
	// 	price: 100,
	// 	amount: 1
	// };

	switch (action.type) {
		case 'addItem': {
			// action payload contains item object
			const { amount } = action.payload;

			const alreadyIndex = state.findIndex((item) => item.name === action.payload.name);

			let newState = [ ...state ];

			if (alreadyIndex !== -1) {
				newState[alreadyIndex].amount = newState[alreadyIndex].amount + amount;

				return newState;
			}

			return [ ...state, action.payload ];
		}
		case 'removeItem': {
			// action payload contains item object

			const alreadyIndex = state.findIndex((item) => item.name === action.payload.name);

			let newState = [ ...state ];

			if (alreadyIndex !== -1 && newState[alreadyIndex].amount === 1) {
				newState.splice(alreadyIndex, 1);

				return newState;
			} else if (alreadyIndex !== -1 && newState[alreadyIndex].amount > 1) {
				newState[alreadyIndex].amount = newState[alreadyIndex].amount - 1;

				return newState;
			}
			return;
		}
		case 'destroyItem': {
			const alreadyIndex = state.findIndex((item) => item.name === action.payload.name);

			let newState = [ ...state ];

			if (alreadyIndex !== -1) {
				newState.splice(alreadyIndex, 1);

				return newState;
			}
			return;
		}
		default:
			return state;
	}
};

export const searchReducer = (state = '', action) => {
	switch (action.type) {
		case 'set':
			return action.payload;
		case 'clear':
			return '';
		default:
			return state;
	}
};

export const loggedReducer = (state = false, action) => {
	switch (action.type) {
		case 'in':
			return true;
		case 'out':
			return false;
		default:
			return state;
	}
};
