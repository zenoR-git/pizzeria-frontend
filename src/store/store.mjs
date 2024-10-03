import { configureStore } from '@reduxjs/toolkit'
import cartReducer  from './cart.mjs'

export default configureStore({
  reducer: {
    cart: cartReducer
  }
})