import logo from "../assets/logoRegister.svg";
import { FaUser, FaHeart } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate()
    
    const handleRegister = () => {
        googleLogin()
        navigate("/app/onboarding")
    }
    
    const handleLogin = () => {
        googleLogin()
        navigate("/app/welcome")
    }


    return (
        <main className='pageGradientBg h-screen w-full flex flex-col gap-12 items-center justify-center'>
            <div className="w-56">
                <img src={logo} alt="Matcher logo" className='w-full block' />
            </div>
            <div className='w-64 text-center font-bold text-xl textShadowRed'>
                <p className="text-[#ed3434] textShadowSm">
                    ¡Regístrate en Matcher y conoce un mundo de personas que te esperan en nuestra comunidad!
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                <button type="button" className="bg-[#ed3434] text-[#FFEAEA] rounded-lg min-w-[16rem] 
                py-4 flex justify-center gap-4 items-center shadow-md btnTransition btnHoverShadow"
                onClick={() => handleRegister()}>
                    <FaUser size={22} />
                    <p className="font-semibold text-[0.95rem]">Registrarme con Google</p>
                </button>
                <button type="button" className="rounded-lg min-w-[16rem] py-4 flex justify-center
                items-center shadow-md gap-4 btnTransition bg-[#FFEAEA] btnHoverShadowRed btnGradient"
                onClick={() => handleLogin()}>
                    <FaHeart color="#ed3434" size={20} />
                    <p className="font-semibold text-[0.95rem]">Ya he creado una cuenta</p>
                </button>
            </div>
        </main>
    )
}

export default Register;
