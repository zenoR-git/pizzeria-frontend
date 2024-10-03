import { createSlice } from '@reduxjs/toolkit'

 const initialState = {
  count:0,
  customPizza:{
      count: 0,
      totalPrice: 0,
      items:[]
  },
  preMadePizza:[],
  preMadeOverall: 0
  }

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    count:0,
    customPizza:{
        count: 0,
        totalPrice: 0,
        items:[]
    },
    preMadePizza:[],
    preMadeOverall: 0
    },
  reducers: {
    addCustomPizza: (state,action) => {
      state.count += 1
      state.customPizza.count += 1
      state.customPizza.items.push(action.payload)
      let sum = 0
      for (let index = 0; index < state.customPizza.items.length; index++) {
        let element = state.customPizza.items[index];
        sum += element.price
      }
      state.customPizza.totalPrice = sum
    //
    },
    removeCustomPizza: (state,action) => {
        state.count -= 1
        state.customPizza.count -= 1
        let indexToRemove = state.customPizza.items.indexOf(action.payload)
        let priceToRemove = state.customPizza.items[indexToRemove].price
        state.customPizza.totalPrice -= priceToRemove
        delete state.customElements.items[indexToRemove]
    },
    addPremadePizza: (state, action) => {
      state.count += 1
      state.preMadePizza.push(action.payload)
      state.preMadeOverall += action.payload.price
    },
    removePremadePizza: (state,action)=>{
        state.count -= 1
        let indexToRemove = state.preMadePizza.indexOf(action.payload)
        let priceToRemove = state.preMadePizza[indexToRemove].price
        state.preMadeOverall -= priceToRemove
    },
    resetToDefault: (state)=>{
      state.count = initialState.count
      state.customPizza = initialState.customPizza
      state.preMadePizza = initialState.preMadePizza
      state.preMadeOverall = initialState.preMadeOverall
    }
  }
}) 

export const { addCustomPizza, removeCustomPizza, addPremadePizza , removePremadePizza, resetToDefault  } = cartSlice.actions

export default cartSlice.reducer