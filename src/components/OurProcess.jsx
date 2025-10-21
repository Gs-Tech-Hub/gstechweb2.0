import React from 'react'
import Image from 'next/image'
import { ourProcessData } from '../data/ourProcessData'



const OurProcess = () => {
    return (
        <div className=' py-[1.5rem] pb-[4rem] px-[1rem] max-[564px]:pb-[0.5rem]'>
            <div>
                <h1 className='font-bold text-[1.8rem] text-center mb-[3rem]'>Our Process</h1>
                <div className='flex items-center justify-evenly max-[702px]:justify-around max-[702px]:flex-wrap max-[502px]:block '>
                    {
                        ourProcessData.map(item => {
                            return <div key={item.id} className='w-[20rem] text-center max-[1162px]:w-[29%] max-[564px]:w-[40%] max-[564px]:mb-[3rem] max-[502px]:mx-[auto] max-[502px]:w-[80%]'>
                                <div className='w-[70%] mx-[auto] max-[751px]:w-[80%]  max-[564px]:w-[95%] max-[502px]:w-[70%]'><Image src={item.img} alt="process-img" /></div>
                                <h2 className='font-bold text-[1.5rem]  mt-[1rem] max-[702px]:text-[1.28rem] max-[502px]:text-[1.4rem]'>{item.title}</h2>
                                <p className="text-[#666464] text-[1.128rem] max-[702px]:text-[1.09rem] max-[502px]:text-[1.12rem]">{item.text}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurProcess