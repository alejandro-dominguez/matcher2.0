import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import useAuth from "./useAuth";

const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {
    const [loadingUser, setLoadingUser] = useState(false)
    const [userError, setUserError] = useState(null)
    const [userProfile, setUserProfile] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        setLoadingUser(true)
        let getUserCards
        const fetchData = async () => {
            getUserCards = onSnapshot(collection(db, "users"), (snapshot) => {
                try {
                    setUserProfile(
                        snapshot.docs
                            .filter((doc) => doc.id === user.uid)
                            .map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                } catch (error) {
                    setUserError(error)
                }
                finally {
                    setLoadingUser(false)
                }
            })
        }
        fetchData()
        return getUserCards
    }, [user, db])

    return (
        <ProfileContext.Provider
            value={{
                loadingUser,
                userError,
                userProfile
            }}
        >
            {children}
        </ProfileContext.Provider>
    )
}

export default function useProfiles() {
    return useContext(ProfileContext)
}
