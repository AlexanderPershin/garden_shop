// Products list actions
export const loadData = data => {
  return {
    type: 'load',
    payload: data
  };
};

export const addToCart = item => {
  return {
    type: 'addtocart',
    payload: item
  };
};

export const removeFromCart = item => {
  return {
    type: 'removefromcart',
    payload: item
  };
};

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
export const setSearch = payload => {
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
