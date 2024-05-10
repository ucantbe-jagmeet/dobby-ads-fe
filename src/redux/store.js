import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import imageSlice from './ImageSlice';
export const store = configureStore({
    reducer: {
        user: userSlice,
        image: imageSlice,
    },
});
