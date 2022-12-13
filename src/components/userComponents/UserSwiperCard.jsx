import { UserSwiper } from "../";
import { useState } from 'react';

const UserSwiperCard = ({ userProfile }) => {
    const [showEditModal, setShowEditModal] = useState(false)
    const loggedUser = userProfile[0]

    const userSwiperSlides = [
        {url: `${loggedUser.img1}`},
        {url: `${loggedUser.img2}`},
        {url: `${loggedUser.img3}`},
        {url: `${loggedUser.img4}`}
    ]

    return (
        <main className='relative w-[18.25rem] md:w-[22rem] aspect-[4/5] flex flex-col
        items-center justify-center gap-4'>
            <UserSwiper
                loggedUser={loggedUser}
                userSwiperSlides={userSwiperSlides}
                modalEditState={showEditModal}
                setModalEditState={setShowEditModal}
            />
        </main>
    )
}

export default UserSwiperCard;
