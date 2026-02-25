import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "auramind_user";

function loadUserFromStorage() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch {
        return null;
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: loadUserFromStorage(),
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
