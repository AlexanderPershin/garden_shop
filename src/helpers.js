export const getCartItems = prod => {
  const inCartItems = prod.filter(item => item.hasOwnProperty('incart'));

  return inCartItems;
};

export const getTotalCost = prod => {
  const inCartItems = getCartItems(prod);

  let totalCost = 0;
  if (inCartItems.length > 0) {
    for (let i = 0; i < inCartItems.length; i++) {
      totalCost = totalCost + inCartItems[i].incart * inCartItems[i].price;
    }
  }

  return totalCost;
};

export const getTotalAmount = prod => {
  const inCartItems = getCartItems(prod);

  let totalAmount = 0;
  if (inCartItems.length > 0) {
    for (let i = 0; i < inCartItems.length; i++) {
      totalAmount = totalAmount + inCartItems[i].incart;
    }
  }

  return totalAmount;
};
