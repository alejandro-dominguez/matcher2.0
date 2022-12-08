import { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const UserEditModal = ({ modalState, setModalState, setBtnState }) => {
    const [activeClass, SetActiveClass] = useState(false)
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

    const getData = (e) => {
            setFormData(
                { ...formData, [e.target.name]: e.target.value }
            )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData, img1, img2, img3, img4)
        SetActiveClass(true)
        setBtnState(true)
        setTimeout(() => {
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
        e.target.reset()
    }

    const handleClose = () => {
        SetActiveClass(true)
        setBtnState(true)
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
        <div className={activeClass ? "editModal cardShadow fadeInModal active"
        : "editModal cardShadow fadeInModal"}>
            <button type='button' className='top-6 right-6 absolute text-[#2346e3] z-10
            iconShadowSm transition-all hover:scale-105' onClick={() => handleClose()}>
                <FaTimesCircle className="text-[1.75rem] md:text-[2rem]" />
            </button>
            <form onSubmit={handleSubmit} className="grid place-items-start px-2 py-6 gap-4 h-[92%]
            w-[94%] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-[#ed3434]/30
            scrollbar-thumb-[#ed3434]/90">
                <p className="text-sm font-bold text-[#ed3434]">Editar Fotos</p>
                <div className="grid grid-cols-2 place-items-start gap-4 w-60">
                    <label htmlFor="img1" className='relative aspect-[4/5] bg-[#e0d4d4] w-28
                    rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                        <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                        rotate-45 rounded-full absolute -bottom-1 -right-1" />
                    </label>
                    <input type="file" name="img1" accept=".png, .jpg, .jpeg" className="hidden"
                    onChange={handleImg1}/>
                    <label htmlFor="img2" className='relative aspect-[4/5] bg-[#e0d4d4] w-28
                    rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                        <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                        rotate-45 rounded-full absolute -bottom-1 -right-1" />
                    </label>
                    <input type="file" name="img2" accept=".png, .jpg, .jpeg" className="hidden"
                    onChange={handleImg2}/>
                    <label htmlFor="img3" className='relative aspect-[4/5] bg-[#e0d4d4] w-28
                    rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                        <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                        rotate-45 rounded-full absolute -bottom-1 -right-1" />
                    </label>
                    <input type="file" name="img3" accept=".png, .jpg, .jpeg" className="hidden"
                    onChange={handleImg3}/>
                    <label htmlFor="img4" className='relative aspect-[4/5] bg-[#e0d4d4] w-28
                    rounded-lg cursor-pointer border-2 border-[#E87C7C] border-dashed'>
                        <FaTimesCircle size={18} className="bg-[#FFEAEA] text-[#ed3434]
                        rotate-45 rounded-full absolute -bottom-1 -right-1" />
                    </label>
                    <input type="file" name="img4" accept=".png, .jpg, .jpeg" className="hidden"
                    onChange={handleImg4}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="description" className='text-sm font-bold text-[#ed3434] mt-2'>
                        Editar Descripción
                    </label>
                    <textarea required maxLength={500}
                    placeholder="Cuéntanos un poco sobre tí" name="description"
                    className='mt-2 bg-white/90 rounded-md p-2 w-60 h-36 shadow-sm text-sm
                    scrollbar-thin scrollbar-track-[#ed3434]/30 scrollbar-thumb-[#ed3434]/90'
                    onChange={getData}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="name" className='text-sm font-bold text-[#ed3434]'>
                        Editar Nombre
                    </label>
                    <input placeholder="Tu nombre" name="userName" type="text"
                    className='mt-2 bg-white/90 rounded-md p-2 shadow-sm w-60 text-sm'
                    onChange={getData}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="age" className='text-sm font-bold text-[#ed3434]'>
                        Editar Edad
                    </label>
                    <input placeholder="18" name="age" type="number"
                    min="18" max="99" className='mt-2 bg-white/90 rounded-md p-2 shadow-sm
                    w-10 text-sm' onChange={getData}/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <label htmlFor="gender" className='text-sm font-bold text-[#ed3434]'>
                        Editar Género
                    </label>
                    <select name="gender" className='mt-2 bg-white/90 rounded-md p-2
                    shadow-sm w-60 text-sm' defaultValue="default"
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
                    shadow-sm w-60 text-sm' defaultValue="default"
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
