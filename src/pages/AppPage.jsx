import React from 'react';
import { ProfilesProvider } from './../hooks/useProfiles';
import { Route, Routes } from 'react-router-dom';
import { WelcomePage, OnBoarding, Feed, UserPage, ErrorPage } from './';
import useAuth from '../hooks/useAuth';

const AppPage = () => {
    const { user } = useAuth()

    return (
        <ProfilesProvider>
			<Routes>
                {user ?
                <>
				<Route path="onboarding" element={<OnBoarding />} errorElement={ErrorPage} />
				<Route path="welcome" element={<WelcomePage />} errorElement={ErrorPage} />
				<Route path="feed" element={<Feed />} errorElement={ErrorPage}/>
				<Route path="user" element={<UserPage />} errorElement={ErrorPage}/>
                </>
                : <Route path="error" element={<ErrorPage />} />}
			</Routes>
        </ProfilesProvider>
    )
}

export default AppPage;
