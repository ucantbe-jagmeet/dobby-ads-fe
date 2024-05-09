import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    images: [],
    isLoading: false,
    search: '',
};


const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        clearFilter: (state) => {
            return { ...state, ...initialState };
        },
    },
    extraReducers: (builder) => {
    },
});

export const { handleChange, clearFilter } = imageSlice.actions;

export default imageSlice.reducer;
