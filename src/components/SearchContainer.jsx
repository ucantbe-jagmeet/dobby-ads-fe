import React from 'react'
import FormRow from './FormRow';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, handleChange } from '../redux/ImageSlice';

const SearchContainer = () => {
    const { search } = useSelector((store) => store.image);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(clearFilter());
    };
    return (
        <div className='my-5 flex justify-center'>
            <form onSubmit={handleSubmit} className='flex w-1/3'>
                <FormRow
                    type="text"
                    name="search"
                    value={search}
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
