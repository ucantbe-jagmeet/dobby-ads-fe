import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllImages } from '../redux/imagesSlice';
const URL = process.env.REACT_APP_API_URL
function ImageContainer() {
    const dispatch = useDispatch();

    const { images } = useSelector((store) => store.image);
    const { user } = useSelector((store) => store?.user);
    useEffect(() => {
        if (user)
            dispatch(getAllImages(user.token))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    return (
        <div>
            <h1 className='ml-20 font-bold text-2xl'>Image Gallery</h1>
            <div className='grid grid-cols-3 justify-center gap-y-5 p-5'>
                {images && images.map((image, index) => {
                    return <div className='text-center flex-col flex px-' key={index}>
                        <img src={`${URL}${image.filePath}`} alt='img' className='h-40 w-40 self-center' />
                        <h2>{image.fileName}</h2>
                    </div>
                })}
            </div>
        </div>
    );
}

export default ImageContainer;
