import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchImages, searchImages, uploadImage } from '../services/api';

const initialState = {
    images: [],
    isLoading: false,
    error: null,
    searchQuery: ''
};

export const getAllImages = createAsyncThunk(
    'images/fetchAll',
    async (token, { rejectWithValue }) => {
        try {
            const response = await fetchImages(token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const searchForImages = createAsyncThunk(
    'images/search',
    async ({ searchQuery, token }, { rejectWithValue }) => {
        try {
            const response = await searchImages(searchQuery, token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const uploadUserImage = createAsyncThunk(
    'images/upload',
    async ({ formData, token }, { rejectWithValue }) => {
        try {
            const response = await uploadImage(formData, token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        clearImages: (state) => {
            state.images = [];
        },
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        clearFilter: (state) => {
            return { ...state, ...initialState };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllImages.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllImages.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.images = payload;
            })
            .addCase(getAllImages.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(searchForImages.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(searchForImages.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.images = payload;
            })
            .addCase(searchForImages.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(uploadUserImage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(uploadUserImage.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.images.push(payload);
            })
            .addCase(uploadUserImage.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { clearImages, handleChange, clearFilter } = imageSlice.actions;

export default imageSlice.reducer;
