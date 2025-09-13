import React from 'react'

const HeroSection = () => {
    return (
        <main className='pt-[4rem] pb-[1rem] px-[1rem] ' id='home'>
            <div className='flex items-start justify-around'>
                <div>
                    <h1 className='font-bold text-[3.8rem]'>Transform Your Business <br />With Cutting edge <span className='primaryColorText'>Digital</span><br /> <span className='primaryColorText'>Solutions</span></h1>
                    <p className=' text-[1.4rem]'>Scale automate and grow your business in one stop with our digital solutions,<br /> creating smarter systems designed for results</p>
                    <button className='cursor-pointer primaryColor text-[white] outline-none rounded-[2rem] px-[1.6rem] py-[0.58rem] mt-[1rem] font-bold text-[1.5rem]'>Get started</button>
                </div>
                <div className='w-[35%] h-[fit-content]'> <img src="/images/pexels-pixabay-416405.jpg" alt="" /></div>
            </div>
        </main>
    )
}

export default HeroSection