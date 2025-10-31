"use client"
import { useState, useEffect } from 'react'
import slugify from 'slugify';
import { useRouter } from "next/navigation"
import PopUpMessage from '../../../components/PopUpMessage';
import Loader from '../../../components/Loader';
import { useGeneralContext } from '../../../context/GlobalContext'
import { handleResponse } from '../../../helperFunction/popUp';
import { blogApi } from '../../../lib/utils/api'


const CreateBlog = () => {
    const router = useRouter()
    const userData = useGeneralContext()
    const { blogDataHandler, editBlog, userName } = userData
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('')
    const [loading, setloading] = useState(false)
    const [imageUrl, setImageUrl] = useState('m')
    const [selectFile, setselectFile] = useState('Select file')

    const [blogTitle, setblogTitle] = useState('')
    const [blog, setblog] = useState('')
    const [blogTagLine, setblogTagLine] = useState('')
    const [blogStatus, setblogStatus] = useState(blogDataHandler.blogStatus)
    const [isAuthenticated, setisAuthenticated] = useState(false)

    const handleFile = (file) => {
        setImageUrl(file.name)
        setselectFile(`${file.length} file selected`)
        console.log(file)
        console.log(file.length)
    }

    const clearInputFields = () => {
        setblogTitle('')
        setblog('')
        setImageUrl('')
        setblogTagLine('')
        setselectFile('')
    }
    // to put the information of the blog to be edited into the input fields
    useEffect(() => {
        if (editBlog) {
            setblogTitle(blogDataHandler.blogTitle)
            setblog(blogDataHandler.blog)
            setblogTagLine(blogDataHandler.blogTagLine)
            setblogStatus((blogDataHandler.blogStatus) ? 'true' : 'false')
        }
    }, [editBlog, blogDataHandler])
    // to redirect to the login page if the user is not logged in
    useEffect(() => {
        // if (userName === '') router.push('/Admin')
        // else {
        //     setisAuthenticated(true)
        // }
        setisAuthenticated(true)
    }, [router, userName])
    const redirectToAllBlogs = () => {
        setTimeout(() => {
            router.push('/Admin/AllBlogs')
        }, 2000);
    }
    const handleButton = async (e) => {
        e.preventDefault()
        setloading(true)
        try {
            if (blogTitle === '' || blog === '' || imageUrl === '') {
                handleResponse('Please fill in all required fields', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
                return
            }
            let blogSlug = slugify(blogTitle, { lower: true })
            const blogData = {
                title: blogTitle,
                content: blog,
                image: imageUrl,
                author: userName,
                tagLine: blogTagLine,
                slug: blogSlug,
                // the select option tag stringifies the boolean value
                published: blogStatus === 'true' ? true : false
            }
            if (editBlog) {
                let resp = await blogApi.update(blogDataHandler.blogId, blogData)
                if (!resp?.status) {
                    if (resp.message === 'Author is required') handleResponse('Login to create or edit blog', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
                    else handleResponse(resp?.message || 'an error occured', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
                } else {
                    handleResponse('Blog successfully updated', true, setpopUpMsg, setpopUpType, setdisplayPopUp)
                    clearInputFields()
                    redirectToAllBlogs()
                }
            } else {
                let resp = await blogApi.create(blogData)
                if (!resp?.status) {
                    handleResponse(resp?.message || 'an error occured', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
                } else {
                    handleResponse('Blog successfully created', true, setpopUpMsg, setpopUpType, setdisplayPopUp)
                    clearInputFields()
                    redirectToAllBlogs()
                }
            }
        } catch (error) {
            handleResponse('Failed to save blog. Please try again.', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
        } finally {
            setloading(false)
        }

    }
    return (
        <div>
            {isAuthenticated ?
                <div className='pb-[5rem]'>
                    <h1 className='font-bold text-[1.7rem] text-center pt-[1rem] mb-[3.3rem]'>{editBlog ? 'Edit Blog' : 'Create Blog'}</h1>
                    <div>
                        <div className="mx-[auto] w-[70%] max-[807px]:w-[85%] max-[657px]:w-[90%]">
                            <div className='w-[100%] mb-[2.3rem] mt-[2rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                                <h3 className='font-medium mb-[0.4rem]'>Blog Title *</h3>
                                <input type='text' value={blogTitle} onInput={(e) => setblogTitle(e.target.value)} className='bg-[none] outline-none pl-[0.7rem]  py-[0.7rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                            </div>
                            {
                                editBlog &&
                                <div className='w-[100%] mb-[2.3rem] mt-[2rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                                    <h3 className='font-medium mb-[0.4rem]'>Blog Status</h3>
                                    <select
                                        onChange={(e) => setblogStatus(e.target.value)}
                                        className='mt-2 outline-none pl-[0.755em]  py-[0.7rem] w-[100%] border-[1px] border-[#d8d5d5] rounded-md '
                                    >
                                        <option value={blogDataHandler.blogStatus}>Change blog status, current status: {blogDataHandler.blogStatus ? 'Published' : 'Not Published'}</option>
                                        <option value={false}>Not Published</option>
                                        <option value={true}> Published</option>
                                    </select>
                                </div>
                            }
                            <div className='w-[100%] mb-[2.3rem] mt-[2rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                                <h3 className='font-medium mb-[0.4rem]'>Blog image *</h3>
                                <div className='pb-[2rem] m-[auto] border-3 border-dashed border-[lightgray] rounded-[1rem] text-center py-[1.3rem] mb-[2.3rem] max-[563px]:px-[0.6rem]'>
                                    <p className='mb-[1.3rem] font-bold'>Choose an image to upload</p>
                                    <p className='mb-[1.3rem] text-[#908e8e]'>JPG, JPEG, PNG, GIF, BMP, WEBP, SVG, TIFF, ICO, HEIC, AVIF</p>
                                    <div id="fileupload " >
                                        <label className="border border-[#DCDADA] px-8 py-2 rounded-[0.4rem] cursor-pointer bg-[#fcf8f8]">
                                            <span >{selectFile}</span>
                                            <input className='opacity-0 w-4 cursor-pointer' id="file" type="file" accept='image/*' onInput={(e) => { handleFile(e.target.files) }} multiple name="images[]" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[100%] mb-[2.3rem] mt-[2rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                                <h3 className='font-medium mb-[0.4rem]'>Blog *</h3>
                                <textarea type='text' value={blog} onInput={(e) => setblog(e.target.value)} className='bg-[none] outline-none pl-[0.7rem]  py-[0.7rem] w-[100%] h-[23rem] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                            </div>
                            <div className='w-[100%] mb-[2.3rem] mt-[2rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                                <h3 className='font-medium mb-[0.4rem]'>Blog tagline</h3>
                                <textarea value={blogTagLine} onInput={(e) => setblogTagLine(e.target.value)} placeholder='# tech #marketing #digital agency etc' className='bg-[none] outline-none pl-[0.7rem]  py-[0.7rem] w-[100%] h-[8rem] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                            </div>
                            <div className='text-end'>
                                <button onClick={(e) => handleButton(e)} className='cursor-pointer primaryColor text-[white] outline-none rounded-[0.3rem] px-[0.6rem] w-[11rem] py-[0.5rem] text-[1.1rem] font-bold max-[427px]:mt-[2rem] max-[360px]:w-[100%]'>
                                    {
                                        loading ?
                                            <div className="round animate-spin h-[1.5rem] w-[1.5rem] m-[auto] border-[3px] rounded-[50%]  border-x-[white] border-t-[white] border-b-[orange] "></div>
                                            :
                                            <h3 >{editBlog ? 'Edit Blog' : 'Create Blog'} </h3>

                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <PopUpMessage popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />
                </div>
                :
                <Loader />
            }
        </div>
    )
}

export default CreateBlog