// Categories menu actions
export const toggleMenu = () => {
	return {
		type: 'toggle'
	};
};
export const openMenu = () => {
	return {
		type: 'open'
	};
};
export const closeMenu = () => {
	return {
		type: 'close'
	};
};
// Search actions
export const setSearch = (payload) => {
	return {
		type: 'set',
		payload
	};
};
export const clearSearch = () => {
	return {
		type: 'clear'
	};
};
// Login acitons
export const login = () => {
	return {
		type: 'in'
	};
};
export const logout = () => {
	return {
		type: 'out'
	};
};
