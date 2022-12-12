import {
    serverTimestamp,
    setDoc,
    doc
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import FullScreenLoader from './../components/fullScreenLoader/FullScreenLoader';

const OnBoarding = () => {
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
    const {
        user,
        isLoading,
        error
    } = useAuth()
    const navigate = useNavigate()

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
        e.target.reset()
        navigate("/app/welcome")
    }

    return (
        <>
        {user && !isLoading && !error ?
        <div className='formModalXl w-screen h-screen grid place-items-center'>
            <div className="formModal">
                <form onSubmit={handleSubmit} className="newUserForm">
                    <div className='newUserFormContainer1'>
                        <div className='newUserFormData'>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="name" className='text-sm font-bold text-[#ed3434]'>
                                    Nombre Completo
                                </label>
                                <input required placeholder="Tu nombre" name="username" type="text"
                                className='mt-2 bg-white/90 rounded-md p-2 shadow-sm w-[205px] text-sm'
                                onChange={getData}/>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="age" className='text-sm font-bold text-[#ed3434]'>
                                    Edad
                                </label>
                                <input required placeholder="18" name="age" type="number"
                                min="18" max="99" className='mt-2 bg-white/90 rounded-md p-2 shadow-sm
                                w-10 text-sm' onChange={getData}/>
                            </div>
                        </div>
                        <div className='newUserFormGender'>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="gender" className='text-sm font-bold text-[#ed3434]'>
                                    Género
                                </label>
                                <select required name="gender" className='mt-2 bg-white/90 rounded-md p-2
                                shadow-sm w-[205px] text-sm' defaultValue="default"
                                onChange={getData}>
                                    <option value="default" disabled>Opciones</option>
                                    <option value="man">Hombre</option>
                                    <option value="woman">Mujer</option>
                                    <option value="notSpecified">Prefiero no aclararlo</option>
                                </select>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="genderInterest" className='text-sm font-bold text-[#ed3434]'>
                                    Me Interesan
                                </label>
                                <select required name="genderInterest" className='mt-2 bg-white/90 rounded-md
                                p-2 shadow-sm w-[205px] text-sm' defaultValue="default"
                                onChange={getData}>
                                    <option value="default" disabled>Opciones</option>
                                    <option value="man">Hombres</option>
                                    <option value="woman">Mujeres</option>
                                    <option value="everyone">Cualquier género</option>
                                </select>
                            </div>
                        </div>
                        <div className='newUserFormDesc'>
                            <label htmlFor="description" className='text-sm font-bold text-[#ed3434] mt-2'>
                                Descripción
                            </label>
                            <textarea required maxLength={500}
                            placeholder="Cuéntanos un poco sobre tí" name="description"
                            className='mt-2 bg-white/90 rounded-md p-2 w-72 sm:w-80 h-36 shadow-sm text-sm
                            scrollbar-thin scrollbar-track-[#ed3434]/30 scrollbar-thumb-[#ed3434]/90'
                            onChange={getData}/>
                        </div>
                    </div>
                    <div className="newUserFormContainer2">
                        <p className="text-sm font-bold text-[#ed3434]">Fotos del Perfil</p>
                        <input type="url" name="img1" className='bg-white/90 rounded-md p-2 shadow-sm
                        w-[205px] text-sm' placeholder="link a imagen 1" required
                        onChange={getData}/>
                        <input type="url" name="img2" className='bg-white/90 rounded-md p-2 shadow-sm
                        w-[205px] text-sm' placeholder="link a imagen 2" required
                        onChange={getData}/>
                        <input type="url" name="img3" className='bg-white/90 rounded-md p-2 shadow-sm
                        w-[205px] text-sm' placeholder="link a imagen 3" required
                        onChange={getData}/>
                        <input type="url" name="img4" className='bg-white/90 rounded-md p-2 shadow-sm
                        w-[205px] text-sm' placeholder="link a imagen 4" required
                        onChange={getData}/>
                        <small>Se requieren 4 imágenes para crear el perfil.</small>
                    </div>
                    <button type="submit" className='btnSubmit btnSubmitGradient textShadowSm btnTransition py-2
                    btnShadow shadow-md font-bold tracking-wider absolute text-[#FFEAEA] rounded-full px-6'>
                        Continuar
                    </button>
                </form>
            </div>
        </div>
        : <FullScreenLoader />}
        </>
        )
}

export default OnBoarding;
