import React from 'react'
import Image from 'next/image'
import HeroImage from '../../public/images/pexels-pixabay-416405.jpg'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <main className='pt-[4rem] pb-[1rem] px-[1rem] ' id='home'>
            <div className='flex items-start justify-center max-[1027px]:block '>
                <div className='w-[60%] max-[1027px]:w-[100%] max-[1027px]:text-center '>
                    <h1 className='font-bold text-[3.8rem] max-[1322px]:text-[3.2rem] max-[1110px]:text-[2.6rem] max-[1027px]:text-[3.5rem]'>Transform Your Business <br />With Cutting edge <span className='primaryColorText'>Digital</span><br /> <span className='primaryColorText'>Solutions</span></h1>
                    <p className=' text-[1.4rem] max-[1322px]:w-[98%] max-[1027px]:w-[60%] max-[1027px]:mx-[auto]'>Scale automate and grow your business in one stop with our digital solutions creating smarter systems designed for results</p>
                    <button className='cursor-pointer primaryColor text-[white] outline-none rounded-[2rem] px-[1.6rem] py-[0.58rem] mt-[1rem] font-bold text-[1.5rem]'><Link href='/contactUs'>Get Started</Link></button>
                </div>
                <div className='w-[35%] h-[fit-content] max-[1322px]:w-[40%] max-[1027px]:hidden'> <Image src={HeroImage} alt="" /></div>
            </div>
        </main>
    )
}

export default HeroSection