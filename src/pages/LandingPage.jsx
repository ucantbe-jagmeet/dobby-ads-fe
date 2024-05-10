import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchContainer from '../components/SearchContainer';
import UploadContainer from '../components/UploadContainer';
import ImageContainer from '../components/ImageContainer';

const LandingPage = () => {
    const { user } = useSelector((store) => store.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (user === null) {
            setTimeout(() => {
                navigate("/register");
            }, 100);
        }
    }, [user, navigate]);
    return (
        <main className='s h-screen overflow-hidden'>
            <Navbar />
            <SearchContainer />
            <UploadContainer />
            <ImageContainer />
        </main>
    )
}

export default LandingPage