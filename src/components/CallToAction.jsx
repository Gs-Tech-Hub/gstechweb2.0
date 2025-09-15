import React from 'react'
import Link from "next/link"



const CallToAction = () => {
    return (
        <div className='text-center py-[3rem] max-[480px]:px-[0.5rem]'>
            <h1 className='font-bold text-[3.3rem] mb-[2rem] max-[770px]:text-[2.4rem] max-[490px]:text-[2rem] max-[400px]:text-[1.7rem] max-[344px]:text-[1.6rem]'>Is there a specific project <br /> you have in mind?</h1>
            <div className='flex items-center justify-center mb-[1rem] max-[344px]:block'>
                <button className='cursor-pointer primaryColor rounded-[2rem] text-[white] outline-none px-[1.6rem] py-[0.58rem] mt-[1rem] font-bold text-[1.5rem] max-[770px]:text-[1.3rem] max-[490px]:px-[1rem] max-[400px]:text-[1.12rem] max-[344px]:w-[90%] max-[344px]:mb-[0.5rem]'>Send Message</button>
                <button className='cursor-pointer rounded-[2rem] ml-[2rem] border-[1px] border-[orange] text-[orange] outline-none px-[1.6rem] py-[0.58rem] mt-[1rem] font-bold text-[1.5rem] max-[770px]:text-[1.3rem] max-[560px]:ml-[1rem] max-[490px]:px-[1rem] max-[400px]:text-[1.12rem] max-[344px]:w-[90%]'><Link href='/Portfolio'>View Portfolio</Link></button>
            </div>
        </div>
    )
}

export default CallToAction