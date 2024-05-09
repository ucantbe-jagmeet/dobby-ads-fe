import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { register, login } from '../services/api';
import { getUserToLocalStorage, addUserToLocalStorage, removeUserToLocalStorage } from '../utils/getUserToLocalStorage';

const initialState = {
    user: getUserToLocalStorage(),
    isLoading: false,
    error: null
};

export const registerUser = createAsyncThunk(
    'users/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await register(userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    '',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await login(credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            state.isLoading = true;
            removeUserToLocalStorage();
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                if (user) {
                    state.user = user;
                    addUserToLocalStorage(user);
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                if (user) {
                    state.user = user;
                    addUserToLocalStorage(user);
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
