import React from 'react'
import { GiTechnoHeart } from 'react-icons/gi';
import { IoSparklesSharp } from 'react-icons/io5';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaHandHoldingMedical } from 'react-icons/fa';
// import { BsLaptopFill } from 'react-icons/md';
import { FaLaptop } from 'react-icons/fa';
import { BsLaptopFill } from 'react-icons/bs';
const Services = () => {
    return (
        <div className='py-[1.5rem] pb-[6rem]'>
            <h1 className='font-bold text-[1.8rem] text-center mb-[3rem]'>Our Services</h1>
            <div className='flex items-start justify-evenly'>
                <div className='w-[23rem] border-[1px] rounded-[0.6rem] p-[1rem] pb-[1.2rem] border-[#e0dddd]'>
                    <div className='p-[0.7rem] bg-[#ffa600c3] w-[fit-content] rounded-[0.5rem] mb-[0.5rem]'><FaGlobeAmericas size={22} color='white' /></div>
                    <h3 className='font-bold text-[1.36rem] mb-[0.3rem]'>Digital Presence & Marketing Solutions</h3>
                    <p>Designed to enhance brand visibility and drive customer engagement through targeted digital strategies.</p>
                    <div className='mt-[1.8rem] flex items-center justify-end cursor-pointer hover:text-[orange]'>
                        <p className='font-semibold text-[1.1rem]'>Learn more </p>
                        <FiArrowUpRight />
                    </div>
                </div>
                <div className='w-[23rem] border-[1px] rounded-[0.6rem] p-[1rem] pb-[1.2rem] border-[#e0dddd]'>
                    <div className='p-[0.7rem] bg-[#ffa600c3] w-[fit-content] rounded-[0.5rem] mb-[0.5rem]'><GiTechnoHeart size={22} color='white' /></div>
                    <h3 className='font-bold text-[1.36rem] mb-[0.3rem]'>Enterprise Management Solutions</h3>
                    <p>A centralized system for businesses to streamline operations and enhance efficiency with automation and digital tools.</p>
                    <div className='mt-[1.8rem] flex items-center justify-end cursor-pointer hover:text-[orange]'>
                        <p className='font-semibold text-[1.1rem]'>Learn more </p>
                        <FiArrowUpRight />
                    </div>
                </div>
                <div className='w-[23rem] border-[1px] rounded-[0.6rem] p-[1rem] pb-[1.2rem] border-[#e0dddd]'>
                    <div className='p-[0.7rem] bg-[#ffa600c3] w-[fit-content] rounded-[0.5rem] mb-[0.5rem]'><FaLaptop size={22} color='white' /></div>
                    <h3 className='font-bold text-[1.36rem] mb-[0.3rem]'>Hardware & Infrastructure Solutions</h3>
                    <p>For businesses requiring physical infrastructure to support digital transformation and secure operations.</p>
                    <div className='mt-[1.8rem] flex items-center justify-end cursor-pointer hover:text-[orange]'>
                        <p className='font-semibold text-[1.1rem]'>Learn more </p>
                        <FiArrowUpRight />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Services