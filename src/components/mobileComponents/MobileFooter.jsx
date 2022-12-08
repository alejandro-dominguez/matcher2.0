import profile from '../../assets/horacio.png';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NotificationsModal } from '..';
import { useState } from 'react';

const MobileFooter = () => {
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
            <Link to="/user">
                <div className="p-[0.25rem] bg-[#ed3434] rounded-full">
                    <div style={{backgroundImage: `url(${profile})`}} className='h-[2.75rem] w-[2.75rem] bg-cover
                    bg-center bg-no-repeat rounded-full'/>
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

export default MobileFooter;
