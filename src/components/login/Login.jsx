import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Login = ({ modalState, setModalState }) => {
    const [activeClass, SetActiveClass] = useState(false)
    const navigate = useNavigate()

    const handleClose = () => {
        SetActiveClass(true)
        setTimeout(() => {
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
        navigate("/feed")
    }

    return (
        <>
        {modalState ?
        <>
        <div className='w-full h-full fixed top-0 left-0 bg-black/50 flex flex-col
        items-center justify-center'>
            <div className={activeClass ? "loginModal fadeInModal active"
            : "loginModal fadeInModal"}>
                <FaHeart className='text-[#ed3434] text-[2.5rem] drop-shadow-md'/>
                <button type="button" className='btnSubmitGradient textShadowSm btnTransition btnShadow
                shadow-md font-bold tracking-wider text-lg text-[#FFEAEA] rounded-full px-6 py-2'
                onClick={() => handleClose()}>
                    Continuar al feed
                </button>
            </div>
        </div>
        </>
        : null }
        </>
    )
}

export default Login;
