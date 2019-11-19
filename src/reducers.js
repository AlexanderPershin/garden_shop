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

// Products and cart reducer; It's made this way to have access to cart content from products and in reverse
export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'load': {
      return action.payload;
    }
    case 'addtocart': {
      let newState = [...state];
      const itmIndex = state.findIndex(
        item => item.name === action.payload.name
      );

      const { amount, incart } = action.payload;

      // const sum = incart + amount;
      // set(newIncart)
      // amount = sum - newIncart

      const sumAmount =
        newState[itmIndex].amount +
        (newState[itmIndex].incart ? newState[itmIndex].incart : 0);
      const newIncart = action.payload.incart ? action.payload.incart : 0;
      const newAmount = sumAmount - newIncart;

      const newItem = {
        ...newState[itmIndex],
        amount: newAmount,
        incart: newIncart
      };

      newState[itmIndex] = newItem;

      return newState;
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
