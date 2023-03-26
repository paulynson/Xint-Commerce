import React from "react";

// Define initial state for the cart
const initialCartState = {
  items: [],
  total: 0,
};

// Define cart reducer function
const CartReducer = (state = initialCartState, action) => {
  // Store on LocalStorage
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // check is product is already inthe cart
      const addExist = state.items.find((x) => x.id === product.id);
      if (addExist) {
        addExist.quantity++;
        return {
          ...state,
          total: state.total + product.price,
        };
      } else {
        const product = action.payload;
        return {
          items: [...state.items, { ...product, quantity: 1 }],
          total: state.total + product.price,
        };
      }

    case "DELETEITEM":
      // Find the product in the cart and remove it or decrease its quantity
      const delExist = state.items.find((x) => x.id === product.id);
      if (delExist.quantity > 1) {
        delExist.quantity--;
        return {
          ...state,
          total: state.total - action.payload.price,
        };
      } else {
        return {
          ...state,
          items: state.items.filter((x) => x.id !== action.payload.id),
          total: state.total - action.payload.price,
        };
      }

    // case "INCREASE_QUANTITY":
    //   return {
    //     ...state,
    //     items: state.items.map((item) => {
    //       if (item.id === action.payload.id) {
    //         return { ...item, quantity: item.quantity + 1 };
    //       } else {
    //         return item;
    //       }
    //     }),
    //     total: state.total + action.payload.price,
    //   };

    // case "DECREASE_QUANTITY":
    //   return {
    //     ...state,
    //     items: state.items.map((item) => {
    //       if (item.id === action.payload.id) {
    //         return { ...item, quantity: item.quantity + 1 };
    //       } else {
    //         return item;
    //       }
    //     }),
    //     total: state.total + action.payload.price,
    //   };

    default:
      return state;
  }
};

export default CartReducer;
