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
import { blogApi } from '../../../../lib/utils/api'


const page = ({ params }) => {
    const router = useRouter()
    const { id } = use(params);
    const userData = useGeneralContext()
    const { setblogTitleC, setblogC, setblogTagLineC, setblogIdC, seteditBlogC, userName } = userData
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('error')
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const [blogData, setblogData] = useState({})
    const [blogLoader, setblogLoader] = useState(true)
    const [error, seterror] = useState({
        status: false,
        message: ""
    })

    const deleteBlog = async () => {
        try {
            const data = await blogApi.delete(blogData.id)
            if (data.status) {
                handleResponse('blog successfully deleted', true, setpopUpMsg, setpopUpType, setdisplayPopUp)
                setTimeout(() => {
                    router.push('/Admin/AllBlogs')
                }, 2000);
            }
            else {
                handleResponse(data?.message || 'unable to delete blog, an error ocured', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
            }
        } catch (error) {
            handleResponse(error?.message || 'unable to delete blog, an error occured', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
        } finally {
            setblogLoader(false)
        }
    }

    const editBlog = () => {
        setblogC(blogData.content)
        setblogTagLineC(blogData.tags[0])
        setblogTitleC(blogData.title)
        setblogIdC(blogData.id)
        seteditBlogC(true)
        router.push('/Admin/CreateBlog')
    }

    useEffect(() => {
        if (userName === '') router.push('/Admin')
        else {
            setisAuthenticated(true)
            fetchBlog()
        }
        setisAuthenticated(true)
        fetchBlog()
    }, [router, userName])

    const fetchBlog = async () => {
        setblogLoader(true)
        try {
            const data = await blogApi.getById(id)
            if (data.status) {
                setblogData(data.message)
            }
            else {
                seterror({ status: true, message: data.message })
            }
        } catch (error) {
            seterror({ status: true, message: error.message || 'unable to get blogs, an error occured' })
        } finally {
            setblogLoader(false)
        }
    }
    if (error.status) return <h2 className='font-bold text-[1.8rem] mt-[5rem] text-center mb-[11rem]'>{error.message}</h2>
    if (blogLoader) return <Loader />
    return (
        <div>
            {isAuthenticated ?
                <div className='w-[95%] m-[auto] pt-[0.7rem] pb-[3rem]'>
                    {
                        blogData.image !== '' || null || undefined &&
                        <div className="mt-[1.6rem] mb-[1rem] w-[100%] m-[auto] pb-[1rem] ">
                            <img src="/images/marek-piwnicki-zIiKZtB_v-Y-unsplash.jpg" alt="blog image" className='h-[43rem] w-[100%] max-[740px]:h-[30rem] max-[543px]:h-[26rem] max-[466px]:h-[23rem] max-[426px]:h-[21rem] max-[377px]:h-[19rem]  max-[327px]:h-[16.5rem]' />
                        </div>
                    }
                    <div className='flex items-start justify-between mb-[1.3rem] max-[427px]:block'>
                        <h2 className='font-bold text-[1.4rem] max-[427px]:mb-[1rem]'>{blogData.title}</h2>
                        <div className='flex items-center'>
                            <ModalComponent admin={true} deleteBlog={deleteBlog} />
                            <BiSolidEditAlt onClick={editBlog} className='ml-[1.5rem] cursor-pointer' size={28} />
                        </div>
                    </div>
                    <div className='mb-[1.77rem]'>
                        <p className='text-[1.2rem] leading-[2.2rem]'>{blogData.content}</p>
                    </div>
                    <div className='mb-[1.77rem]'>
                        <i className='text-[1.2rem] font-mono'>{blogData.tags}</i>
                    </div>
                    <div className='mb-[1.77rem]'>
                        <p className='text-[0.9rem] text-[#515050]'>{blogData.createdAt}</p>
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