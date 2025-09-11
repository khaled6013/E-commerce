import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state , action) => {
      console.log(action.payload);
    },
  },
})

export const { addToCart } = ProductSlice.actions

export default ProductSlice.reducer;