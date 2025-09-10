import React from 'react'

const About = () => {
    return (
        <div className='secondaryBgColor pt-[8.6rem] py-[1.5rem] pb-[7rem] px-[1rem] '>
            <div className=''>
                <h1 className='font-bold text-[1.8rem] text-center mb-[3rem]'>About us</h1>
                <div className='flex items-center justify-center'>
                    <div className='w-[40%] mx-[auto] h-[fit-content]'><img src="/images/pexels-pixabay-416405.jpg" alt="" /></div>
                    <div className='w-[50%] '>
                        <p className='w-[65%] mb-[1rem] leading-[2.2rem] text-[1.2rem]'>GS Tech Hub is a digital agency that specializes in helping businesses like yours scale faster, streamline operations through automation, and attract more customers with cutting-edge technology solutions. Our team is dedicated to understanding your unique challenges and providing tailored strategies that drive growth, enhance customer engagement and much more. GS Tech Hub is your trusted partner for success in the ever-evolving digital landscape. </p>
                        <i className='text-[1.2rem] font-medium'>We Build Smarter Systems for Nigerian Businesses</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About