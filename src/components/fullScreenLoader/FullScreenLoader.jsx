import logo from '../../assets/logoLoader.svg';

const FullScreenLoader = () => {
    return (
        <div className='gradientBg h-screen w-screen flex flex-col items-center justify-center'>
            <div className="w-60 sm:w-64 loadingLogo">
                <img src={logo} alt="Matcher logo" className='w-full block' />
            </div>
        </div>
    )
}

export default FullScreenLoader;
