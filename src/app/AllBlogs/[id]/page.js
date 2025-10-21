"use client"
import { useState, useEffect } from 'react'
import { use } from 'react';
import { useRouter } from "next/navigation"
import BlogPage from '../../../components/BlogPage';
import Loader from '../../../components/Loader';
import { useGeneralContext } from '../../../context/GlobalContext'
import { blogApi } from '../../../lib/utils/api'


const page = ({ params }) => {
    const router = useRouter()
    const { id } = use(params);
    const userData = useGeneralContext()
    const { userName } = userData
    const [blogData, setblogData] = useState({})
    const [blogLoader, setblogLoader] = useState(true)
    const [error, seterror] = useState({
        status: false,
        message: ""
    })

    useEffect(() => {
        fetchBlog()
    }, [router, userName])

    const fetchBlog = async () => {
        setblogLoader(true)
        try {
            const data = await blogApi.getById(id)
            if (data.status) {
                setblogData(data.message)
            }
            else {
                seterror({ status: true, message: data.message })
            }
        } catch (error) {
            seterror({ status: true, message: error.message || 'unable to get blogs, an error occured' })
        } finally {
            setblogLoader(false)
        }
    }
    if (error.status) return <h2 className='font-bold text-[1.8rem] mt-[5rem] text-center mb-[11rem]'>{error.message}</h2>
    if (blogLoader) return <Loader />
    return (
        <>
            <BlogPage blogData={blogData} admin={false} />
        </>

    )
}

export default page