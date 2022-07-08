// For Items added to the cart

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For Items deleted from the cart
export const deleteCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
