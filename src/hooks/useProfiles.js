import {
    collection,
    getDocs,
    onSnapshot,
    query,
    where
} from "firebase/firestore";
import { useState, useEffect } from 'react';
import { db } from "../firebase/config";
import useAuth from "../hooks/useAuth";

const useProfiles = () => {
    const [loadingProfiles, setLoadingProfiles] = useState(false)
    const [profilesError, setProfilesError] = useState(null)
    const [profiles, setProfiles] = useState([])
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
                    setProfilesError(error)
                }
                finally {
                    setLoadingProfiles(false)
                }
            })
        }
        fetchData()
        return getCards
    }, [user, db])

    return [loadingProfiles, profilesError, profiles]
}

export default useProfiles;
