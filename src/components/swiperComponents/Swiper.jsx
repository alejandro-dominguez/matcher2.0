import { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { SwiperDescription } from '../';
import { RiCloseCircleLine } from 'react-icons/ri';
import { IoHeartCircleOutline } from 'react-icons/io5'; 
import shortenText from './../../utils/shortenText';

const Swiper = ({
    profile,
    swiperSlides,
    setCardState,
    setActiveClassState,
    setFadeState
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [sliderBtnPressed, setSliderBtnPressed] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showUi, setShowUi] = useState(true)
    const name = shortenText(profile.username, 16)

    const prevSlide = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? swiperSlides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        newIndex === 0 ? setSliderBtnPressed(false) : setSliderBtnPressed(true)
    }

    const nextSlide = () => {
        const lastSlide = currentIndex === swiperSlides.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        newIndex === 0 ? setSliderBtnPressed(false) : setSliderBtnPressed(true)
    }
    
    const handleSetShowModal = () => {
        setShowModal(true)
        setShowUi(false)
    }

    const handleDislike = () => {
        setActiveClassState(true)
        setFadeState(false)
        setTimeout(() => {
            setCardState(false)
        }, 500)
    }

    const handleLike = () => {
        setActiveClassState(true)
        setFadeState(true)
        setTimeout(() => {
            setCardState(false)
        }, 500)
    }
    
    return (
        <>
        {showUi ?
        <div className="relative top-[0.9rem] left-1/2 -translate-x-1/2 flex justify-between
        items-center px-4 md:px-6 z-10">
            <div className={currentIndex === 0 ? "sliderCounter bg-white imgShadow"
            : "sliderCounter bg-white/70 shadow-md"} />
            <div className={currentIndex === 1 ? "sliderCounter bg-white imgShadow"
            : "sliderCounter bg-white/70 shadow-md"} />
            <div className={currentIndex === 2 ? "sliderCounter bg-white imgShadow"
            : "sliderCounter bg-white/70 shadow-md"} />
            <div className={currentIndex === 3 ? "sliderCounter bg-white imgShadow"
            : "sliderCounter bg-white/70 shadow-md"} />
        </div>
        : null}
        <div style={{backgroundImage: `url(${swiperSlides[currentIndex].url})`}} className="bg-cover bg-center
        bg-no-repeat absolute top-0 left-0 h-full w-full rounded-3xl" />
        {showUi ?
        <div className="absolute bottom-40 md:bottom-44 left-1/2 -translate-x-1/2 justify-between items-center
        gap-48 md:gap-60 flex z-30">
            <HiOutlineChevronLeft size={40} className="cursor-pointer text-white/70 hover:text-white
            transition-colors noSelect" onClick={() => prevSlide()} />
            <HiOutlineChevronRight size={40} className="cursor-pointer text-white/70 hover:text-white
            transition-colors noSelect" onClick={() => nextSlide()} />
        </div>
        : null}
        {!sliderBtnPressed ? (
            (<div className="absolute w-full h-full flex flex-col items-start justify-start p-5 text-white">
                <div className="swiperInfoContainer w-full flex flex-col items-start gap-[0.15rem] md:gap-1
                noSelect md:mt-1">
                    <h1 className='textShadow font-extrabold text-xl md:text-2xl'>{name}</h1>
                    <h3 className='textShadow font-extrabold text-lg md:text-xl'>{`${profile.age} años`}</h3>
                </div>
                <button type='button' className='text-[#ed3434] textShadowSm font-bold p-[0.45rem]
                absolute top-[1.6rem] rounded-full gradientBg shadow-md shadow-black/10 right-4
                btnTransition btnShadow grid place-items-center md:hidden' onClick={() => handleSetShowModal()}>
                    <FaUser size={12} className="block"/>
                </button>
            </div>))
        : null}
        <SwiperDescription
            profile={profile}
            modalState={showModal}
            setModalState={setShowModal}
            setUiState={setShowUi}
        />
        {showUi ?
        <div className="absolute bottom-2 md:bottom-4 translate-x-1/2 right-1/2">
            <div className="flex gap-20 md:gap-32 justify-center items-center">
                <button type='button' className='iconShadow text-[#FFEAEA] hover:text-[#1F9AFF]
                hover:scale-110 transition-all duration-200 ease-linear noSelect'>
                    <RiCloseCircleLine size={80} onClick={() => handleDislike()} />
                </button>
                <button type='button' className='iconShadow text-[#ed3434] hover:text-[#72E52D]
                hover:scale-110 transition-all duration-200 ease-linear noSelect'>
                    <IoHeartCircleOutline size={80} onClick={() => handleLike()} />
                </button>
            </div>
        </div>
        : null}
        </>
    )
}

export default Swiper;
