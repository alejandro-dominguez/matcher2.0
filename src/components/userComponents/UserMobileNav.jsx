import { FaRedoAlt, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoRegister.svg";
import useAuth from '../../hooks/useAuth';

const UserMobileNav = () => {
    const { logout, isLoading } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        if (!isLoading) navigate("/")
    }

    return (
        <div className='w-screen flex items-center justify-around sm:justify-between sm:px-44 bg-[#FF929D] py-3'>
            <div className='w-36'>
                <img src={logo} alt="Matcher logo" className='block w-full' loading='lazy' />
            </div>
            <div onClick={() => navigate("/feed")}>
                <div className="btnFeedGradient sideBarIcon rounded-full p-3">
                    <FaRedoAlt className='-scale-x-100 -rotate-6 text-lg text-[#FFEAEA]'/>
                </div>
            </div>
            <div onClick={() => handleLogout()}>
                <div className="btnUserPageGradient sideBarIcon rounded-full p-3">
                    <FaSignOutAlt className='-scale-x-100 text-lg text-[#FFEAEA]'/>
                </div>
            </div>
        </div>
    )
}

export default UserMobileNav;
