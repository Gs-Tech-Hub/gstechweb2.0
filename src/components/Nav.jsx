"use client"
import { useState } from 'react'
import { useRouter } from "next/navigation"
import Image from 'next/image'
import GsTechLogo from '../../public/images/GsTechLogo.png'
import { LuMenu } from 'react-icons/lu';
import Link from 'next/link';


const Nav = () => {
    const router = useRouter()

    let navLinksStyling = 'flex items-center max-[865px]:block max-[865px]:absolute max-[865px]:bg-[white] max-[865px]:w-[100vw] max-[865px]:h-[100%] max-[865px]:top-[4.6rem]'
    const [mobile, setmobile] = useState(false)
    const handleNavigation = (route) => {
        // router.push(route)
        if (mobile) setmobile(false)

    }
    return (
        <nav className='flex items-center justify-between px-[2rem] py-[0.7rem] border-b-[1px] border-[#e0dddd] max-[990px]:px-[1rem] max-[865px]:px-[0.4rem]'>
            <div className='flex items-center'>
                <div className='w-[4.5rem] h-[fit-content]'><Image src={GsTechLogo} alt="company logo" /></div>
                <h2 className='font-semibold text-[2rem] max-[475px]:text-[1.8rem]'>GS Tech Hub</h2>
            </div>
            <div className={mobile ? ` ${navLinksStyling} max-[865px]:left-0 transit` : ` ${navLinksStyling} max-[865px]:left-[-100%]`}>
                <ul className='flex items-center max-[865px]:block  max-[865px]:text-center max-[865px]:pt-[1rem]'>
                    <li onClick={handleNavigation} className='mx-[1.9rem] cursor-pointer text-[1.1rem] max-[990px]:mx-[1rem] max-[865px]:my-[2rem] max-[865px]:font-bold max-[865px]:text-[1.2rem]'><a href="#home">Home</a></li>
                    <li onClick={handleNavigation} className='mx-[1.9rem] cursor-pointer text-[1.1rem] max-[990px]:mx-[1rem] max-[865px]:my-[2rem] max-[865px]:font-bold max-[865px]:text-[1.2rem]' ><a href="#about">About</a></li>
                    <li onClick={handleNavigation} className='mx-[1.9rem] cursor-pointer text-[1.1rem] max-[990px]:mx-[1rem] max-[865px]:my-[2rem] max-[865px]:font-bold max-[865px]:text-[1.2rem]'><a href="#services">Service</a></li>
                    <li onClick={handleNavigation} className='mx-[1.9rem] cursor-pointer text-[1.1rem] max-[990px]:mx-[1rem] max-[865px]:my-[2rem] max-[865px]:font-bold max-[865px]:text-[1.2rem]'><Link href='/contactUs'>Contact</Link></li>
                </ul>
                <div className='max-[865px]:text-center'><button className='cursor pointer primaryColor text-[white] cursor-pointer outline-none rounded-[2rem] px-[0.6rem] py-[0.35rem] text-[1.1rem] max-[990px]:ml-[0.6rem] max-[865px]:font-bold max-[865px]:text-[1.2rem]'><Link href='/contactUs'>Get Started</Link></button></div>
            </div>
            <div onClick={() => setmobile(!mobile)} className='hidden max-[865px]:block max-[865px]:mr-[0.5rem]'><LuMenu size={25} /></div>

        </nav>
    )
}

export default Nav