"use client"
import { BlogCard } from "../../../AllFiles";
import Loader from '@/components/Loader';
import { useGeneralContext } from '@/context/GlobalContext'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { blogApi } from '@/lib/utils/api'

const AllBlogs = () => {
    const router = useRouter()
    const userData = useGeneralContext()
    const { seteditBlogC, userName } = userData
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    let isAuthenticated = false

    useEffect(() => {
        if (userName === '') {
            router.push('/Admin')
        } else {
            isAuthenticated = true
            fetchBlogs()
        }
    }, [router, userName])

    const fetchBlogs = async () => {
        try {
            const data = await blogApi.getAll()
            setBlogs(data)
        } catch (error) {
            console.error('Failed to fetch blogs:', error)
        } finally {
            setLoading(false)
        }
    }

    const createBlog = () => {
        seteditBlogC(false)
        router.push('/Admin/CreateBlog')
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h1 className='font-bold text-[1.8rem] mt-[1rem] text-center mb-[1rem]'>View All Blogs</h1>
                    <div onClick={createBlog} className="w-[75%] mx-[auto] text-end text-[1.2rem] cursor-pointer">
                        <h3>Create Blog</h3>
                    </div>
                    <BlogCard allcampaigns={blogs} admin={true} onDelete={fetchBlogs} />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    )
}

export default AllBlogs