import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "../redux-slice/product-list.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    customization: customizationReducer,
    product: productListReducer,
  },
});
