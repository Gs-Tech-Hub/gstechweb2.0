"use client"
import { useState, useEffect } from 'react'
import { use } from 'react';
import { useRouter } from "next/navigation"
import BlogPage from '../../../../components/BlogPage';
import PopUpMessage from '../../../../components/PopUpMessage';
import Loader from '../../../../components/Loader';
import { handleResponse } from '../../../../helperFunction/popUp';
import { useGeneralContext } from '../../../../context/GlobalContext'
import { blogApi } from '../../../../lib/utils/api'


const page = ({ params }) => {
    const router = useRouter()
    const { id } = use(params);
    const userData = useGeneralContext()
    const { setblogDataHandler, seteditBlog, userName } = userData
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('error')
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const [blogData, setblogData] = useState({})
    const [blogLoader, setblogLoader] = useState(true)
    const [deleteBlogLoader, setdeleteBlogLoader] = useState(false)
    const [error, seterror] = useState({
        status: false,
        message: ""
    })

    const deleteBlog = async () => {
        try {
            setdeleteBlogLoader(true)
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
            setdeleteBlogLoader(false)
        }
    }

    const editBlog = () => {
        setblogDataHandler({
            blogTitle: blogData.title,
            blog: blogData.content,
            blogId: blogData.id,
            blogTagLine: blogData.tags,
            blogStatus: blogData.published
        })
        seteditBlog(true)
        router.push('/Admin/CreateBlog')
    }

    useEffect(() => {
        // if (userName === '') router.push('/Admin')
        // else {
        //     setisAuthenticated(true)
        //     fetchBlog()
        // }
        setisAuthenticated(true)
        fetchBlog()
    }, [router, userName])

    const fetchBlog = async () => {
        setblogLoader(true)
        try {
            const data = await blogApi.getById(id)
            console.log(data)
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
            {deleteBlogLoader && <div className='loaderWrapper'><div className='loader'><Loader /></div></div>}
            {isAuthenticated ?
                <div>
                    <BlogPage blogData={blogData} admin={true} editBlog={editBlog} deleteBlog={deleteBlog} />
                    <PopUpMessage popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />
                </div>
                :
                <Loader />
            }
        </div>

    )
}

export default page