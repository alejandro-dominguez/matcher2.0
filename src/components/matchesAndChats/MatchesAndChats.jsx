import profile from '../../assets/horacio.png';
import { FaHeart, FaCommentAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { onSnapshot, query, collection, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import useAuth from '../../hooks/useAuth';

const MatchesAndChats = ({
    messagesState,
    matchesState,
    setMatchesState,
    setMessagesState
}) => {
    const [matches, setMatches] = useState([])
    const { user } = useAuth()

    useEffect(
        () => 
        onSnapshot(query(collection(db, "matches"), where("usersMatched", "array-contains", user.uid)),
        (snapshot) => setMatches(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
        )),
    [user, db])

    const handleMatches = () => {
        setMatchesState(true)
        setMessagesState(false)
    }
    
    const handleMessages = () => {
        setMessagesState(true)
        setMatchesState(false)
    }

    return (
        <>
        <div className="relative h-fit w-full">
            <div className="flex items-center justify-around px-6 mt-7 w-full">
                <div className="flex flex-col justify-center items-center cursor-pointer"
                onClick={() => handleMatches()}>
                    <FaHeart className={matchesState ? "text-[#ed3434] text-[2rem]"
                    : "text-[#FF929D] text-[2rem]"} />
                    <p className={matchesState ? "text-[#ed3434] text-sm Sm font-semibold tracking-wide"
                    : "text-neutral-700 text-sm font-semibold tracking-wide textShadowSm"}>
                        Matches
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer"
                onClick={() => handleMessages()}>
                    <FaCommentAlt className={messagesState ? "text-[#ed3434] text-[2rem]"
                    : "text-[#FF929D] text-[2rem]"} />
                    <p className={messagesState ? "text-[#ed3434] text-sm textShadowSm font-semibold tracking-wide"
                    : "text-neutral-700 text-sm font-semibold tracking-wide textShadowSm"}>
                        Mensajes
                    </p>
                </div>
            </div>
            <div className="absolute -bottom-4 rounded-full h-[3px] w-[99.5%] bg-[#ed3434]/60" />
        </div>
        {matchesState && !matches ?
        <div className="matchesAndChatsContainer">
            <div className="p-[0.225rem] rounded-lg gradientBgMatches matchesAndChatsBox cursor-pointer">
                <div className=''>
                    <img className='block w-full' src="" alt="Logo matcher corazón roto" />
                </div>
{/*                 <div className="grid place-items-center p-[0.35rem] rounded-md bg-white transition-colors">
                    <div style={{backgroundImage: `url(${profile})`}} className=" w-14 h-14 bg-cover bg-center
                    transition-colors bg-no-repeat rounded-full border-2 border-[#fb9bc3]" />
                    <p className="text-center text-sm font-bold mt-1 break-words textShadowSm transition-colors">
                        Horacio Perez
                    </p>
                </div> */}
            </div>
        </div>
        : null}
        {messagesState ?
        <div className="grid grid-cols-1 w-full gap-4 py-4 pl-3 pr-5 place-content-start bg-white h-[20.5rem]
        border-[3px] border-[#ed3434]/60 mt-8 rounded-lg overflow-y-auto overflow-x-hidden scrollbar-thin
        scrollbar-track-[#ed3434]/30 scrollbar-thumb-[#ed3434]/90">
            <div className="w-full p-[0.225rem] rounded-lg gradientBgMatches matchesAndChatsBox cursor-pointer">
{/*                 <div className="flex justify-start items-center p-2 gap-2 rounded-md bg-white transition-colors">
                    <div style={{backgroundImage: `url(${profile})`}} className=" w-12 h-12 bg-cover bg-center
                    bg-no-repeat rounded-full border-2 border-[#fb9bc3] transition-colors" />
                    <p className="text-center text-sm font-bold textShadowSm transition-colors">
                        Hola BB
                    </p>
                </div> */}
            </div>
        </div>
        : null}
        </>
    )
}

export default MatchesAndChats;
