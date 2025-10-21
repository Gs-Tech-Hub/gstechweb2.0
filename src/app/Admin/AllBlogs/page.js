"use client"
import BlogCard from "../../../components/BlogCard";
import Loader from '../../../components/Loader';
import { useGeneralContext } from '../../../context/GlobalContext'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { blogApi } from '../../../lib/utils/api'

const AllBlogs = () => {
    const router = useRouter()
    const userData = useGeneralContext()
    const { seteditBlog, editBlog, userName } = userData
    const [blogs, setBlogs] = useState([])
    const [blogLoader, setblogLoader] = useState(true)
    const [error, seterror] = useState({
        status: false,
        message: ""
    })
    const [isAuthenticated, setisAuthenticated] = useState(false)
    useEffect(() => {
        // if (userName === '') {
        //     router.push('/Admin')
        // } else {
        //     setisAuthenticated(true)
        //     fetchBlogs()
        // }
        setisAuthenticated(true)
        fetchBlogs()
    }, [router, userName])

    const fetchBlogs = async () => {
        try {
            const data = await blogApi.getAll()
            if (data.status) {
                setBlogs(data.message)
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

    const createBlog = () => {
        if (editBlog) seteditBlog(false)
        router.push('/Admin/CreateBlog')
    }

    if (blogLoader) {
        return <Loader />
    }
    if (error.status) return <h2 className='font-bold text-[1.8rem] mt-[5rem] text-center mb-[11rem]'>{error.message}</h2>


    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h1 className='font-bold text-[1.8rem] mt-[1rem] text-center mb-[1rem]'>All Blogs</h1>
                    <div className="w-[75%] mx-[auto] text-end text-[1.2rem] ">
                        <h3 onClick={createBlog} className="cursor-pointer hover:text-[orange]">Create Blog</h3>
                    </div>
                    <BlogCard allBlogs={blogs} admin={true} />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    )
}

export default AllBlogs