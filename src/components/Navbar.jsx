import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../redux/userSlice";
const Navbar = () => {

    const { user, isLoading } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>
                welcome {user?.name || 'User'}
            </h2>
            <button
                type="button"
                className="dropdown-btn"
                onClick={() => dispatch(logoutUser("Logging out ..."))}
            >
                Logout
            </button></div>
    )
}

export default Navbar