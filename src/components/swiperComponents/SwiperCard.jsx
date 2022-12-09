import { SwiperMatcher, SwiperDescription } from '../';
import { useState } from 'react';
import shortenText from '../../utils/shortenText';

const SwiperCard = ({ profile }) => {
    const [activeClass, SetActiveClass] = useState(false)
    const [fadeRight, setFadeRight] = useState(false)
    const [showCard, setShowCard] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [, setShowUi] = useState(true)
    const desc = shortenText(profile.description, 110)

    return (
        <>
        {showCard ?
        <div className={!activeClass ? "swiperCard cardShadow"
        : activeClass && fadeRight ? "swiperCard cardShadow fadeOutRightCard"
        : "swiperCard cardShadow fadeOutLeftCard"} key={profile.id}>
            <div className="relative flex flex-col items-center justify-center">
                <SwiperMatcher
                    profile={profile}
                    setCardState={setShowCard}
                    setActiveClassState={SetActiveClass}
                    setFadeState={setFadeRight}
                />
            </div>
            <div className="w-[22rem] h-[104px] bg-[#FFEAEA] rounded-lg hidden md:flex justify-between
            items-end gap-2 p-3 shadow-sm hover:shadow-md">
                <p className='text-sm font-medium flex self-start'>{desc}</p>
                <button type='button' className='text-[#ed3434] textShadowSm font-bold px-4 py-1
                rounded-2xl min-w-max gradientBg shadow-md shadow-black/10 btnTransition btnShadow'
                onClick={() => setShowModal(true)}>
                    Ver más
                </button>
            </div>
            <SwiperDescription
                profile={profile}
                modalState={showModal}
                setModalState={setShowModal}
                setUiState={setShowUi}
            />
        </div>
        : null}
        </>
    )
}

export default SwiperCard;
