import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/user/userSlice';
import likeItemReducer from '../feature/liked/likedSlice';
import ShoppedReducer from '../feature/shopped/shoppedSlice';




const store = configureStore ({
reducer: {
    user: userReducer,
    likeItem: likeItemReducer,
    shoppedItem: ShoppedReducer,
    
}
})

export default store;  