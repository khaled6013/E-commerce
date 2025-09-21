import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: "hi",
  number: 200
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    allProduct: (state) => {
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { allProduct } = ProductSlice.actions

export default ProductSlice.reducer