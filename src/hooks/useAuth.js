import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { auth } from "../firebase/config";

const AuthContext = createContext({});

const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
    const [initialLoading, setInitialLoading] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            setUser(null)
        }
        setInitialLoading(false)
    }), [user])

    const googleLogin = async () => {
        setIsLoading(true)
        try {
            const res = await signInWithPopup(auth, googleProvider)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
        .catch(error => setError(error))
        .finally(() => setIsLoading(false))
    }

    return (
        <AuthContext.Provider value={{
            user,
            googleLogin,
            isLoading,
            logout,
            error,
        }}>
            {!initialLoading && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}
