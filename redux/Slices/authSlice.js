import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isLoading: false,
    isError: false,
    isLoggedIn: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setIsError: (state, action) => {
            state.isError = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
        setUserProFileImg: (state, action) => {
            state.currentUser.proImgLink = action.payload
        }

      
    }
});
export const { setCurrentUser, setIsLoading, setIsError, setIsLoggedIn,setUserProFileImg  } = authSlice.actions;
export default authSlice.reducer;