import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginUserType {
    email: string;
    password: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: LoginUserType | null;
}

const storedAuthState = typeof window !== 'undefined' ? localStorage.getItem('authState') : null;
const initialState: AuthState = storedAuthState ? JSON.parse(storedAuthState) : {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginUserType>) => {
            state.isAuthenticated = true;
            state.user = action.payload;

            // Store state in local storage after successful login
            if (typeof window !== 'undefined') {
                localStorage.setItem('authState', JSON.stringify(state));
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;

            // Remove state from local storage after logout
            if (typeof window !== 'undefined') {
                localStorage.removeItem('authState');
            }
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
