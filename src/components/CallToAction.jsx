import React from 'react'
import { Link } from 'react-router-dom'


const CallToAction = () => {
    return (
        <div className='text-center py-[3rem]'>
            <h1 className='font-bold text-[3.3rem] mb-[2rem]'>Is there a specific project <br /> you have in mind?</h1>
            <div className='flex items-center justify-center mb-[1rem]'>
                <button className='cursor-pointer primaryColor rounded-[2rem] text-[white] outline-none px-[1.6rem] py-[0.58rem] mt-[1rem] font-bold text-[1.5rem]'>Send Message</button>
                <button className='cursor-pointer rounded-[2rem] ml-[2rem] border-[1px] border-[orange] text-[orange] outline-none px-[1.6rem] py-[0.58rem] mt-[1rem] font-bold text-[1.5rem]'><Link to='/Portfolio'>View Portfolio</Link></button>
            </div>
        </div>
    )
}

export default CallToAction