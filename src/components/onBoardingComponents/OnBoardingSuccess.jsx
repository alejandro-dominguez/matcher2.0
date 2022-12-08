import logo from "../../assets/logoRegister.svg";
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const OnBoardingSuccess = ({
    modalState,
    modalSuccess,
    setModalState,
    setModalSuccess
}) => {
    const handleClose = () => {
        setModalSuccess(false)
        setModalState(false)
    }

    return (
        <>
        {modalState && modalSuccess ?
        <>
        <div className='w-full h-full fixed top-0 left-0 bg-black/50 flex flex-col items-center
        justify-center'>
            <div className="formModalSuccessXl fixed top-0 left-0 w-full h-full grid place-items-center">
                <div className="formModalSuccess fadeInModal">
                    <div className="w-60">
                        <img src={logo} alt="Matcher logo" className="w-full block" />
                    </div>
                    <div>
                        <p className="text-[#ed3434] textShadowSm text-center font-bold text-3xl">
                            ¡Felicitaciones!
                        </p>
                    </div>
                    <div className="px-6">
                        <p className="text-neutral-800 text-center textShadowSm font-semibold text-xl">
                            ¡Ya estás formando parte de nuestra comunidad!
                        </p>
                    </div>
                    <div onClick={() => handleClose()}>
                        <Link to="/feed">
                            <button type="button" className="btnSubmitGradient uppercase textShadowSm
                            btnTransition flex justify-center items-center btnShadow shadow-md font-bold
                            tracking-wider gap-2 text-[#FFEAEA] rounded-full px-6 py-2">
                                <p className="textShadowSm">Ir al inicio</p>
                                <FaHeart size={18} className="textShadowSm" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
        : null}
        </>
    )
}

export default OnBoardingSuccess;
