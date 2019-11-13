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
