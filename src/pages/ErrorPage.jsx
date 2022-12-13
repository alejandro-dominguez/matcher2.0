import logo from '../assets/logoError.svg';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='pageGradientBg h-screen w-screen flex flex-col items-center justify-center gap-6
        sm:gap-8 md:gap-10'>
            <h1 className='text-center text-5xl font-extrabold tracking-wide text-[#ed3434] textShadowSm'>
                Error 404
            </h1>
            <div className="w-52">
                <img src={logo} alt="Matcher logo con corazón roto" className='w-full block' />
            </div>
            <p className='text-center font-semibold text-lg textShadowSm px-8'>
                ¡Ups! Parece que algo se ha roto por aquí.
                <br />
                Por favor regresa al la pantalla de inicio
            </p>
            <Link to="/">
                <button type='button' className='grid place-items-center rounded-full p-6 btnUserPageGradient
                text-[#FFEAEA] gap-1 transition-transform hover:scale-[1.025]'>
                    <FaHeart className='text-2xl' />
                    <p className='text-xl font-semibold'>Home</p>
                </button>
            </Link> 
        </div>
    )
}

export default ErrorPage;
