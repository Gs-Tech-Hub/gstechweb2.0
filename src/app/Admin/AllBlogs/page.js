"use client"
import { BlogCard } from "../../../AllFiles"
import { allcampaigns } from '../../../data/blogdB'
import { useGeneralContext } from '@/context/GlobalContext'
import { useRouter } from "next/navigation"


const AllBlogs = () => {
    const router = useRouter()
    const userData = useGeneralContext()
    const { seteditBlogC } = userData

    const createBlog = () => {
        seteditBlogC(false)
        router.push('/Admin/CreateBlog')
    }
    return (
        <div>
            <h1 className='font-bold text-[1.8rem] mt-[1rem] text-center mb-[1rem]'>View All Blogs </h1>
            <div onClick={createBlog} className="w-[75%] mx-[auto] text-end text-[1.2rem] cursor-pointer"><h3>Create Blog</h3></div>
            <BlogCard allcampaigns={allcampaigns} admin={true} />
        </div>
    )
}

export default AllBlogs