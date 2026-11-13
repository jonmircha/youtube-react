import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export default store;
