import { useState } from 'react';
import { FaRedoAlt } from 'react-icons/fa';

const UserSwiperDescription = ({
    loggedUser,
    modalState,
    setModalState,
    setUiState,
    setBtnState
}) => {
    const [activeClass, SetActiveClass] = useState(false)

    const handleClose = () => {
        SetActiveClass(true)
        setUiState(true)
        setTimeout(() => {
            setBtnState(true)
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
        <div className={activeClass ? "descriptionModal fadeInModal active"
        : "descriptionModal fadeInModal"}>
            <div className="absolute top-4 left-5 text-[#ed3434]">
                <div className="flex flex-col items-start gap-[0.15rem] md:gap-1 noSelect">
                    <h1 className='font-extrabold text-xl md:text-2xl'>{loggedUser.username}</h1>
                    <h3 className='font-extrabold text-lg md:text-xl'>{`${loggedUser.age} años`}</h3>
                </div>
            </div>
            <div className='grid place-items-start h-[12.5rem] md:h-[21.5rem] overflow-y-auto break-words
            scrollbar-thin scrollbar-track-[#ed3434]/30 scrollbar-thumb-[#ed3434]/90 w-[90%] pr-6
            pl-[0.4rem] md:pl-0'>
                <p className='text-sm font-medium'>{loggedUser.description}</p>
            </div>
            <button type='button' className='absolute bottom-6 left-1/2 btnSubmitGradient textShadowSm
            btnTransition btnShadow shadow-md text-[#FFEAEA] rounded-full -translate-x-1/2 px-3 py-3'
            onClick={() => handleClose()}>
                <FaRedoAlt className='-scale-x-100 -rotate-6 text-base md:text-xl'/>
            </button>
        </div>
        </>
        : null}
        </>
    )
}

export default UserSwiperDescription;
