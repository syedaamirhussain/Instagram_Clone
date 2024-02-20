import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allUsers: [],
};
const allUserSlice = createSlice({
    name: 'allUser',
    initialState,
    reducers: {
        getAllUsers: (state, action) => {
            state.allUsers=action.payload;
        },
     
    }
 

});

export const { getAllUsers } = allUserSlice.actions;
export default allUserSlice.reducer;
// export default postSlice;