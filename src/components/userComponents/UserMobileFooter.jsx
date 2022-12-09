import { FaHeart, FaCommentAlt, FaHeartBroken } from 'react-icons/fa';
import { NotificationsModal } from '../';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserMobileFooter = () => {
    const [showModal, setShowModal] = useState(false)
    const [showMessages, setShowMessages] = useState(false)
    const [showMatches, setShowMatches] = useState(false)

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
        <div className='w-screen flex items-center justify-around sm:justify-between bg-[#FF929D] px-7
        py-3 sm:px-48 absolute bottom-0 -translate-x-1/2'>
            <FaHeart size={35} className="cursor-pointer text-[#ed3434] sideBarIcon"
            onClick={() => handleMatches()} />
            <FaCommentAlt size={33} className="cursor-pointer text-[#FFEAEA] sideBarIcon"
            onClick={() => handleMessages()} />
            <Link to="/">
                <div className="btnUserPageGradient sideBarIcon rounded-full p-3">
                    <FaHeartBroken className='-scale-x-100 text-lg text-[#FFEAEA]'/>
                </div>
            </Link>
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

export default UserMobileFooter;
