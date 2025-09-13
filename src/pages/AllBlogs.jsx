import { BlogCard } from "../AllFiles"
import { allcampaigns } from '../data/blogdB'

const AllBlogs = () => {
    return (
        <div>
            <h1 className='font-bold text-[1.8rem] mt-[1rem] text-center mb-[3rem]'>View All Blogs </h1>

            <BlogCard allcampaigns={allcampaigns} />
        </div>
    )
}

export default AllBlogs