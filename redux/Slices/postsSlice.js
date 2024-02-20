import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
};
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addNewPost: (state, action) => {
            state.data.push(action.payload);
        },
        resetData: (state) => {
            state.data = [];
        },
        removeContent: (state, action) => {
            state.data = state.data.filter((item, index) => index !== action.payload);
        }
    }
 

});

export const { addNewPost,resetData,removeContent } = postSlice.actions;
export default postSlice.reducer;
// export default postSlice;