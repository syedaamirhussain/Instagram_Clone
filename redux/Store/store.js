import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice";
import postReducer from "../Slices/postsSlice";
// import postSlice from "../Slices/postsSlice";
import allUserReducer from "../Slices/otherUserSlice";
import firebasePostSliceReducer from "../Slices/firebasePostsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    users: allUserReducer,
    firebasePost: firebasePostSliceReducer,
    // post: postSlice.reducer, (another method of import)
  }
})