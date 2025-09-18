"use client"
import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import { PopUpMessage, Loader } from '@/AllFiles';
import { useGeneralContext } from '@/context/GlobalContext'
import { displayPopUpMessage, cancelPopUP } from '@/helper function/pop up';


const CreateBlog = () => {
    const router = useRouter()
    const userData = useGeneralContext()
    const { blogC, blogTagLineC, blogTitleC, editBlogC, userName } = userData
    const [selectFile, setselectFile] = useState('Browse File')
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('campaign successfully deleted')
    const [popUpType, setpopUpType] = useState('')
    const [loading, setloading] = useState(false)

    const [blogTitle, setblogTitle] = useState('')
    const [blog, setblog] = useState('')
    const [blogTagLine, setblogTagLine] = useState()
    let isAuthenticated = false

    useEffect(() => {
        if (editBlogC) {
            setblogTitle(blogTitleC)
            setblog(blogC)
            setblogTagLine(blogTagLineC)
        }
    }, [])
    useEffect(() => {
        if (userName === '') router.push('/Admin')
        else isAuthenticated = true

    }, [router, userName])
    const handleButton = (e) => {
        setloading(true)
        e.preventDefault()
        if (blogTitle === '') {
            displayPopUpMessage('fill in all required fields', setpopUpMsg, setpopUpType, setdisplayPopUp, false)
            cancelPopUP(setdisplayPopUp, 1000)
            setloading(false)
        } else {
            setloading(false)
            displayPopUpMessage('blog successfully created', setpopUpMsg, setpopUpType, setdisplayPopUp, true)
            cancelPopUP(setdisplayPopUp, 1000)
        }

    }
    return (
        <div>
            {isAuthenticated ?
                <div className='pb-[5rem]'>
                    <h1 className='font-bold text-[1.7rem] text-center pt-[1rem] mb-[3.3rem]'>{editBlogC ? 'Edit Blog' : 'Create Blog'}</h1>
                    <div>
                        <div className="mx-[auto] w-[70%] max-[807px]:w-[85%] max-[657px]:w-[90%]">
                            <div className='w-[100%] mb-[2.3rem] mt-[2rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                                <h3 className='font-medium mb-[0.4rem]'>Blog Title</h3>
                                <input type='text' value={blogTitle} onInput={(e) => setblogTitle(e.target.value)} className='bg-[none] outline-none pl-[0.7rem]  py-[0.7rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                            </div>

                            <div className='w-[100%] mb-[2.3rem] mt-[2rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                                <h3 className='font-medium mb-[0.4rem]'>Blog image</h3>
                                <div className='pb-[2rem] m-[auto] border-3 border-dashed border-[lightgray] rounded-[1rem] text-center py-[1.3rem] mb-[2.3rem] max-[563px]:px-[0.6rem]'>
                                    <p className='mb-[1.3rem] font-bold'>Choose an image to upload</p>
                                    <p className='mb-[1.3rem] text-[#908e8e]'>JPG, JPEG, PNG, GIF, BMP, WEBP, SVG, TIFF, ICO, HEIC, AVIF</p>
                                    <div id="fileupload " >
                                        <label className="border border-[#DCDADA] px-8 py-2 rounded-[0.4rem] cursor-pointer bg-[#fcf8f8]">
                                            <span >{selectFile}</span>
                                            <input className='opacity-0 w-4 cursor-pointer' id="file" type="file" accept='image/*' onChange={(e) => setselectFile(`${e.target.files.length} files selected`)} multiple name="images[]" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[100%] mb-[2.3rem] mt-[2rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                                <h3 className='font-medium mb-[0.4rem]'>Blog</h3>
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
                                            <div class="round animate-spin h-[1.5rem] w-[1.5rem] m-[auto] border-[3px] rounded-[50%]  border-x-[white] border-t-[white] border-b-[orange] "></div>
                                            :
                                            <h3 >{editBlogC ? 'Edit Blog' : 'Create Blog'} </h3>

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