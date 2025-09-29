"use client"
import { useState } from 'react'
import Link from "next/link"
import PopUpMessage  from '../components/PopUpMessage';
import { displayPopUpMessage, cancelPopUP } from '../helperFunction/popUp';


const Footer = () => {
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('')
    const [email, setemail] = useState('')
    const [loading, setloading] = useState(false)

    const handleButton = (e) => {
        setloading(true)
        e.preventDefault()
        if (email === '') {
            displayPopUpMessage('enter your email', setpopUpMsg, setpopUpType, setdisplayPopUp, false)
            cancelPopUP(setdisplayPopUp, 1000)
            setloading(false)
        } else {
            setloading(false)
            displayPopUpMessage('email successfully added', setpopUpMsg, setpopUpType, setdisplayPopUp, true)
        }

    }
    return (
        <footer className='bg-[black] text-white py-[4rem] px-[1rem] max-[609px]:px-[0.4rem]'>
            <div className='flex items-start justify-evenly pb-[2rem] max-[839px]:flex-wrap'>
                <div className='max-[839px]:w-[40%] max-[839px]:mb-[2rem] max-[740px]:w-[47%]'>
                    <div className='w-[7.5rem] h-[fit-content]'><img src='/images/GsTechLogo.png' alt="" /></div>
                    <p>+234 815 561 9895</p>
                    <p>+234 815 561 9895</p>
                    <p>info@gstechhub.com.ng</p>
                </div>
                <div className='max-[839px]:w-[40%] max-[839px]:mb-[2rem] max-[740px]:w-[47%]'>
                    <h2 className='font-bold text-[1.36rem] text-[white] mb-[0.3rem]'>Links</h2>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#about">About</a></p>
                    <p><a href="#services">Service</a></p>
                    {/* <p><Link href='/Portfolio'>Portfolio</Link></p> */}
                    <p><Link href='/contactUs'>Contact</Link></p>
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
                        <input type='email' placeholder='Email address' value={email} onInput={(e) => setemail(e.target.value)} className=' outline-none pl-[0.7rem] py-[0.4rem] w-[90%] m-[auto] max-[379px]:w-[93%]' />
                        <button onClick={handleButton} className='cursor-pointer bg-black text-[white] outline-none rounded-[2rem] px-[1.6rem] py-[0.25rem] text-[1.1rem] max-[740px]:px-[0.8rem] max-[550px]:text-[1rem] max-[550px]:px-[0.5rem] max-[379px]:text-[0.85rem]'>Submit</button>

                    </div>

                </div>
            </div>
            <div className='border-b-[1px] border-[#595757] w-[85%] mx-[auto]'></div>
            <PopUpMessage popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />
        </footer>
    )
}

export default Footer