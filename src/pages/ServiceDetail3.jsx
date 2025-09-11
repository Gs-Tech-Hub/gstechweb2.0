import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const ServiceDetail3 = () => {
    return (
        <div>
            <div>
                <h1 className='font-bold text-[1.7rem] text-center pt-[1rem] mb-[3.3rem]'>Hardware & Infrastructure Solutions</h1>
                <div className='flex items-start justify-evenly'>
                    <div className='w-[50%]'>
                        <h1 className='font-bold text-[1.7rem] mb-[2rem] ml-[4rem]'>What is in this service</h1>
                        <div className='flex items-start justify-evenly  flex-wrap'>
                            <div className='w-[40%] mb-[2rem]'>
                                <h3 className='font-bold text-[1.7rem] text-center text-[white] px-[0.6rem] py-[0.2rem] rounded-[50%] primaryColor mb-[1.3rem] w-[fit-content]'>01</h3>
                                <h2 className='font-bold text-[1.45rem]  mb-[0.5rem]'>IT Hardware <br />Solutions</h2>
                                <p className='text-[1.2rem]'>Admin workstations, customer terminals, and kiosks.</p>
                            </div>
                            <div className='w-[40%] mb-[2rem]'>
                                <h3 className='font-bold text-[1.7rem] text-center text-[white] px-[0.6rem] py-[0.2rem] rounded-[50%] primaryColor mb-[1.3rem] w-[fit-content]'>02</h3>
                                <h2 className='font-bold text-[1.45rem]  mb-[0.5rem]'>PoS Systems</h2>
                                <p className='text-[1.2rem]'>Secure and efficient transaction processing for various industries</p>
                            </div>
                            <div className='w-[40%] mb-[2rem]'>
                                <h3 className='font-bold text-[1.7rem] text-center text-[white] px-[0.6rem] py-[0.2rem] rounded-[50%] primaryColor mb-[1.3rem] w-[fit-content]'>02</h3>
                                <h2 className='font-bold text-[1.45rem]  mb-[0.5rem]'>Surveillance & Security Systems</h2>
                                <p className='text-[1.2rem]'>CCTV cameras, biometrics access, and monitoring tools</p>
                            </div>
                            <div className='w-[40%] mb-[2rem]'>
                                <h3 className='font-bold text-[1.7rem] text-center text-[white] px-[0.6rem] py-[0.2rem] rounded-[50%] primaryColor mb-[1.3rem] w-[fit-content]'>02</h3>
                                <h2 className='font-bold text-[1.45rem]  mb-[0.5rem]'>Power Backup & Energy Solutions</h2>
                                <p className='text-[1.2rem]'>Uninterrupted power supply (UPS) systems</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='font-bold text-[1.7rem] mb-[2rem]'>What you will get from this service</h1>
                        <p className=' w-[50%]'>For businesses requiring physical infrastructure to support digital transformation and secure operations.</p>
                        <div className='my-[2rem] '>
                            <div className='flex items-start mt-[1rem]'>
                                <FaCheckCircle color='green' size={18} />
                                <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[1.1rem]'>IT Hardware Solutions</h3>
                            </div>
                            <div className='flex items-start mt-[3rem]'>
                                <FaCheckCircle color='green' size={18} />
                                <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[1.1rem]'>PoS Syatems</h3>
                            </div>
                            <div className='flex items-start mt-[3rem]'>
                                <FaCheckCircle color='green' size={18} />
                                <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[1.1rem]'>Surveillance & Security Systems</h3>
                            </div>
                            <div className='flex items-start mt-[3rem]'>
                                <FaCheckCircle color='green' size={18} />
                                <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[1.1rem]'>Power Backup & Energy Solutions</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail3