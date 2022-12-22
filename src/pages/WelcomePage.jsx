import { FaUser, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ErrorPage } from '../pages/';
import { FullScreenLoader } from '../components';
import useProfiles from '../hooks/useProfile';

const WelcomePage = () => {
    const {
        loadingUser,
        userError,
        userProfile
    } = useProfiles()
    const navigate = useNavigate()
    
    return (
        <>
        {loadingUser ? <FullScreenLoader />
        : userProfile && !userError ? 
        <div className='h-screen w-full grid place-items-center'>
            <div className='grid place-items-center gap-6'>
                <button type='button' className='welcomePageBtn' onClick={() => navigate("/app/feed")}>
                    <FaHeart size={30} className="welcomePageIcon"/>
                    <p className='welcomePageText'>buscar matches</p>
                </button>
                <button type='button' className='welcomePageBtn' onClick={() => navigate("/app/user")}>
                    <FaUser size={30} className="welcomePageIcon"/>
                    <p className='welcomePageText'>Ver mi perfil</p>
                </button>
            </div>
        </div>
        : <ErrorPage />}
        </>
    )
}

export default WelcomePage;
