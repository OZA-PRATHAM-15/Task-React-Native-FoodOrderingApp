import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isGuest: false,
    },
    reducers: {
        loginAsGuest: (state) => {
            state.isGuest = true;
        },
        logout: (state) => {
            state.isGuest = false;
        },
    },
});

export const { loginAsGuest, logout } = authSlice.actions;
export default authSlice.reducer;
