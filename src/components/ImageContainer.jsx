import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllImages } from '../redux/ImageSlice';
import { getUserToLocalStorage } from '../utils/getUserToLocalStorage';

function ImageContainer() {
    const dispatch = useDispatch();

    const { images, isLoading } = useSelector((store) => store.image);
    const { token } = useSelector((store) => store.user.user);
    useEffect(() => {
        dispatch(getAllImages(token))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    console.log('images', images)
    return (
        <div>
            <h1>Image Gallery</h1>
            <div>
                {images && images.map((image, index) => {
                    return <div key={index}>
                        <h2>{image.fileName}</h2>
                        <img src={`http::localhost:3333${image.filePath}`} alt='img' className='h-40 w-40' />
                    </div>

                })}
            </div>
        </div>
    );
}

export default ImageContainer;
