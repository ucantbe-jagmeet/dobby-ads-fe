import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadUserImage } from '../redux/ImageSlice'; // Adjust the path as necessary
import { getUserToLocalStorage } from '../utils/getUserToLocalStorage';

const UploadContainer = () => {
    const [file, setFile] = useState(null);
    const [imageName, setImageName] = useState('');
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.image);
    const { token } = useSelector((store) => store.user.user); // Assuming you store the token in your user state

    // Handlers for input changes
    const handleFileChange = (e) => setFile(e.target.files[0]);
    const handleNameChange = (e) => setImageName(e.target.value);

    // Form submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', imageName);

        console.log('formDAta', formData)
        if (token)
            dispatch(uploadUserImage({ formData, token }));
        else
            dispatch(uploadUserImage({ formData, token: getUserToLocalStorage().token }));

        if (error) {
            alert('Failed to upload image.');
            console.error('Error uploading image:', error);
        } else {
            alert('Image uploaded successfully!');
        }
    };

    return (
        <div className='my-5 flex justify-center'>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
                <input type="text" value={imageName} onChange={handleNameChange} placeholder="Enter image name" required />
                <input type="file" onChange={handleFileChange} required />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Uploading...' : 'Upload Image'}
                </button>
            </form>
        </div>
    );
}

export default UploadContainer;
