"use client"
import ModalComponent from './Modal'
import Avatar from '@mui/material/Avatar';
import Image from 'next/image'



const BlogPage = ({ blogData, admin, editBlog, deleteBlog }) => {
    return (
        <div>
            <div className='w-[95%] m-[auto] pt-[0.7rem] pb-[3rem]'>
                {
                    blogData.image !== '' || null || undefined &&
                    <div className="mt-[1.6rem] mb-[1rem] w-[100%] m-[auto] pb-[1rem] ">
                        <Image width={800} height={800} src="/images/pexels-serpstat-177219-572056 (2).jpg" alt="blog image" className='h-[43rem] w-[100%] max-[740px]:h-[30rem] max-[543px]:h-[26rem] max-[466px]:h-[23rem] max-[426px]:h-[21rem] max-[377px]:h-[19rem]  max-[327px]:h-[16.5rem]' />
                    </div>
                }
                <div className='mb-[1.3rem]'>
                    <h2 className='font-bold text-[1.4rem] max-[427px]:mb-[1rem]'>{blogData.title}</h2>
                </div>
                {
                    admin &&
                    <div className='mb-[1rem]'>
                        <h3 className='mb-[0.5rem] font-bold ' >Status</h3>
                        <p>{blogData?.published ? 'Published' : 'Not Published'}</p>
                    </div>
                }
                <div className='mb-[1.77rem]'>
                    <p className='text-[1.2rem] leading-[2.2rem]'>{blogData.content}</p>
                </div>
                <div className='mb-[1.77rem]'>
                    <i className='text-[1.2rem] font-mono'>{blogData.tags}</i>
                </div>
                <div className='mb-[1.77rem]'>
                    <p className='text-[0.9rem] text-[#515050]'>{blogData.createdAt}</p>
                </div>
                <div className='flex items-center mb-[1.77rem]'>
                    <Avatar sx={{ width: 31, height: 31 }} src="/broken-image.jpg" />
                    <h3 className='ml-[0.5rem] text-[1.21rem]'>{blogData.author}</h3>
                </div>
                {
                    admin &&
                    <div className='flex items-center'>
                        <ModalComponent btn={true} handleDelete={deleteBlog} />
                        <button onClick={editBlog} className={` ml-[1.2rem] px-3 py-1.5 cursor-pointer bg-[black] hover:bg-[#232121] font-bold text-white rounded-md focus:outline-none focus:ring-offset-2 `}>Edit</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default BlogPage