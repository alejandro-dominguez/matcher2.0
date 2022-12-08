import { UserSwiper } from "..";
import { useState } from 'react';

const UserSwiperCard = () => {
    const [showEditModal, setShowEditModal] = useState(false)

    const userSwiperSlides = [
        {url: "https://i.ibb.co/k1F61YG/card-profile.png"},
        {url: "https://i.ibb.co/pZrkmwQ/sina-rezakhani-XES0z8w0-Ugc-unsplash.jpg"},
        {url: "https://i.ibb.co/cTcGd7Y/artsiom-kavaliou-u5-WQ-i-ML1-R8-unsplash.jpg"},
        {url: "https://i.ibb.co/ysb1CKd/jonathan-mendoza-Klcw-ZJgv-MC8-unsplash.jpg"},
    ]

    return (
        <>
        <main className='relative w-[18.25rem] md:w-[22rem] aspect-[4/5] flex flex-col
        items-center justify-center gap-4'>
            <UserSwiper
                userSwiperSlides={userSwiperSlides}
                modalEditState={showEditModal}
                setModalEditState={setShowEditModal}
            />
        </main>
        </>
    )
}

export default UserSwiperCard;
