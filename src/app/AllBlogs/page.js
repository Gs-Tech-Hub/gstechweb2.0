import BlogCard from "../../components/BlogCard";
import { blogApi } from '../../lib/utils/api'

async function getAllBlogs() {
  try {
    return await blogApi.getAll();
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return [];
  }
}

export default async function AllBlogs() {
  const blogs = await getAllBlogs();

  return (
    <div>
      <h1 className='font-bold text-[1.8rem] mt-[1rem] text-center mb-[3rem]'>View All Blogs </h1>
      <BlogCard allBlogs={blogs.message} />
    </div>
  )
}