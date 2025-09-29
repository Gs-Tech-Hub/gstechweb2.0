import React from 'react'
import Image from 'next/image'
import process1Img from '../../public/images/undraw_online-community_3o0l.svg'
import process2Img from '../../public/images/undraw_business-chat_xea1.svg'
import process3Img from '../../public/images/undraw_data_0ml2.svg'

const OurProcess = () => {
    return (
        <div className='secondaryBgColor py-[1.5rem] pb-[4rem] px-[1rem] max-[564px]:pb-[0.5rem]'>
            <div>
                <h1 className='font-bold text-[1.8rem] text-center mb-[3rem]'>Our Process</h1>
                <div className='flex items-center justify-evenly max-[702px]:justify-around max-[702px]:flex-wrap max-[502px]:block '>
                    <div className='w-[20rem] text-center max-[1162px]:w-[29%] max-[564px]:w-[40%] max-[564px]:mb-[3rem] max-[502px]:mx-[auto] max-[502px]:w-[80%]'>
                        <div className='w-[70%] mx-[auto] max-[751px]:w-[80%]  max-[564px]:w-[95%] max-[502px]:w-[70%]'><Image src={process1Img} alt="process-img" /></div>
                        <h2 className='font-bold text-[1.5rem]  mt-[1rem] max-[702px]:text-[1.28rem] max-[502px]:text-[1.4rem]'>We Listen</h2>
                        <p className="text-[#666464] text-[1.128rem] max-[702px]:text-[1.09rem] max-[502px]:text-[1.12rem]">Your challanges are unique, so we start by understanding your goals.</p>
                    </div>
                    <div className='w-[20rem] text-center max-[1162px]:w-[29%] max-[564px]:w-[40%] max-[564px]:mb-[3rem] max-[502px]:w-[80%] max-[502px]:mx-[auto]'>
                        <div className='w-[70%] mx-[auto] max-[751px]:w-[80%]  max-[564px]:w-[95%] max-[502px]:w-[70%]'><Image src={process2Img} alt="process-img" /></div>
                        <h2 className='font-bold text-[1.5rem]  mt-[1rem] max-[702px]:text-[1.28rem] max-[502px]:text-[1.4rem]'>We Plan</h2>
                        <p className="text-[#666464] text-[1.128rem] max-[702px]:text-[1.09rem] max-[502px]:text-[1.12rem]">Our experts create a customized roadmap tailored to your business.</p>
                    </div>
                    <div className='w-[20rem] text-center max-[1162px]:w-[29%] max-[564px]:w-[40%] max-[564px]:mb-[3rem] max-[502px]:w-[80%] max-[502px]:mx-[auto]'>
                        <div className='w-[70%] mx-[auto] max-[751px]:w-[80%]  max-[564px]:w-[95%] max-[502px]:w-[70%]'><Image src={process3Img} alt="process-img" /></div>
                        <h2 className='font-bold text-[1.5rem]  mt-[1rem] max-[702px]:text-[1.28rem] max-[502px]:text-[1.4rem]'>We Deliver</h2>
                        <p className="text-[#666464] text-[1.128rem] max-[702px]:text-[1.09rem] max-[502px]:text-[1.12rem]">From setup to training, we handle everything, ensuring you see results fast.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurProcess