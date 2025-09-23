import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardItem:[]
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state , action) => {
      let findProduct = state.cardItem.findIndex((item)=>item.id == action.payload.id)
      if(findProduct != -1){
       state.cardItem[findProduct].qun++
      }else{
        state.cardItem = [...state.cardItem , action.payload]
      }
    }
  },
})

export const { addToCart } = ProductSlice.actions

export default ProductSlice.reducer