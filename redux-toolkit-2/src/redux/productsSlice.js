import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    createProduct: (state, action) => {
      state.data.push(action.payload);
    },
    readProducts: (state, action) => {
      state.data = action.payload;
    },
    updateProduct: (state, action) => {
      const { id, name } = action.payload;
      const product = state.data.find((product) => product.id === id);

      if (product) {
        product.name = name;
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.data = state.data.products.filter((product) => product.id !== id);
    },
  },
});

export const { createProduct, readProducts, updateProduct, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
