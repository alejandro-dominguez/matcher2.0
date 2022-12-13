import logo from '../../assets/logoNoMoreMatches.svg';

const NoMoreMatches = () => {
    return (
        <>
        <div className="noMoreMatchesContainer cardShadow fadeInOpacity">
                <p className='text-center font-Inter font-semibold'>
                    ¡Ups! parece que por el momento no quedan más usuarios que coincidan con tus intereses.
                </p>
                <div className='w-28 md:w-32'>
                    <img src={logo} alt="iconos de mensajes con puntos suspensivos" className='block w-full' />
                </div>
                <p className='text-[#ed3434] text-center font-Inter font-extrabold text-xl textShadowSm'>
                    ¡Regresa más tarde<br />para buscar a tu<br />MATCH PERFECTO!
                </p>
        </div>
        </>
    )
}

export default NoMoreMatches;
