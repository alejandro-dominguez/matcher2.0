import {
    UserSideBar,
    UserSwiperCard,
    FullScreenLoader,
    UserMobileNav,
    UserMobileFooter,
    UserBtns
} from '../components';
import useAuth from "../hooks/useAuth";
import useProfiles from '../hooks/useProfiles';

const UserPage = () => {
    const { isLoading } = useAuth()
    const { loadingUser, error } = useProfiles()

    return (
        <>
        {isLoading || loadingUser ? <FullScreenLoader/>
        : !error ?
        <div className='xlContainer'>
            <div className="pageGradientBg h-screen w-full flex flex-col md:flex-row justify-center
            md:justify-between items-center relative">
                <div className="sideBarContainer md:block hidden">
                    <UserSideBar />
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <UserMobileNav />
                </div>
                <main className="swiperContainer flex flex-col items-center justify-center relative">
                    <UserSwiperCard />
                </main>
                <div className="sideBarContainer md:block hidden bg-[#FF929D]">
                    <UserBtns />
                </div>
                <div className='md:hidden block'>
                    <UserMobileFooter />
                </div>
            </div>
        </div>
        : null}
        </>
    )
}

export default UserPage;
