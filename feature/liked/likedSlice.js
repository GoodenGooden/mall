import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    liked: [],
    
}

const likeSlice = createSlice ({
    name: 'likeItem',
    initialState,
    reducers: {

addItem (state, action) {
    state.liked.push(action.payload)
},

removeLiked (state, action) {
    state.liked = state.liked.filter((like) => like.id !== action.payload)
},

    }
});

export const {

    addItem,
    removeLiked,
    increaseItem,
    decreaseItem,
   
    
} = likeSlice.actions

export const getLiked = (state) => state.likeItem.liked       //this access the item that is liked 

export const getTotalCartQuantity = (state) =>        //the variable has to start with get  which we use in ourSelector in cartOverview
  state.likeItem.liked.reduce((sum, item) => sum + item.quantity, 0);


export default likeSlice.reducer
