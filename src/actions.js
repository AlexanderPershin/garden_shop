// Products list actions
export const loadData = data => {
  return {
    type: 'load',
    payload: data
  };
};

export const itemAdded = item => {
  return {
    type: 'added',
    payload: item
  };
};

export const itemRemoved = item => {
  return {
    type: 'removed',
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
// Cart actions
export const addItem = payload => {
  return {
    type: 'addItem',
    payload
  };
};
export const removeItem = payload => {
  return {
    type: 'removeItem',
    payload
  };
};
export const destroyItem = payload => {
  return {
    type: 'destroyItem',
    payload
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
