import logo from '../../assets/logoRegister.svg';
import { FaGrinHearts, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MobileNav = () => {
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
            <FaGrinHearts size={35} className="text-[#FFEAEA] sideBarIcon" />
            <div onClick={() => handleLogout()}>
                <div className="btnUserPageGradient sideBarIcon rounded-full p-[0.6rem] grid
                place-items-center">
                    <FaSignOutAlt className='-scale-x-100 text-lg text-[#FFEAEA]'/>
                </div>
            </div>
        </div>
    )
}

export default MobileNav;
