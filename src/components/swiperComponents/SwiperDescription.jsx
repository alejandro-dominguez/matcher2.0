import { useState } from 'react';
import { FaRedoAlt } from 'react-icons/fa';

const SwiperDescription = ({
    profile,
    modalState,
    setModalState,
    setUiState
}) => {
    const [activeClass, SetActiveClass] = useState(false)

    const handleClose = () => {
        SetActiveClass(true)
        setUiState(true)
        setTimeout(() => {
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
    }

    return (
        <>
        {modalState && profile ?
        <>
        <div className={activeClass ? "descriptionModal cardShadow fadeInModal active"
        : "descriptionModal cardShadow fadeInModal"}>
            <div className="absolute top-4 left-5 text-[#ed3434]">
                <div className="flex flex-col items-start gap-[0.15rem] md:gap-1 noSelect">
                    <h1 className='font-extrabold text-xl md:text-2xl'>{profile.username}</h1>
                    <h3 className='font-extrabold text-lg md:text-xl'>{`${profile.age} años`}</h3>
                </div>
            </div>
            <div className='grid place-items-start h-[12.55rem] md:h-[23.7rem] overflow-y-auto break-words
            scrollbar-thin scrollbar-track-[#ed3434]/30 scrollbar-thumb-[#ed3434]/90 w-[90%] pr-6
            pl-[0.4rem] md:pl-0'>
                <p className='text-sm font-medium'>
                    {profile.description}
                </p>
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

export default SwiperDescription;
