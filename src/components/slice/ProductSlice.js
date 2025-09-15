import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state , action) => {
     
    },
  },
})

export const { addToCart } = ProductSlice.actions

export default ProductSlice.reducer;