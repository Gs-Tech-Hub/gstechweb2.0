"use client"
import React from 'react'
import ModalComponent from './Modal'

const BlogPage = ({ blogData, admin, editBlog, deleteBlog }) => {
    return (
        <div>
            <div className='w-[95%] m-[auto] pt-[0.7rem] pb-[3rem]'>
                {
                    blogData.image !== '' || null || undefined &&
                    <div className="mt-[1.6rem] mb-[1rem] w-[100%] m-[auto] pb-[1rem] ">
                        <img src="/images/marek-piwnicki-zIiKZtB_v-Y-unsplash.jpg" alt="blog image" className='h-[43rem] w-[100%] max-[740px]:h-[30rem] max-[543px]:h-[26rem] max-[466px]:h-[23rem] max-[426px]:h-[21rem] max-[377px]:h-[19rem]  max-[327px]:h-[16.5rem]' />
                    </div>
                }
                <div className='mb-[1.3rem]'>
                    <h2 className='font-bold text-[1.4rem] max-[427px]:mb-[1rem]'>{blogData.title}</h2>
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