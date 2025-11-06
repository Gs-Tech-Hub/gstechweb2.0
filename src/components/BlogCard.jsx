"use client"
import LinesEllipsis from 'react-lines-ellipsis'
import Link from "next/link"
import Image from 'next/image'


const BlogCard = ({ allBlogs, admin }) => {
    return (
        <div className='w-[100%] mx-[auto]'>
            <div className='grid grid-cols-3 w-[90%] justify-items-center items-start gap-0 mx-auto max-[1262px]:w-[100%] max-[920px]:grid-cols-2 max-[390px]:block'>
                {
                    allBlogs.map(item => {
                        return <div key={item.id} className='w-[22rem] my-[2rem] border-[1px] rounded-[0.5rem] border-[lightgray] p-[0.8rem] max-[1417px]:mx-[2rem] max-[1073px]:mx-[1.5%] max-[1073px]:my-[1rem] max-[1188px]:w-[90%] max-[1073px]:p-[0.5rem] max-[390px]:w-[85%] max-[390px]:mx-[auto] max-[390px]:mb-[2rem] max-[390px]:p-[0.68rem]'>
                            {/* <div className='w-[100%] m-[auto] h-[15rem] max-[684px]:h-[13rem] max-[589px]:h-[11rem] max-[436px]:h-[9rem] max-[390px]:h-[12.5rem]'><img className='rounded-[0.5rem] h-[100%] w-[100%] border-gray-300 border-[1px]' src={item.image === null ? '/images/GsTechLogo.png' : item.image} alt="blog image" /></div> */}
                            <div className='w-[100%] m-[auto] h-[15rem] max-[684px]:h-[13rem] max-[589px]:h-[11rem] max-[436px]:h-[9rem] max-[390px]:h-[12.5rem]'><Image width={200} height={200} className='rounded-[0.5rem] h-[100%] w-[100%] border-gray-300 border-[1px]' src={item.image === null ? '/images/GsTechLogo.png' : item.image} alt="blog image" /></div>
                            <div className='mt-[0.7rem]  w-[100%] max-[509px]:px-[0rem]  max-[489px]:mt-[0.45rem]'>
                                <h3 className='font-bold mb-[0.3rem] text-[1.1rem] w-[100%] leading-[1rem]'>
                                    <LinesEllipsis
                                        text={item.title}
                                        maxLine='1'
                                        ellipsis='...'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </h3>
                                <h3 className='w-[100%] overflow-x-hidden '>
                                    <LinesEllipsis
                                        text={item.content}
                                        maxLine='1'
                                        ellipsis='...'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </h3>
                                <p className='text-[0.9rem] mt-[0.3rem] text-[#666464] max-[415px]:text-[0.83rem] max-[390px]:text-[0.9rem]'>{item.createdAt}</p>
                                <div className=' text-end max-[624px]:mt-[0.35rem] max-[624px]:mb-[0.13rem]'>
                                    <button className='primaryColor text-[white] outline-none rounded-[2rem] font-bold px-[1rem] py-[0.2rem] cursor-pointer text-[1.1rem] '><Link href={admin ? `/Admin/AllBlogs/${item.id}` : `/AllBlogs/${item.id}`}>View</Link></button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default BlogCard
