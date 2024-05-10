import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../redux/userSlice";
import { clearImages } from '../redux/imagesSlice';
const Navbar = () => {

    const { user, isLoading } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    return (
        <main className='bg-red-100 h-16 flex items-center justify-between px-20'>
            <h2 className='font-semibold text-xl cursor-pointer'>Dobby Ads</h2>
            <div className='flex'>
                {user?.user?.name &&
                    <h2 className='mr-5 font-semibold capitalize'>
                        welcome, {user?.user?.name}
                    </h2>
                }
                <button
                    type="button"
                    className={`capitalize px-3 tracking-wider rounded bg-[#4939FF] text-white   ${isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#4939FF] hover:bg-blue-600"
                        }`} disabled={isLoading}
                    onClick={() => {
                        dispatch(clearImages())
                        dispatch(logoutUser())
                    }}
                >
                    Logout
                </button>
            </div>
        </main>
    )
}

export default Navbar