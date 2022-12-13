import logo from '../../assets/logoNavBar.svg';
import { useState } from 'react';
import { FaHeart, FaCommentAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NotificationsModal } from '../';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import shortenText from './../../utils/shortenText';

const SideBar = ({ userProfile }) => {
    const [showModal, setShowModal] = useState(false)
    const [showMessages, setShowMessages] = useState(false)
    const [showMatches, setShowMatches] = useState(false)
    const { logout, isLoading } = useAuth()
    const loggedUser = userProfile[0]
    const navigate = useNavigate()
    const userFullName = loggedUser.username
    
    const getUserFirstName = () => {
        const splitName = userFullName.split(" ")
        const FirstName = splitName[0]
        return FirstName
    }

    const userFirstName = getUserFirstName()

    const handleMatches = () => {
        setShowModal(true)
        setShowMatches(true)
        setShowMessages(false)
    }
    
    const handleMessages = () => {
        setShowModal(true)
        setShowMessages(true)
        setShowMatches(false)
    }

    const handleLogout = () => {
        logout()
        if (!isLoading) navigate("/")
    }

    return (
        <>
        <div className='flex flex-col items-center justify-center py-10 bg-[#FF929D] h-screen'>
            <div className="flex flex-col items-center">
                <div className='w-20'>
                    <img src={logo} alt="Matcher logo" className='w-full block' loading='lazy' />
                </div>
                <Link to="/app/user">
                    <div className="sideBarBox flex flex-col items-center justify-center mt-10">
                        <div className="p-[0.27rem] bg-[#ed3434] transition-colors rounded-full">
                            {loggedUser ? <div style={{backgroundImage: `url(${loggedUser.img1})`}}
                            className='h-28 w-28 bg-cover bg-center bg-no-repeat rounded-full'/>
                            : null}
                        </div>
                        <p className='transition-colors font-semibold text-xl mt-2 textShadowSmRed'>
                            {loggedUser ? `${shortenText(userFirstName, 10)}` : null}
                        </p>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col items-center gap-8 mt-12'>
                <FaHeart size={45} className="cursor-pointer text-[#ed3434] sideBarIcon
                transition-transform hover:scale-110 ease-out" onClick={() => handleMatches()} />
                <FaCommentAlt size={45} className="cursor-pointer text-[#FFEAEA] sideBarIcon
                transition-transform hover:scale-110 ease-out" onClick={() => handleMessages()} />
                <div className="text-[#FFEAEA] grid place-items-center rounded-full p-3 gap-1
                cursor-pointer btnUsetPageGradient textShadowSm btnUserPageGradient transition-transform
                hover:scale-[1.025]" onClick={() => handleLogout()}>
                    <FaSignOutAlt className='-scale-x-100 text-xl'/>
                    <button type='button'>
                        <p className='text-center font-semibold text-xs'>Logout</p>
                    </button>
                </div>
            </div>
        </div>
        <NotificationsModal
            loggedUser={loggedUser}
            modalState={showModal}
            setModalState={setShowModal}
            messagesState={showMessages}
            matchesState={showMatches}
            setMatchesState={setShowMatches}
            setMessagesState={setShowMessages}
        />
        </>
    )

}

export default SideBar;
