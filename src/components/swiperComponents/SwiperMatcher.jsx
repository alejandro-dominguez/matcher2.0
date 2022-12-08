import { Swiper } from '..';

const SwiperMatcher = ({ setCardState, setActiveClassState }) => {
    const swiperSlides = [
        {url: "https://i.ibb.co/k1F61YG/card-profile.png"},
        {url: "https://i.ibb.co/pZrkmwQ/sina-rezakhani-XES0z8w0-Ugc-unsplash.jpg"},
        {url: "https://i.ibb.co/cTcGd7Y/artsiom-kavaliou-u5-WQ-i-ML1-R8-unsplash.jpg"},
        {url: "https://i.ibb.co/ysb1CKd/jonathan-mendoza-Klcw-ZJgv-MC8-unsplash.jpg"},
    ]

    return (
    <div className='relative w-[18.25rem] md:w-[22rem] aspect-[4/5]'>
        <Swiper
            swiperSlides={swiperSlides}
            setCardState={setCardState}
            setActiveClassState={setActiveClassState}
        />
    </div>
    )
}

export default SwiperMatcher;
