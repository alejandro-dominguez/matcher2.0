import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './hooks/useAuth';
import { ProfilesProvider } from './hooks/useProfiles';

const root = ReactDOM.createRoot(
	  document.getElementById('root')
);

root.render(
    <AuthProvider>
        <ProfilesProvider>
            <div className='overflow-hidden'>
                <App/>
            </div>
        </ProfilesProvider>
    </AuthProvider>
);

reportWebVitals();
