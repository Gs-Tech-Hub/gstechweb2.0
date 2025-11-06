"use client"
import { useState } from 'react'
import Link from "next/link"
import Image from "next/image";
import PopUpMessage from '../components/PopUpMessage';
import { handleResponse } from '../helperFunction/popUp';


const Footer = () => {
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('')
    const [email, setemail] = useState('')

    const handleButton = (e) => {
        e.preventDefault()
        if (email === '') {
            handleResponse('enter your email', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
        } else {
            handleResponse('email successfully added', true, setpopUpMsg, setpopUpType, setdisplayPopUp)
            setemail('')
        }

    }
    return (
        <footer className='bg-[black] text-white py-[4rem] px-[1rem] max-[609px]:px-[0.4rem]'>
            <div className='flex items-start justify-evenly pb-[2rem] max-[839px]:flex-wrap'>
                <div className='max-[839px]:w-[40%] max-[839px]:mb-[2rem] max-[740px]:w-[47%]'>
                    <div className='w-[7.5rem] h-[fit-content]'><Image width={150} height={150} src='/images/GsTechLogo.png' alt="company logo" /></div>
                    <p>+234 815 561 9895</p>
                    <p>+234 815 561 9895</p>
                    <p>info@gstechhub.com.ng</p>
                </div>
                <div className='max-[839px]:w-[40%] max-[839px]:mb-[2rem] max-[740px]:w-[47%]'>
                    <h2 className='font-bold text-[1.36rem] text-[white] mb-[0.3rem]'>Links</h2>
                    <p><a href={`${process.env.NEXT_PUBLIC_API_URL}/#home`}>Home</a></p>
                    <p><a href={`${process.env.NEXT_PUBLIC_API_URL}/#about`}>About</a></p>
                    <p><a href={`${process.env.NEXT_PUBLIC_API_URL}/#services`}>Service</a></p>
                    <p><Link href={`${process.env.NEXT_PUBLIC_API_URL}/#contact-us`}>Contact</Link></p>
                </div>
                <div className='max-[839px]:w-[40%] max-[839px]:mb-[2rem] max-[740px]:w-[47%]'>
                    <h2 className='font-bold text-[1.36rem] text-[white] mb-[0.3rem]'>Services</h2>
                    <p>Mobile-App Development</p>
                    <p>Mangement Software</p>
                    <p>Branding Design</p>
                    <p>Front-End Development</p>
                    <p>Graphics Design</p>
                    <p>Ad Promotion</p>
                </div>
                <div className='max-[839px]:w-[40%] max-[839px]:mb-[2rem] max-[740px]:w-[47%]'>
                    <h2 className='font-bold text-[1.36rem] text-[white] mb-[1.3rem]'>Subscribe to our newsletter</h2>
                    <div className='flex items-center rounded-[2rem] w-[20rem] px-[0.35rem] bg-[white] text-[black] py-[0.3rem] max-[740px]:w-[100%] max-[379px]:px-[0rem] max-[379px]:pr-[0.19rem]  max-[379px]:py-[0rem]'>
                        <input type='email' placeholder='Email address' required value={email} onInput={(e) => setemail(e.target.value)} className=' outline-none pl-[0.7rem] py-[0.4rem] w-[90%] m-[auto] max-[379px]:w-[93%]' />
                        <button onClick={handleButton} className='cursor-pointer bg-black text-[white] outline-none rounded-[2rem] px-[1.6rem] py-[0.25rem] text-[1.1rem] max-[740px]:px-[0.8rem] max-[550px]:text-[1rem] max-[550px]:px-[0.5rem] max-[379px]:px-[0.3rem] max-[379px]:text-[0.85rem]'>Submit</button>
                    </div>

                </div>
            </div>
            <div className='border-b-[1px] border-[#595757] w-[85%] mx-[auto]'></div>
            <PopUpMessage popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />
        </footer>
    )
}

export default Footer