"use client"
import { useState, useEffect } from 'react'
import { use } from 'react';
import { useRouter } from "next/navigation"
import { BiSolidEditAlt } from 'react-icons/bi';
import ModalComponent from '../../../../components/Modal';
import PopUpMessage from '../../../../components/PopUpMessage';
import Loader from '../../../../components/Loader';
import { handleResponse } from '../../../../helperFunction/popUp';
import { useGeneralContext } from '../../../../context/GlobalContext'
import { ContactApi } from '../../../../lib/utils/api'



const page = ({ params }) => {
    const router = useRouter()
    const { id } = use(params);
    const userData = useGeneralContext()
    const { userName } = userData
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('error')
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const [contactInfo, setcontactInfo] = useState({})
    const [ContactLoader, setContactLoader] = useState(true)
    const [deleteContactLoader, setdeleteContactLoader] = useState(false)
    const [error, seterror] = useState({
        status: false,
        message: ""
    })

    const deleteContact = async () => {
        setdeleteContactLoader(true)
        try {
            const data = await ContactApi.delete(contactInfo.id)
            if (data.status) {
                handleResponse('contact successfully deleted', true, setpopUpMsg, setpopUpType, setdisplayPopUp)
                setTimeout(() => {
                    router.push('/Admin/Contact')
                }, 2000);
            }
            else {
                handleResponse(data?.message || 'unable to delete contact, an error ocured', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
            }
        } catch (error) {
            handleResponse(error?.message || 'unable to delete contact, an error occured', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
        } finally {
            setdeleteContactLoader(true)
        }
    }

    useEffect(() => {
        // if (userName === '') router.push('/Admin')
        // else {
        setisAuthenticated(true)
        fetchContact()
        // }
    }, [router, userName])

    const fetchContact = async () => {
        try {
            const data = await ContactApi.getById(id)
            console.log(data)
            if (data.status) {
                setcontactInfo(data.message)
            }
            else {
                seterror({ status: true, message: data.message })
            }
        } catch (error) {
            seterror({ status: true, message: error.message || 'unable to get contact, an error occured' })
        } finally {
            setContactLoader(false)
        }
    }
    if (error.status) return <h2 className='font-bold text-[1.8rem] mt-[5rem] text-center mb-[11rem]'>{error.message}</h2>
    if (ContactLoader) return <Loader />
    return (
        <div>
            {deleteContactLoader && <div className='loaderWrapper'><div className='loader'><Loader /></div></div>}
            {isAuthenticated ?
                <div className='w-[95%] m-[auto] pt-[2rem]'>
                    <div className='mb-[1rem]'>
                        <h3 className='mb-[0.5rem] font-bold ' >Name</h3>
                        <p>{contactInfo?.name}</p>
                    </div>
                    <div className='mb-[1rem]'>
                        <h3 className='mb-[0.5rem] font-bold ' >Email</h3>
                        <p>{contactInfo?.email}</p>
                    </div>
                    {
                        contactInfo?.phone !== '' &&
                        <div className='mb-[1rem]'>
                            <h3 className='mb-[0.5rem] font-bold ' >Phone Number</h3>
                            <p>{contactInfo.phone === null ? 'unavailable' : contactInfo.phone}</p>
                        </div>
                    }
                    <div className='mb-[1rem]'>
                        <h3 className='mb-[0.5rem] font-bold ' >Message</h3>
                        <p>{contactInfo?.message}</p>
                    </div>
                    <div className='mb-[1rem]'>
                        <h3 className='mb-[0.5rem] font-bold ' >Status</h3>
                        <p>{contactInfo?.status}</p>
                    </div>
                    <div className='mb-[1.77rem]'>
                        <p className='text-[0.9rem] text-[#515050]'>{contactInfo.createdAt}</p>
                    </div>
                    <div className='flex items-center'>
                        <ModalComponent btn={true} handleDelete={deleteContact} />
                        {/* <BiSolidEditAlt onClick={editBlog} className='ml-[2rem] cursor-pointer' size={28} /> */}
                    </div>
                    <PopUpMessage popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />

                </div>
                :
                <Loader />
            }
        </div>

    )
}

export default page
