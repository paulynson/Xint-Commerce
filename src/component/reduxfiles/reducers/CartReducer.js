import React from "react";

const cart = [];

const reducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // check is product is already inthe cart
      const addExist = state.find((x) => x.id === product.id);
      if (addExist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELETEITEM":
      const delExist = state.find((x) => x.id === product.id);
      if (delExist.qty === 1) {
        return state.filter((x) => x.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
