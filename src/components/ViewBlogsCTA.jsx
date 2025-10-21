import Link from "next/link"


const ViewBlogsCTA = () => {
    return (
        <div className='secondaryBgColor py-[0.5rem] pb-[4rem] px-[1rem] max-[564px]:pb-[0.5rem]'>
            <div className=' text-center py-[1.2rem] max-[480px]:px-[0.5rem]'>
                <h1 className='font-bold text-[3.3rem] mb-[2rem] max-[770px]:text-[2.4rem] max-[490px]:text-[2rem] max-[400px]:text-[1.7rem] max-[344px]:text-[1.6rem]'>View our blogs to stay <br /> updated with the latest</h1>
                <div className='flex items-center justify-center mb-[0.8rem] max-[344px]:block'>
                    <button className='cursor-pointer primaryColor rounded-[2rem] text-[white] outline-none px-[1.6rem] py-[0.58rem] mt-[1rem] font-bold text-[1.5rem] max-[770px]:text-[1.3rem] max-[490px]:px-[1rem] max-[400px]:text-[1.12rem] max-[344px]:w-[90%] max-[344px]:mb-[0.5rem]'><Link href='/AllBlogs'>View Blogs</Link></button>
                </div>
            </div>
        </div>
    )
}

export default ViewBlogsCTA