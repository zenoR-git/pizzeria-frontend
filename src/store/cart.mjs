import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
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
      state.customPizza.count += 1
      state.customPizza.items.push(action.payload)
      let sum = 0
      console.log('b sum',sum)
    //   console.log()
      for (let index = 0; index < state.customPizza.items.length; index++) {
        let element = state.customPizza.items[index];
        sum += element.price
      }
      console.log('sum',sum)
      state.customPizza.totalPrice = sum
      console.log(state.customPizza.totalPrice)
    //
    },
    removeCustomPizza: (state,action) => {
        state.customPizza.count -= 1
        let indexToRemove = state.customPizza.items.indexOf(action.payload)
        let priceToRemove = state.customPizza.items[indexToRemove].price
        state.customPizza.totalPrice -= priceToRemove
        delete state.customElements.items[indexToRemove]
    },
    addPremadePizza: (state, action) => {
      state.preMadePizza.push(action.payload)
      state.preMadeOverall += action.payload.price
    },
    removePremadePizza: (state,action)=>{
        let indexToRemove = state.preMadePizza.indexOf(action.payload)
        let priceToRemove = state.preMadePizza[indexToRemove].price
        state.preMadeOverall -= priceToRemove
    }
  }
}) 

export const { addCustomPizza, removeCustomPizza, addPremadePizza , removePremadePizza  } = cartSlice.actions

export default cartSlice.reducer