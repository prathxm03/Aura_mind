import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: '',
    },
    reducers: {
        login(state, action) {
            state.user = action.payload;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload));
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem(STORAGE_KEY);
        },
    },
});

export const { login, logout } = authSlice.actions;

// Selector – use this in components: useSelector(selectUser)
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
