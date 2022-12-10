import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";
import {
    onSnapshot,
    collection,
    getDocs,
    query,
    where,
} from 'firebase/firestore';
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
            const dislikes = await getDocs(collection(db, "users", user.uid, "dislikes"))
            .then((snapshot) => snapshot.docs.map((doc) => doc.id))
            
            const likes = await getDocs(collection(db, "users", user.uid, "likes"))
            .then((snapshot) => snapshot.docs.map((doc) => doc.id))

            const dislikedUsers = dislikes.length > 0 ? dislikes : ["test"]
            const likedUsers = likes.length > 0 ? likes : ["test"]

            getCards = onSnapshot(query(collection(db, "users"),
            where("id", "not-in", [...dislikedUsers, ...likedUsers])), (snapshot) => {
                try {
                    setProfiles(
                        snapshot.docs
                            .filter((doc) => doc.id !== user.uid)
                            .map((doc) => ({
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
    }, [user.uid])

    useEffect(() => {
        setLoadingUser(true)
        let getUserCards
        const fetchData = () => {
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
                    setError(error)
                }
                finally {
                    setLoadingUser(false)
                }
            })
        }
        fetchData()
        return getUserCards
    }, [user])

    return (
        <ProfilesContext.Provider value={{
            profiles,
            userProfile,
            loadingProfiles,
            loadingUser,
            error,
        }}>
            {children}
        </ProfilesContext.Provider>
    )
}

export default function useProfiles() {
    return useContext(ProfilesContext)
}
