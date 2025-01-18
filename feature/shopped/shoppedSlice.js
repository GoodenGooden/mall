import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    
}

const shopSlice = createSlice ({
name:  "shoppedItem",
initialState,
reducers: {

    addShoppedItem(state, action) {
        const existingItem = state.cart.find(
            (item) => item.id === action.payload.id
        );
        if (existingItem) {
            // If item already exists, just increase the quantity
            existingItem.quantity += action.payload.quantity;
            existingItem.totalPrice =
                existingItem.quantity * existingItem.price;
        } else {
            // If item doesn't exist, add it as a new item
            state.cart.push(action.payload);
        }
    },

    removeCart (state, action) {
        state.cart = state.cart.filter((like) => like.id !== action.payload)
    },

   increaseShoppedItem (state, action) {
       const increaseCart = state.cart.find((item) => item.id === action.payload);
       increaseCart.quantity++;
       increaseCart.totalPrice = increaseCart.quantity * increaseCart.price
   },

   decreaseShoppedItem (state, action) {
       const decreaseCart = state.cart.find((item) => item.id === action.payload);
       if (decreaseCart && decreaseCart.quantity > 1) {
       decreaseCart.quantity--;
       decreaseCart.totalPrice = decreaseCart.quantity * decreaseCart.price
   
       }
   }

   
}
});

export const {
    addShoppedItem,
    removeCart,
    increaseShoppedItem,
    decreaseShoppedItem,

} = shopSlice.actions;
export default shopSlice.reducer;

export const getCart = (state) => state.shoppedItem.cart

export const getCurrentQuantityById = (id) => (state) =>
    state.shoppedItem.cart.find((item) => item.id === id)?.quantity ?? 0;      
  
export const getTotalCartQuantity = (state) =>        //the variable has to start with get  which we use in ourSelector in cartOverview
  state.shoppedItem.cart.reduce((sum, item) => sum + item.quantity, 0);

