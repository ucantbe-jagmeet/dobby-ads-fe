import React from 'react'
import FormRow from './FormRow';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, handleChange, searchForImages } from '../redux/ImageSlice';

const SearchContainer = () => {
    const { searchQuery } = useSelector((store) => store.image);
    const { token } = useSelector((store) => store.user.user);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('search query', searchQuery, token);
        dispatch(searchForImages({ searchQuery, token }));
        dispatch(clearFilter());
    };

    return (
        <div className='my-5 flex justify-center'>
            <form onSubmit={handleSubmit} className='flex w-1/3'>
                <FormRow
                    type="text"
                    name="searchQuery"
                    value={searchQuery}
                    handleChange={handleSearch}
                    labelText="Search"
                />
                <button
                    className="capitalize px-5 mt-6 ml-2 tracking-wider rounded-md bg-[#4939FF] text-white   ${isLoading bg-[#4939FF] hover:bg-blue-600
                    "
                    onClick={handleSubmit}
                >
                    search
                </button>
            </form>
        </div>
    )
}

export default SearchContainer
