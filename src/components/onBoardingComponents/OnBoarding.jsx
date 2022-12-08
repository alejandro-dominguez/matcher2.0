import { FaTimesCircle } from 'react-icons/fa';
import { useState } from 'react';
import { OnBoardingSuccess } from '../';

const OnBoarding = ({ modalState, setModalState }) => {
    const [activeClass, SetActiveClass] = useState(false)
    const [showModalSuccess, setShowModalSuccess] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        age: 18,
        gender: "",
        genderInterest: "",
        description: "",
    })
    const [img1, setImg1] = useState([])
    const [img2, setImg2] = useState([])
    const [img3, setImg3] = useState([])
    const [img4, setImg4] = useState([])

    const getData = (e) => {
            setFormData(
                { ...formData, [e.target.name]: e.target.value }
            )
    }

    const handleImg1 = (e) => {
        const target = e.target
        const file = (target.files)[0]
        setImg1(file)
    }

    const handleImg2 = (e) => {
        const target = e.target
        const file = (target.files)[0]
        setImg2(file)
    }

    const handleImg3 = (e) => {
        const target = e.target
        const file = (target.files)[0]
        setImg3(file)
    }

    const handleImg4 = (e) => {
        const target = e.target
        const file = (target.files)[0]
        setImg4(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData, img1, img2, img3, img4)
        setShowModalSuccess(true)
        e.target.reset()
    }

    const handleClose = () => {
        SetActiveClass(true)
        setTimeout(() => {
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
        <div className='formModalXl w-full h-full fixed top-0 left-0 bg-black/50 flex flex-col
        items-center justify-center'>
            <div className={activeClass ? "formModal formModalXl fadeInModal active"
            : "formModal formModalXl fadeInModal"}>
                <button type='button' className='btnNewUserFormClose absolute text-[#2346e3] iconShadowSm
                transition-all hover:scale-105' onClick={() => handleClose()}>
                    <FaTimesCircle className="text-[1.75rem] md:text-[2.5rem]" />
                </button>
                <form onSubmit={handleSubmit} className="newUserForm">
                    <div className='newUserFormContainer1'>
                        <div className='newUserFormData'>
                            <div className='flex flex-col items-start justify-center'>
                                <label htmlFor="name" className='text-sm font-bold text-[#ed3434]'>
                                    Nombre Completo
                                </label>
                                <input required placeholder="Tu nombre" name="userName" type="text"
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
                                <select required name="genderInterest" className='mt-2 bg-white/90 rounded-md p-2
                                shadow-sm w-[205px] text-sm' defaultValue="default"
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
                        <p className="text-sm font-bold text-[#ed3434]">Fotos Del Perfil</p>
                        <div className="newUserFormImages">
                            <label htmlFor="img1" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input required type="file" name="img1" accept=".png, .jpg, .jpeg" className="hidden"
                            onChange={handleImg1} id="img1"/>
                            <label htmlFor="img2" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input required type="file" name="img2" accept=".png, .jpg, .jpeg" className="hidden"
                            onChange={handleImg2} id="img2"/>
                            <label htmlFor="img3" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input required type="file" name="img3" accept=".png, .jpg, .jpeg" className="hidden"
                            onChange={handleImg3} id="img3"/>
                            <label htmlFor="img4" className='relative aspect-[4/5] bg-[#e0d4d4] w-24
                            rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                                <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                                rotate-45 rounded-full absolute -bottom-1 -right-1" />
                            </label>
                            <input required type="file" name="img4" accept=".png, .jpg, .jpeg" className="hidden"
                            onChange={handleImg4} id="img4"/>
                        </div>
                        <small className='mt-2'>Se requieren 4 imágenes para crear el perfil.</small>
                    </div>
                    <button type="submit" className='btnSubmit btnSubmitGradient textShadowSm btnTransition py-2
                    btnShadow shadow-md font-bold tracking-wider absolute text-[#FFEAEA] rounded-full px-6'>
                        Continuar
                    </button>
                </form>
            </div>
        </div>
        <OnBoardingSuccess
            modalState={modalState}
            setModalState={setModalState}
            modalSuccess={showModalSuccess}
            setModalSuccess={setShowModalSuccess}
        />
        </>
        : null}
        </>
    )
}

export default OnBoarding;
