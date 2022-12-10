import logo from '../../assets/logoNavBar.svg';
import { useState } from 'react';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NotificationsModal } from '../';
import useProfiles from '../../hooks/useProfiles';
import shortenText from './../../utils/shortenText';

const UserSideBar = () => {
    const [showModal, setShowModal] = useState(false)
    const [showMessages, setShowMessages] = useState(false)
    const [showMatches, setShowMatches] = useState(false)
    const { userProfile } = useProfiles()
    const loggedUser = userProfile[0]
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

    return (
        <>
        <div className='flex flex-col items-center justify-center py-10 bg-[#FF929D] h-screen'>
            <div className="flex flex-col gap-16 items-center">
                <div className='w-20'>
                    <img src={logo} alt="Matcher logo" className='w-full block' loading='lazy' />
                </div>
                <Link to="/user">
                    <div className="sideBarBox flex flex-col items-center justify-center mt-10">
                        <div className="p-[0.27rem] bg-[#ed3434] transition-colors rounded-full">
                            {loggedUser ? <div style={{backgroundImage: `url(${loggedUser.img1})`}}
                            className='h-28 w-28 bg-cover bg-center bg-no-repeat rounded-full'/>
                            : null}
                        </div>
                        <p className='transition-colors font-semibold text-xl mt-2 textShadowSm'>
                            {loggedUser ? `${shortenText(userFirstName, 10)}` : null}
                        </p>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col items-center gap-16 mt-16'>
                <FaHeart size={35} className="cursor-pointer text-[#ed3434] sideBarIcon
                transition-transform hover:scale-110 ease-out" onClick={() => handleMatches()} />
                <FaCommentAlt size={35} className="cursor-pointer text-[#FFEAEA] sideBarIcon
                transition-transform hover:scale-110 ease-out" onClick={() => handleMessages()} />
            </div>
        </div>
        <NotificationsModal
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

export default UserSideBar;