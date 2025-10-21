"use client"
import { useState, useEffect } from 'react'
import { useGeneralContext } from '../../../context/GlobalContext'
import Loader from '../../../components/Loader';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from "next/navigation"



const page = () => {
    const router = useRouter()
    const userData = useGeneralContext()
    const { userName } = userData
    const [isAuthenticated, setisAuthenticated] = useState(false)

    // to redirect to the login page if the user is not logged in
    useEffect(() => {
        if (userName === '') router.push('/Admin')
        else {
            setisAuthenticated(true)
        }
    }, [userName])
    return (
        <div className='mt-[2rem] pb-[3rem]'>
            {
                isAuthenticated ?
                    <div>
                        <div className='flex items-center justify-evenly max-[830px]:block'>
                            <div className='w-[29%] border-[1px] py-[1rem] px-[1rem] rounded-[0.4rem] border-[#dcd7d7] max-[830px]:w-[80%] max-[830px]:mx-[auto] max-[830px]:my-[2rem]'>
                                <h2 className=' text-[2rem] font-bold mb-[3.5rem]'>All Blogs</h2>
                                <div>
                                    <div className='mt-[1.8rem]  flex items-center justify-end cursor-pointer  w-[fit-content] ml-[auto] hover:text-[orange]'>
                                        <Link href='/Admin/AllBlogs'><p className='font-semibold text-[1.1rem]'>View Blogs</p></Link>
                                        <FiArrowUpRight />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[29%] border-[1px] py-[1rem] px-[1rem] rounded-[0.4rem] border-[#dcd7d7] max-[830px]:w-[80%] max-[830px]:mx-[auto] max-[830px]:my-[2rem]'>
                                <h2 className=' text-[2rem] font-bold mb-[3.5rem]'>All Projects</h2>
                                <div>
                                    <div className='mt-[1.8rem]  flex items-center justify-end cursor-pointer  w-[fit-content] ml-[auto] hover:text-[orange]'>
                                        <Link href='/Admin/ProjectOnboarding'><p className='font-semibold text-[1.1rem]'>View Projects</p></Link>
                                        <FiArrowUpRight />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[29%] border-[1px] py-[1rem] px-[1rem] rounded-[0.4rem] border-[#dcd7d7] max-[830px]:w-[80%] max-[830px]:mx-[auto] max-[830px]:my-[2rem]'>
                                <h2 className=' text-[2rem] font-bold mb-[3.5rem]'>All Contacts</h2>
                                <div>
                                    <div className='mt-[1.8rem]  flex items-center justify-end cursor-pointer  w-[fit-content] ml-[auto] hover:text-[orange]'>
                                        <Link href='/Admin/Contact'><p className='font-semibold text-[1.1rem]'>View Contacts</p></Link>
                                        <FiArrowUpRight />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    :
                    <Loader />
            }
        </div>
    )
}

export default page