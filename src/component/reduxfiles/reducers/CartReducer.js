// Define initial state for the cart
const initialCartState = {
  items: [],
  total: 0,
  productQty: 1,
};

// Define cart reducer function
const CartReducer = (state = initialCartState, action) => {
  // Store on LocalStorage
  switch (action.type) {
    case "ADDITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case "DELETEITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price,
      };
    case "ADDQUANTITY":
      const addedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        items: addedItems,
        total: state.total + action.payload.price,
      };
    case "DELETEQUANTITY":
      const deletedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        items: deletedItems,
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};

export default CartReducer;
