"use client"
import ProjectOnboardingCard from "../../../components/ProjectOnboardingCard";
import Loader from '../../../components/Loader';
import { useGeneralContext } from '../../../context/GlobalContext'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { projectOnboardingApi } from '../../../lib/utils/api'

const ProjectOnboarding = () => {
    const router = useRouter()
    const userData = useGeneralContext()
    const { userName } = userData
    const [projects, setprojects] = useState([])
    const [projectOnboardingLoader, setprojectOnboardingLoader] = useState(true)
    const [error, seterror] = useState({
        status: false,
        message: ""
    })
    const [isAuthenticated, setisAuthenticated] = useState(false)
    useEffect(() => {
        if (userName === '') {
            router.push('/Admin')
        } else {
            setisAuthenticated(true)
            fetchProjects()
        }
    }, [router, userName])

    const fetchProjects = async () => {
        try {
            const data = await projectOnboardingApi.getAll()
            if (data.status) {
                setprojects(data.message)
            }
            else {
                seterror({ status: true, message: data.message })
            }
        } catch (error) {
            seterror({ status: true, message: error.message || 'unable to get projects, an error occured' })
        } finally {
            setprojectOnboardingLoader(false)
        }
    }

    if (projectOnboardingLoader) return <Loader />
    if (error.status) return <h2 className='font-bold text-[1.8rem] mt-[5rem] text-center mb-[11rem]'>{error.message}</h2>


    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h1 className='font-bold text-[1.8rem] mt-[1rem] text-center mb-[1rem]'> All Projects</h1>
                    <ProjectOnboardingCard allProjects={projects} />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    )
}

export default ProjectOnboarding