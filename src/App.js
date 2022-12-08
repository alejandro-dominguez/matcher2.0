import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register, Feed, UserPage, ErrorPage } from './pages/';

const App = () => {

    return (
      	<BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} errorElement={<ErrorPage/>} />
                <Route path="/feed" element={<Feed />} errorElement={<ErrorPage />} />
                <Route path="/user" element={<UserPage />} errorElement={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
