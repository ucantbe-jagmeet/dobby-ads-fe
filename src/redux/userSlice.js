import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';
import { getUserToLocalStorage } from '../utils/getUserToLocalStorage';

const initialState = {
    user: getUserToLocalStorage(),
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await api.get('/users');
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.entities = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default userSlice.reducer;
