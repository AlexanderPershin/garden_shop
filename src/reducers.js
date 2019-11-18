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

// TODO: add setItem aciton to clear all onetyped items from cart and add required amount of that type

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'added': {
      let newState = [...state];

      const itemIndex = newState.findIndex(
        item => item.name === action.payload.name
      );

      if (itemIndex >= 0 && newState[itemIndex].amount > 0) {
        let newItem = newState[itemIndex];

        newState[itemIndex].amount =
          newState[itemIndex].amount - action.payload.amount;

        return newState;
      } else {
        return newState;
      }
    }

    case 'removed': {
      let newState = [...state];
      const itemIndex = state.findIndex(
        item => item.name === action.payload.name
      );
      newState[itemIndex].amount =
        state[itemIndex].amount - action.payload.amount;

      return newState;
    }
    case 'load': {
      return action.payload;
    }
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
      // TODO: remove amount of added items from database

      // action payload contains item object
      const { amount } = action.payload;

      const alreadyIndex = state.findIndex(
        item => item.name === action.payload.name
      );

      let newState = [...state];

      if (alreadyIndex !== -1) {
        newState[alreadyIndex].amount = newState[alreadyIndex].amount + amount;

        return newState;
      }

      return [...state, action.payload];
    }
    case 'removeItem': {
      // TODO: add amount of removed items to database

      // action payload contains item object

      const alreadyIndex = state.findIndex(
        item => item.name === action.payload.name
      );

      let newState = [...state];

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
      // TODO: add amount of destroyed items to database

      const alreadyIndex = state.findIndex(
        item => item.name === action.payload.name
      );

      let newState = [...state];

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
