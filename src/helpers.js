export const getCartItems = prod => {
  const inCartItems = prod.filter(item => item.hasOwnProperty('incart'));

  return inCartItems;
};

export const reduceItems = prod => {
  // Reduces prod array of object with required properties 'incart' and 'price'
  let redTotal = { incart: 0, price: 0 };

  if (prod.length > 0) {
    redTotal = prod.reduce(
      (accum, current) => {
        return {
          incart: accum.incart + current.incart,
          price: accum.price + current.price * current.incart
        };
      },
      { incart: 0, price: 0 }
    );
  }

  return redTotal;
};

export const getTotalCost = prod => {
  const inCartItems = getCartItems(prod);

  const total = reduceItems(inCartItems);

  return total.price;
};

export const getTotalAmount = prod => {
  const inCartItems = getCartItems(prod);

  const total = reduceItems(inCartItems);

  return total.incart;
};

export const getSpecials = prod => {
  const spec = prod.filter(item => item.hasOwnProperty('special'));

  return spec;
};
