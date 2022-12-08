import {
    createContext,
    useContext,
    useEffect,
    useMemo,
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
    }), [])

    const googleLogin = async () => {
        setIsLoading(true)
        try {
            const res = await signInWithPopup(auth, googleProvider)
            console.log(res.user)
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

    const memoValues = useMemo(() => ({
        user,
        googleLogin,
        isLoading,
        logout,
        error,
    }), [user, isLoading, error])

    return (
        <AuthContext.Provider value={memoValues}>
            {!initialLoading && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}
