import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadUserImage } from '../redux/imagesSlice'; // Adjust the path as necessary

const UploadContainer = () => {
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.image);
    const { user } = useSelector((store) => store.user); // Assuming you store the token in your user state

    // Handlers for input changes
    const handleFileChange = (e) => setFile(e.target.files[0]);

    // Form submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        const token = user.token
        if (user) {
            dispatch(uploadUserImage({ formData, token }));
            window.location.reload();
        }


    };

    return (
        <div className='my-5 flex justify-center'>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} required />
                <button type="submit" disabled={isLoading} className='shadow px-2 rounded bg-red-500 text-white'>
                    {isLoading ? 'Uploading...' : 'Upload Image'}
                </button>
            </form>
        </div>
    );
}

export default UploadContainer;
