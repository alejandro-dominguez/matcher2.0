import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register, WelcomePage, AppPage, ErrorPage } from './pages/';
import useAuth from "./hooks/useAuth";

const App = () => {
    const { user } = useAuth()

    return (
      	<BrowserRouter>
            <Routes>
                {!user ? <Route path="/" element={<Register />} errorElement={<ErrorPage/>} />
                : 
                <Route path="/app/*" element={<AppPage />} errorElement={<ErrorPage/>} />}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
