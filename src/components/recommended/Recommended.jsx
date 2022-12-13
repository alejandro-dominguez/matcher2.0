import horacio from '../../assets/horacio.png';
import { FaGrinHearts } from 'react-icons/fa';

const Recommended = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-2'>
            <div className="flex flex-col justify-center items-center gap-1">
                <FaGrinHearts size={35} className="text-[#FFEAEA] sideBarIcon" />
                <h2 className='text-[#FFEAEA] sideBarIcon font-semibold tracking-wide'>
                    Recomendados
                    </h2>
            </div>
            <div className="recommendedImgContainer flex flex-col items-center justify-center gap-4">
                <div className='flex flex-col items-center justify-center cursor-pointer transition-all
                hover:text-[#FFEAEA] duration-200 recommendedCard'>
                    <div style={{backgroundImage: `url(${horacio})`}} className='rounded-full imgShadow
                    bg-cover bg-center bg-no-repeat recommendedImg transition-all duration-200'/>
                    <div className="flex flex-col items-center justify-center mt-1 text-center px-1">
                        <h3 className='font-semibold text-sm textShadowSm'>
                            Horacio Quiroga
                        </h3>
                        <p className='font-medium text-sm textShadowSm'>
                            84 años
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer transition-all
                hover:text-[#FFEAEA] duration-200 recommendedCard'>
                    <div style={{backgroundImage: `url(${horacio})`}} className='rounded-full imgShadow
                    bg-cover bg-center bg-no-repeat recommendedImg transition-all duration-200'/>
                    <div className="flex flex-col items-center justify-center mt-1 text-center px-1">
                        <h3 className='font-semibold text-sm textShadowSm'>
                            Horacio Quiroga
                        </h3>
                        <p className='font-medium text-sm textShadowSm'>
                            84 años
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer transition-all
                hover:text-[#FFEAEA] duration-200 recommendedCard'>
                    <div style={{backgroundImage: `url(${horacio})`}} className='rounded-full imgShadow
                    bg-cover bg-center bg-no-repeat recommendedImg transition-all duration-200'/>
                    <div className="flex flex-col items-center justify-center mt-1 text-center px-1">
                        <h3 className='font-semibold text-sm textShadowSm'>
                            Horacio Quiroga
                        </h3>
                        <p className='font-medium text-sm textShadowSm'>
                            84 años
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommended;
