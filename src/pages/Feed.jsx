import { SideBar,
    SwiperCard,
    SwiperCard2,
    SwiperCard3,
    NoMoreMatches,
    Recommended,
    MobileNav,
    MobileFooter,
    FullScreenLoader
} from './../components/';
import useAuth from "../hooks/useAuth";

const Feed = () => {
    const { user, isLoading } = useAuth()

    return (
        <>
        {isLoading ? <FullScreenLoader />
        : <div className='xlContainer'>
            <div className="pageGradientBg flex flex-col-reverse md:flex md:flex-row items-center justify-center
            h-screen w-full relative">
                <div className="sideBarContainer md:block hidden">
                    <SideBar />
                </div>
                <div className='md:hidden block'>
                    <MobileFooter />
                </div>
                <main className="swiperContainer flex flex-col items-center justify-center relative">
                    <NoMoreMatches />
                    <SwiperCard />
                    <SwiperCard2 />
                    <SwiperCard3 />
                </main>
                <div className="sideBarContainer md:block bg-[#FF929D] hidden">
                    <Recommended />
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <MobileNav />
                </div>
            </div>
        </div>}
        </>
    )
}

export default Feed;
