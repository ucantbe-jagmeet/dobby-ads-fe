import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchContainer from '../components/SearchContainer';
import UploadContainer from '../components/UploadContainer';

const LandingPage = () => {
    const { user } = useSelector((store) => store.user);
    const navigate = useNavigate();
    console.log("user", user)
    useEffect(() => {
        if (user === null) {
            setTimeout(() => {
                navigate("/register");
            }, 1000);
        }
    }, [user, navigate]);
    return (
        <main className='s h-screen overflow-hidden'>
            <Navbar />
            <SearchContainer />
            <UploadContainer />

        </main>
    )
}

export default LandingPage