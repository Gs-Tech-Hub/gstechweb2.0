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
import { projectOnboardingApi } from '../../../../lib/utils/api'



const page = ({ params }) => {
    const router = useRouter()
    const { id } = use(params);
    const userData = useGeneralContext()
    const { userName } = userData
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('campaign successfully deleted')
    const [popUpType, setpopUpType] = useState('error')
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const [projectInfo, setprojectInfo] = useState({})
    const [projectOnboardingLoader, setprojectOnboardingLoader] = useState(true)
    const [error, seterror] = useState({
        status: false,
        message: ""
    })

    const deleteProject = async () => {
        try {
            const data = await projectOnboardingApi.delete(projectInfo.id)
            if (data.status) {
                handleResponse('project successfully deleted', true, setpopUpMsg, setpopUpType, setdisplayPopUp)
                setTimeout(() => {
                    router.push('/Admin/ProjectOnboarding')
                }, 2000);
            }
            else {
                handleResponse(data?.message || 'unable to delete project, an error ocured', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
            }
        } catch (error) {
            handleResponse(error?.message || 'unable to delete project, an error occured', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
        } finally {
            setprojectOnboardingLoader(false)
        }
    }

    useEffect(() => {
        if (userName === '') router.push('/Admin')
        else {
            setisAuthenticated(true)
            fetchProject()
        }
    }, [router, userName])

    const fetchProject = async () => {
        setprojectOnboardingLoader(true)
        try {
            const data = await projectOnboardingApi.getById(id)
            if (data.status) {
                setprojectInfo(data.message)
            }
            else {
                seterror({ status: true, message: data.message })
            }
        } catch (error) {
            seterror({ status: true, message: error.message || 'unable to get blogs, an error occured' })
        } finally {
            setprojectOnboardingLoader(false)
        }
    }
    if (error.status) return <h2 className='font-bold text-[1.8rem] mt-[5rem] text-center mb-[11rem]'>{error.message}</h2>
    if (projectOnboardingLoader) return <Loader />
    return (
        <div>
            {isAuthenticated ?
                <div className='w-[95%] m-[auto] pt-[2rem]'>
                    <div className='mb-[1rem]'>
                        <h3 className='mb-[0.5rem] font-bold ' >Company Name</h3>
                        <p>{projectInfo?.companyName}</p>
                    </div>
                    <div className='mb-[1rem]'>
                        <h3 className='mb-[0.5rem] font-bold ' >Contact Person</h3>
                        <p>{projectInfo?.contactPerson}</p>
                    </div>
                    <div className='mb-[1rem]'>
                        <h3 className='mb-[0.5rem] font-bold ' >Email</h3>
                        <p>{projectInfo?.email}</p>
                    </div>
                    {
                        projectInfo?.phone !== '' &&
                        <div className='mb-[1rem]'>
                            <h3 className='mb-[0.5rem] font-bold ' >Phone Number</h3>
                            <p>{projectInfo?.phone}</p>
                        </div>
                    }
                    <div className='mb-[1rem]'>
                        <h3 className='mb-[0.5rem] font-bold ' >Project Type</h3>
                        <p>{projectInfo?.projectType}</p>
                    </div>
                    <div className='mb-[1rem]'>
                        <h3 className='mb-[0.5rem] font-bold ' >Project Requirements</h3>
                        <p>{projectInfo?.requirements}</p>
                    </div>
                    {
                        projectInfo?.budget !== 0 &&
                        <div className='mb-[1rem]'>
                            <h3 className='mb-[0.5rem] font-bold ' >Budget </h3>
                            <p>{projectInfo?.budget}</p>
                        </div>
                    }
                    {
                        projectInfo?.timeline !== '' &&
                        <div className='mb-[1rem]'>
                            <h3 className='mb-[0.5rem] font-bold ' >Timeline </h3>
                            <p>{projectInfo?.timeline}</p>
                        </div>
                    }
                    <div className='mb-[1rem]'>
                        <h3 className='mb-[0.5rem] font-bold ' >Project status</h3>
                        <p>{projectInfo?.status}</p>
                    </div>
                    {
                        projectInfo?.notes !== '' &&
                        <div className='mb-[1rem]'>
                            <h3 className='mb-[0.5rem] font-bold ' >Notes </h3>
                            <p>{projectInfo?.notes}</p>
                        </div>
                    }
                    <div className='flex items-center'>
                        <ModalComponent btn={true} deleteProject={deleteProject} />
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
