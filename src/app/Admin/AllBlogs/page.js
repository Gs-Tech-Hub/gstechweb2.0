"use client"
import { BlogCard, Loader } from "../../../AllFiles"
import { allcampaigns } from '../../../data/blogdB'
import { useGeneralContext } from '@/context/GlobalContext'
import { useRouter } from "next/navigation"
import { useEffect } from "react"


const AllBlogs = () => {
    const router = useRouter()
    const userData = useGeneralContext()
    const { seteditBlogC, userName } = userData
    let isAuthenticated = false


    useEffect(() => {
        if (userName === '') router.push('/Admin')
        else isAuthenticated = true
    }, [router, userName])

    const createBlog = () => {
        seteditBlogC(false)
        router.push('/Admin/CreateBlog')
    }
    return (
        <div>
            {isAuthenticated ?
                <div>
                    <h1 className='font-bold text-[1.8rem] mt-[1rem] text-center mb-[1rem]'>View All Blogs </h1>
                    <div onClick={createBlog} className="w-[75%] mx-[auto] text-end text-[1.2rem] cursor-pointer"><h3>Create Blog</h3></div>
                    <BlogCard allcampaigns={allcampaigns} admin={true} />
                </div>
                :
                <Loader />
                // <h1 className='font-bold text-[1.8rem] mt-[1rem] text-center mb-[1rem]'>View All Blogs </h1>

            }
        </div>
    )
}

export default AllBlogs