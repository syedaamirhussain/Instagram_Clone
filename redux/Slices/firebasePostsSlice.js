import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    postData: [],
};
const firebasePostSlice = createSlice({
    name: 'firebasePost',
    initialState,
    reducers: {
        addfirebasePost: (state, action) => {
            state.postData=action.payload
        },
        nullPost: (state) => {
            state.postData = [];
        }
    }
});

export const { addfirebasePost,nullPost } = firebasePostSlice.actions;
export default firebasePostSlice.reducer;