import { React } from 'react';
import {
    SideBar,
    SwiperCard,
    NoMoreMatches,
    Recommended,
    MobileNav,
    MobileFooter,
    FullScreenLoader
} from './../components/';
import useAuth from "../hooks/useAuth";
import useProfiles from '../hooks/useProfiles';

const Feed = () => {
    const { isLoading } = useAuth()
    const { profiles, loadingProfiles, error } = useProfiles()

    return (
        <>
        {isLoading || loadingProfiles ? <FullScreenLoader />
        : !error ?
        <div className='xlContainer'>
            <div className="pageGradientBg flex flex-col-reverse md:flex md:flex-row items-center justify-center
            h-screen w-full relative">
                <div className="sideBarContainer md:block hidden">
                    <SideBar />
                </div>
                <div className='md:hidden block'>
                    <MobileFooter />
                </div>
                <main className="swiperContainer flex flex-col items-center justify-center relative">
                    {profiles ?
                    profiles.map((profile, i) => <SwiperCard profile={profile} key={i} />)
                    : null}
                    {!profiles || profiles ? <NoMoreMatches />
                    : null}
                </main>
                <div className="sideBarContainer md:block bg-[#FF929D] hidden">
                    <Recommended />
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <MobileNav />
                </div>
            </div>
        </div>
        : null}
        </>
    )
}

export default Feed;
