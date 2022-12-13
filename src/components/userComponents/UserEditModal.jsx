import { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import useAuth from '../../hooks/useAuth';

const UserEditModal = ({
    modalState,
    setModalState,
    setUiState,
    setBtnState
}) => {
    const [activeClass, SetActiveClass] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        age: 18,
        gender: "",
        genderInterest: "",
        description: "",
        img1: "",
        img2: "",
        img3: "",
        img4: ""
    })
    const { user } = useAuth()

    const getData = (e) => {
            setFormData(
                { ...formData, [e.target.name]: e.target.value }
            )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updateUserProfile = () => {
            setDoc(doc(db, "users", user.uid), {
                id: user.uid,
                username: formData.username,
                age: formData.age,
                gender: formData.gender,
                genderInterest: formData.genderInterest,
                description: formData.description,
                img1: formData.img1,
                img2: formData.img2,
                img3: formData.img3,
                img4: formData.img4,
                timeStamp: serverTimestamp()
            })
        }
        updateUserProfile()
        SetActiveClass(true)
        setTimeout(() => {
            setBtnState(true)
            setUiState(true)
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
        e.target.reset()
    }

    const handleClose = () => {
        SetActiveClass(true)
        setTimeout(() => {
            setBtnState(true)
            setUiState(true)
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
    }

    return (
        <>
        {modalState ?
        <>
        <div className={activeClass ? "editModal cardShadow fadeInModal active"
        : "editModal cardShadow fadeInModal"}>
            <button type='button' className='top-6 right-7 md:right-6 absolute text-[#2346e3] z-10
            iconShadowSm transition-all hover:scale-105' onClick={() => handleClose()}>
                <FaTimesCircle className="text-[1.75rem] md:text-[2rem]" />
            </button>
            <form onSubmit={handleSubmit} className="grid place-items-start px-2 py-6 gap-4 h-[92%]
            w-[94%] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-[#ed3434]/30
            scrollbar-thumb-[#ed3434]/90">
                <div className='flex flex-col items-start justify-center gap-2'>
                    <p className="text-sm font-bold text-[#ed3434]">Editar Fotos</p>
                    <input type="url" name="img1" className='mt-2 bg-white/90 rounded-md p-2
                    shadow-sm w-52 md:w-60 text-sm' placeholder="link a imagen 1" required
                    onChange={getData}/>
                    <input type="url" name="img2" className='mt-2 bg-white/90 rounded-md p-2
                    shadow-sm w-52 md:w-60 text-sm' placeholder="link a imagen 2" required
                    onChange={getData}/>
                    <input type="url" name="img3" className='mt-2 bg-white/90 rounded-md p-2
                    shadow-sm w-52 md:w-60 text-sm' placeholder="link a imagen 3" required
                    onChange={getData}/>
                    <input type="url" name="img4" className='mt-2 bg-white/90 rounded-md p-2
                    shadow-sm w-52 md:w-60 text-sm' placeholder="link a imagen 4" required
                    onChange={getData}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="description" className='text-sm font-bold text-[#ed3434] mt-2'>
                        Editar Descripción
                    </label>
                    <textarea required maxLength={500}
                    placeholder="Cuéntanos un poco sobre tí" name="description"
                    className='mt-2 bg-white/90 rounded-md p-2 w-52 md:w-60 h-36 shadow-sm text-sm
                    scrollbar-thin scrollbar-track-[#ed3434]/30 scrollbar-thumb-[#ed3434]/90'
                    onChange={getData}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="name" className='text-sm font-bold text-[#ed3434]'>
                        Editar Nombre
                    </label>
                    <input placeholder="Tu nombre" name="username" type="text" required
                    className='mt-2 bg-white/90 rounded-md p-2 shadow-sm w-52 md:w-60 text-sm'
                    onChange={getData}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="age" className='text-sm font-bold text-[#ed3434]'>
                        Editar Edad
                    </label>
                    <input placeholder="18" name="age" type="number" required
                    min="18" max="99" className='mt-2 bg-white/90 rounded-md p-2 shadow-sm
                    w-10 text-sm' onChange={getData}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="gender" className='text-sm font-bold text-[#ed3434]'>
                        Editar Género
                    </label>
                    <select name="gender" className='mt-2 bg-white/90 rounded-md p-2
                    shadow-sm w-52 md:w-60 text-sm' defaultValue="default" required
                    onChange={getData}>
                        <option value="default" disabled>Opciones</option>
                        <option value="man">Hombre</option>
                        <option value="woman">Mujer</option>
                        <option value="notSpecified">Prefiero no aclararlo</option>
                    </select>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="genderInterest" className='text-sm font-bold text-[#ed3434]'>
                        Editar Intereses
                    </label>
                    <select name="genderInterest" className='mt-2 bg-white/90 rounded-md p-2
                    shadow-sm w-52 md:w-60 text-sm' defaultValue="default" required
                    onChange={getData}>
                        <option value="default" disabled>Opciones</option>
                        <option value="man">Hombres</option>
                        <option value="woman">Mujeres</option>
                        <option value="everyone">Cualquier género</option>
                    </select>
                </div>
                <button type="submit" className='btnSubmitGradient textShadowSm btnTransition btnShadow
                shadow-md font-bold tracking-wider text-[#FFEAEA] mt-4 rounded-full px-6 py-2'>
                    Continuar
                </button>
            </form>
        </div>
        </>
        : null}
        </>
    )
}

export default UserEditModal;
