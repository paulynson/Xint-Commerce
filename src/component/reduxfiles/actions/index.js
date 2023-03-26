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

// For Increasing items quantity
// export const increaseQuantity = (product) => {
//   return {
//     type: "INCREASE_QUANTITY",
//     payload: product,
//   };
// };

// For Increasing items quantity
// export const decreaseQuantity = (product) => {
//   return {
//     type: "DECREASE_QUANTITY",
//     payload: product,
//   };
// };
