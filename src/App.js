import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register, AppPage, ErrorPage } from './pages/';
import useAuth from "./hooks/useAuth";

const App = () => {
    const { isLoading } = useAuth()

    return (
      	<BrowserRouter>
            <Routes>
                {!isLoading || isLoading ?
                <>
                <Route path="/" element={<Register />} errorElement={<ErrorPage />} />
                <Route path="/app/*" element={<AppPage />} errorElement={<ErrorPage />} />
                </>
                : <ErrorPage />}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
