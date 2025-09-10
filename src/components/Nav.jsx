import React from 'react'
import GsTechLogo from '../assets/GsTechLogo.png'

const Nav = () => {
    return (
        <nav className='flex items-center justify-between px-[2rem] py-[0.7rem] border-b-[1px] border-[#e0dddd]'>
            <div className='flex items-center'>
                <div className='w-[4.5rem] h-[fit-content]'><img src={GsTechLogo} alt="company logo" /></div>
                <h2 className='font-semibold text-[2rem]'>GS Tech Hub</h2>
            </div>
            <div className='flex items-center'>
                <ul className='flex items-center '>
                    <li className='mx-[1.9rem] text-[1.1rem]'>Home</li>
                    <li className='mx-[1.9rem] text-[1.1rem]'>About</li>
                    <li className='mx-[1.9rem] text-[1.1rem]'>Service</li>
                    <li className='mx-[1.9rem] text-[1.1rem]'>Contact</li>
                </ul>
                <button className='cursor pointer primaryColor text-[white] outline-none rounded-[2rem] px-[0.6rem] py-[0.35rem] text-[1.1rem]'>Get started</button>
            </div>

        </nav>
    )
}

export default Nav