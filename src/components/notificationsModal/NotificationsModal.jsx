import profile from "../../assets/horacio.png";
import logo from "../../assets/logoLoader.svg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MatchesAndChats } from "..";

const NotificationsModal = ({
    modalState,
    messagesState,
    matchesState,
    setModalState,
    setMatchesState,
    setMessagesState
}) => {
    const [activeClass, SetActiveClass] = useState(false)

    const handleClose = () => {
        SetActiveClass(true)
        setTimeout(() => {
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
    }

    return (
        <>
        {modalState ?
        <>
        <div className={activeClass ? "notificationsModal fadeInLeftModal active"
        : "notificationsModal fadeInLeftModal"}>
            <div className="flex flex-col items-start justify-center p-4 w-full">
                <div className="relative h-fit w-full">
                    <div className="flex items-center justify-around w-full gap-20">
                        <Link to="/user">
                            <div className="grid place-items-center transition-colors hover:text-[#ed3434]">
                                <div className="p-[0.225rem] bg-[#ed3434] rounded-full">
                                    <div style={{backgroundImage: `url(${profile})`}} className='h-14 w-14
                                    bg-cover bg-center bg-no-repeat rounded-full imgShadow'/>
                                </div>
                                <p className='font-semibold mt-[0.1rem]'>
                                    Mi perfil
                                </p>
                            </div>
                        </Link>
                        <div className="w-10 cursor-pointer" onClick={() => handleClose()}>
                            <img src={logo} alt="Matcher logo" className="block w-full" />
                        </div>
                    </div>
                    <div className="absolute -bottom-3 rounded-full h-[3px] w-[99.5%] bg-[#FFCBCB]" />
                </div>
                <MatchesAndChats
                    messagesState={messagesState}
                    matchesState={matchesState}
                    setMatchesState={setMatchesState}
                    setMessagesState={setMessagesState}
                />
            </div>
            <button type='button' className='absolute bottom-4 left-1/2 btnSubmitGradient textShadowSm
            btnTransition btnShadow shadow-md font-bold tracking-wider text-[#FFEAEA] rounded-full
            -translate-x-1/2 px-4 py-1' onClick={() => handleClose()}>
                Cerrar
            </button>
        </div>
        </>
        : null}
        </>
    )
}

export default NotificationsModal;
