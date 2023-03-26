import { combineReducers } from "redux";
import CartReducer from "./CartReducer";

const rootReducers = combineReducers({ cart: CartReducer });

export default rootReducers;
