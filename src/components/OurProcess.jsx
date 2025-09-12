import React from 'react'
import process1Img from '../assets/undraw_online-community_3o0l.svg'
import process2Img from '../assets/undraw_business-chat_xea1.svg'
import process3Img from '../assets/undraw_data_0ml2.svg'


const OurProcess = () => {
    return (
        <div className='secondaryBgColor py-[1.5rem] pb-[7rem] px-[1rem] '>

            <div>
                <h1 className='font-bold text-[1.8rem] text-center mb-[3rem]'>Our Process</h1>
                <div className='flex items-center justify-evenly'>
                    <div className='w-[20rem] text-center'>
                        <div className='w-[70%] mx-[auto]'><img src={process1Img} alt="" /></div>
                        <h2 className='font-bold text-[1.5rem]  mt-[1rem]'>We Listen</h2>
                        <p className="text-[#666464] text-[1.128rem] ">Your challanges are unique, so we start by understanding your goals.</p>
                    </div>
                    <div className='w-[20rem] text-center'>
                        <div className='w-[70%] mx-[auto]'><img src={process2Img} alt="" /></div>
                        <h2 className='font-bold text-[1.5rem]  mt-[1rem]'>We Plan</h2>
                        <p className="text-[#666464] text-[1.128rem] ">Our experts create a customized roadmap tailored to your business.</p>
                    </div>
                    <div className='w-[20rem] text-center'>
                        <div className='w-[70%] mx-[auto]'><img src={process3Img} alt="" /></div>
                        <h2 className='font-bold text-[1.5rem]  mt-[1rem]'>We Deliver</h2>
                        <p className="text-[#666464] text-[1.128rem] ">From setup to training, we handle everything, ensuring you see results fast.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurProcess