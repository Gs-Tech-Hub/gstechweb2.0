import React from 'react'
import { FaGlobeAmericas } from 'react-icons/fa';


const Contact = () => {
    return (
        <div>
            <div className='pb-[5rem]'>
                <h1 className='font-bold text-[1.7rem] text-center pt-[1rem] mb-[3.3rem]'>Get in touch for more information and support</h1>
                <div>
                    <div className="mx-[auto] w-[70%]">
                        <div className='flex items-center justify-end pb-[2rem] border-b-[1px] border-b-[#eae9e9]'>
                            <div className='flex items-center'>
                                <FaGlobeAmericas />
                                <p>info@gstechhub.com.ng</p>
                            </div>
                            <div className='w-[1px] mx-[0.5rem] h-[1.1rem] border-[1px] border-[#3a3535]'></div>
                            <div className='flex items-center'>
                                <FaGlobeAmericas />
                                <p>+234 815 561 9895</p>
                            </div>
                            <div className='w-[1px] mx-[0.5rem] h-[1.1rem] border-[1px] border-[#3a3535]'></div>
                            <div className='flex items-center'>
                                <FaGlobeAmericas />
                                <p>+44 7425 199 9895</p>
                            </div>
                        </div>
                        <div className='w-[100%] mb-[2.3rem] mt-[2rem]'>
                            <h3 className='font-medium mb-[0.4rem]'>Email <b className='text-[red]'>*</b></h3>
                            <input type='email' className='bg-[none] outline-none pl-[0.7rem]  py-[0.7rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                        </div>
                        <div className='w-[100%] mb-[2.3rem] mt-[2rem]'>
                            <h3 className='font-medium mb-[0.4rem]'>First Name<b className='text-[red]'>*</b></h3>
                            <input type='text' className='bg-[none] outline-none pl-[0.7rem]  py-[0.7rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                        </div>
                        <div className='w-[100%] mb-[2.3rem] mt-[2rem]'>
                            <h3 className='font-medium mb-[0.4rem]'>Last Name</h3>
                            <input type='text' className='bg-[none] outline-none pl-[0.7rem]  py-[0.7rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                        </div>
                        <div className='w-[100%] mb-[2.3rem] mt-[2rem]'>
                            <h3 className='font-medium mb-[0.4rem]'>Phone Number <b className='text-[red]'>*</b></h3>
                            <input type='text' className='bg-[none] outline-none pl-[0.7rem]  py-[0.7rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                        </div>
                        <div className='w-[100%] mb-[2.3rem] mt-[2rem]'>
                            <h3 className='font-medium mb-[0.4rem]'>Company Name</h3>
                            <input type='text' className='bg-[none] outline-none pl-[0.7rem]  py-[0.7rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                        </div>
                        <div className='w-[100%] mb-[2.3rem] mt-[2rem]'>
                            <h3 className='font-medium mb-[0.4rem]'>Country/Region  <b className='text-[red]'>*</b></h3>
                            <input type='text' className='bg-[none] outline-none pl-[0.7rem]  py-[0.7rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                        </div>
                        <div className='w-[100%] mb-[2.3rem] mt-[2rem]'>
                            <h3 className='font-medium mb-[0.4rem]'>City <b className='text-[red]'>*</b></h3>
                            <input type='text' className='bg-[none] outline-none pl-[0.7rem]  py-[0.7rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                        </div>
                        <div className='text-end'>
                            <button className='cursor pointer primaryColor text-[white] outline-none rounded-[0.3rem] px-[0.6rem] w-[11rem] py-[0.5rem] text-[1.1rem] font-bold'>Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact