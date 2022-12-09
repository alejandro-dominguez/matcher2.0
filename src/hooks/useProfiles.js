import {
    createContext,
    useContext,
    useMemo,
    useState,
    useEffect
} from "react";
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import useAuth from "./useAuth";

const ProfilesContext = createContext({});

export const ProfilesProvider = ({ children }) => {
    const [loadingProfiles, setLoadingProfiles] = useState(false)
    const [loadingUser, setLoadingUser] = useState(false)
    const [error, setError] = useState(null)
    const [profiles, setProfiles] = useState([])
    const [userProfile, setUserProfile] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        setLoadingProfiles(true)
        let getCards
        const fetchData = async () => {
            getCards = onSnapshot(collection(db, "users"), snapshot => {
                try {
                    setProfiles(
                        snapshot.docs
                            .filter(doc => doc.id !== user.uid)
                            .map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                } catch (error) {
                    setError(error)
                }
                finally {
                    setLoadingProfiles(false)
                }
            })
        }
        fetchData()
        return getCards
    }, [])

    useEffect(() => {
        setLoadingUser(true)
        let getUserCards
        const fetchData = async () => {
            getUserCards = onSnapshot(collection(db, "users"), snapshot => {
                try {
                    setUserProfile(
                        snapshot.docs
                            .filter(doc => doc.id === user.uid)
                            .map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                } catch (error) {
                    setError(error)
                }
                finally {
                    setLoadingUser(false)
                }
            })
        }
        fetchData()
        return getUserCards
    }, [])

    const memoValues = useMemo(() => ({
        profiles,
        userProfile,
        loadingProfiles,
        loadingUser,
        error,
    }), [profiles, userProfile, loadingProfiles, loadingUser, error])

    return (
        <ProfilesContext.Provider value={memoValues}>
            {children}
        </ProfilesContext.Provider>
    )
}

export default function useProfiles() {
    return useContext(ProfilesContext)
}
