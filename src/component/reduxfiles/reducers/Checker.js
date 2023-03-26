// Import necessary dependencies and action types
import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_USER,
  FETCH_PRODUCTS_SUCCESS,
} from "../actions/actionTypes";

// Define initial state for the cart
const initialCartState = {
  items: [],
  total: 0,
};

// Define cart reducer function
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Find the product in the cart and increase its quantity or add it if it doesn't exist
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
        return {
          ...state,
          total: state.total + action.payload.price,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price,
        };
      }
    case REMOVE_FROM_CART:
      // Find the product in the cart and remove it or decrease its quantity
      const productToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (productToRemove.quantity > 1) {
        productToRemove.quantity--;
        return {
          ...state,
          total: state.total - action.payload.price,
        };
      } else {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
          total: state.total - action.payload.price,
        };
      }
    default:
      return state;
  }
};

// Define initial state for the products
const initialProductsState = {
  items: [],
};

// Define products reducer function
const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

// Define initial state for the user
const initialUserState = {
  isAuthenticated: false,
  username: "",
};

// Define user reducer function
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload,
      };
    default:
      return state;
  }
};

// Combine all reducers into a single reducer function
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
});

export default rootReducer;
