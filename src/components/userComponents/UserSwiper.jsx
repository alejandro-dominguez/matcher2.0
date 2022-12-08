import { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { UserEditModal, UserSwiperDescription } from '..';
import shortenText from '../../utils/shortenText';

const UserSwiper = ({ userSwiperSlides, modalEditState, setModalEditState }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [sliderBtnPressed, setSliderBtnPressed] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [showUi, setShowUi] = useState(true)
    const [showBtn, setShowBtn] = useState(true)

    const prevSlide = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? userSwiperSlides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        newIndex === 0 ? setSliderBtnPressed(false) : setSliderBtnPressed(true)
    }

    const nextSlide = () => {
        const lastSlide = currentIndex === userSwiperSlides.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        newIndex === 0 ? setSliderBtnPressed(false) : setSliderBtnPressed(true)
    }
    
    const handleSetShowModal = () => {
        setShowModal(true)
        setShowUi(false)
        setShowBtn(false)
    }

    const handleDescriptionBtn = () => {
        setShowModal(true)
        setShowBtn(false)
    }

    const handleEditBtn = () => {
        setModalEditState(true)
        setShowBtn(false)
    }

    return (
        <>
        {showBtn ?
        <button type="button" className="btnEditGradient textShadowSm btnTransition btnShadow w-72 md:w-80
        py-[0.4rem] shadow-md font-bold tracking-wider text-[#FFEAEA] rounded-full fixed top-24 md:top-8"
        onClick={() => handleEditBtn()}>
            Editar perfil
        </button>
        : <div className="bg-transparent md:w-80 py-[0.4rem] font-bold text-transparent fixed top-24 md:top-8">
            Editar perfil
        </div>}
        {!modalEditState ?
        <div className='flex flex-col items-center justify-center gap-3 relative mb-[0.3rem] md:mb-0 mt-14
        md:mt-[4.25rem]'>
            <div className="relative flex flex-col items-center justify-center">
                <div className='relative w-[18.25rem] md:w-80 aspect-[4/5]'>
                    {showUi ?
                    <div className="relative top-[0.9rem] left-1/2 -translate-x-1/2 flex justify-between
                    items-center px-4 z-10">
                        <div className={currentIndex === 0 ? "userSliderCounter bg-white imgShadow"
                        : "userSliderCounter bg-white/70 shadow-md"} />
                        <div className={currentIndex === 1 ? "userSliderCounter bg-white imgShadow"
                        : "userSliderCounter bg-white/70 shadow-md"} />
                        <div className={currentIndex === 2 ? "userSliderCounter bg-white imgShadow"
                        : "userSliderCounter bg-white/70 shadow-md"} />
                        <div className={currentIndex === 3 ? "userSliderCounter bg-white imgShadow"
                        : "userSliderCounter bg-white/70 shadow-md"} />
                    </div>
                    : null}
                    <div style={{backgroundImage: `url(${userSwiperSlides[currentIndex].url})`}}
                    className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 h-full w-full rounded-2xl" />
                    {showUi ?
                    <div className="absolute bottom-40 left-1/2 -translate-x-1/2 justify-between items-center
                    gap-48 md:gap-56 flex">
                        <HiOutlineChevronLeft size={40} className="cursor-pointer text-white/70
                        hover:text-white transition-colors noSelect" onClick={() => prevSlide()} />
                        <HiOutlineChevronRight size={40} className="cursor-pointer text-white/70
                        hover:text-white transition-colors noSelect" onClick={() => nextSlide()} />
                    </div>
                    : null}
                    {!sliderBtnPressed ? (
                        (<div className="absolute top-7 left-[33.5%] md:left-[6.7rem] -translate-x-1/2 text-white">
                            <div className="swiperInfoContainer w-full flex flex-col items-start gap-[0.15rem]
                            md:gap-1 noSelect">
                                <h1 className='textShadow font-extrabold text-xl md:text-2xl'>Ayelen Vargas</h1>
                                <h3 className='textShadow font-extrabold text-lg md:text-xl'>24 años</h3>
                            </div>
                            <button type='button' className='text-[#ed3434] textShadowSm font-bold p-[0.45rem]
                            absolute top-1 rounded-full gradientBg shadow-md shadow-black/10 -right-24
                            btnTransition btnShadow grid place-items-center md:hidden'
                            onClick={() => handleSetShowModal()}>
                                <FaUser size={12} className="block"/>
                            </button>
                        </div>))
                    : null}
                </div>
            </div>
            <div className="w-80 bg-[#FFEAEA] rounded-lg hidden md:flex justify-center items-end gap-2 p-3
            shadow-sm hover:shadow-md">
                <p className='text-sm font-medium'>
                {shortenText(/* llamar a descripcion de usuario en vez de a un string */
                `Lorem ipsum dolor sit amet consectet ura, adipisicing elit. Perspiasd deleniti 
                expedita laudantium`, 100)}
                </p>
                <button type='button' className='text-[#ed3434] textShadowSm font-bold px-4 py-1
                rounded-2xl min-w-max gradientBg shadow-md shadow-black/10 btnTransition btnShadow'
                onClick={() => handleDescriptionBtn()}>
                    Ver más
                </button>
            </div>
            <UserSwiperDescription
                modalState={showModal}
                setModalState={setShowModal}
                setUiState={setShowUi}
                setBtnState={setShowBtn}
            />
        </div>
        : <UserEditModal
            modalState={modalEditState}
            setModalState={setModalEditState}
            setBtnState={setShowBtn}
        />}
        </>
    )
}

export default UserSwiper;
