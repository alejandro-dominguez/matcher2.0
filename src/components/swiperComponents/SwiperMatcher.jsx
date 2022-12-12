import { Swiper } from '../';

const SwiperMatcher = ({
    profile,
    setCardState,
    setActiveClassState,
    setFadeState
}) => {
    const swiperSlides = [
        {url: `${profile.img1}`},
        {url: `${profile.img2}`},
        {url: `${profile.img3}`},
        {url: `${profile.img4}`}
    ]

    return (
        <>
        {profile ?
        <div className='relative w-[18.25rem] md:w-[22rem] aspect-[4/5]'>
            <Swiper
                profile={profile}
                swiperSlides={swiperSlides}
                setCardState={setCardState}
                setActiveClassState={setActiveClassState}
                setFadeState={setFadeState}
            />
        </div>
        : null}
        </>
    )
}

export default SwiperMatcher;
