import {
    UserSideBar,
    UserSwiperCard,
    FullScreenLoader,
    UserMobileNav,
    UserMobileFooter,
    UserBtns
} from '../components';
import { ErrorPage } from '../pages/';
import useProfiles from './../hooks/useProfiles';

const UserPage = () => {
    const {
        loadingUser,
        userProfile,
        userError
    } = useProfiles()
    
    return (
        <>
        {loadingUser ? <FullScreenLoader/>
        : userProfile && !userError ?
        <div className='xlContainer'>
            <div className="pageGradientBg h-screen w-full flex flex-col md:flex-row justify-center
            md:justify-between items-center relative">
                <div className="sideBarContainer md:block hidden">
                    <UserSideBar userProfile={userProfile} />
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <UserMobileNav />
                </div>
                <main className="swiperContainer flex flex-col items-center justify-center relative">
                    <UserSwiperCard userProfile={userProfile} />
                </main>
                <div className="sideBarContainer md:block hidden bg-[#FF929D]">
                    <UserBtns />
                </div>
                <div className='md:hidden block'>
                    <UserMobileFooter userProfile={userProfile} />
                </div>
            </div>
        </div>
        : <ErrorPage />}
        </>
    )
}

export default UserPage;
