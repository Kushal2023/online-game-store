import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItem",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.gamePrice;
    },
    removeItemFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      state.quantity -= 1;
      state.total -= action.payload.gamePrice;
    },
    setItemToCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, setItemToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
