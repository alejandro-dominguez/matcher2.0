import logo from '../../assets/logoNavBar.svg';
import profile from '../../assets/horacio.png';
import { useState } from 'react';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NotificationsModal } from '../';

const UserSideBar = () => {
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
        <div className='flex flex-col items-center justify-center py-10 bg-[#FF929D] h-screen'>
            <div className="flex flex-col gap-16 items-center">
                <div className='w-20'>
                    <img src={logo} alt="Matcher logo" className='w-full block' loading='lazy' />
                </div>
                <Link to="/user">
                    <div className="sideBarBox flex flex-col items-center justify-center mt-10">
                        <div className="p-[0.3rem] bg-[#ed3434] transition-colors rounded-full">
                            <div style={{backgroundImage: `url(${profile})`}} className='h-28 w-28 bg-cover
                            bg-center bg-no-repeat rounded-full'/>
                        </div>
                        <p className='transition-colors font-semibold text-xl mt-2 textShadowSm'>Cinthia</p>
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