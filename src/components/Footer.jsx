import React from 'react'
import GsTechLogo from '../assets/GsTechLogo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className='bg-[black] text-white py-[4rem] px-[1rem]'>
            <div className='flex items-start justify-evenly border-b-[1px] border-[#595757] pb-[2rem]'>
                <div>
                    <div className='w-[7.5rem] h-[fit-content]'><img src={GsTechLogo} alt="" /></div>
                    <p>+234 815 561 9895</p>
                    <p>+44 7425 199941</p>
                    <p>info@gstechhub.com.ng</p>
                </div>
                <div>
                    <h2 className='font-bold text-[1.36rem] text-[white] mb-[0.3rem]'>Services</h2>
                    <p>WP Development</p>
                    <p>UX Research</p>
                    <p>Branding Design</p>
                    <p>Front-End Development</p>
                    <p>Graphics Design</p>
                    <p>Ad Promotion</p>
                </div>
                <div>
                    <h2 className='font-bold text-[1.36rem] text-[white] mb-[0.3rem]'>Links</h2>
                    <p><a href="#home">Home</a></p>
                    <p><Link>About</Link></p>
                    <p><Link>Services</Link></p>
                    <p><Link>Services</Link></p>
                    <p><Link>Portfolio</Link></p>
                    <p><Link>Contact</Link></p>
                </div>
                <div>
                    <h2 className='font-bold text-[1.36rem] text-[white] mb-[1.3rem]'>Subscribe to our newsletter</h2>
                    <div className='flex items-center rounded-[2rem] w-[20rem] px-[0.35rem] bg-[white] text-[black] py-[0.3rem]'>
                        <input type='email' placeholder='Email address' className=' outline-none pl-[0.7rem] py-[0.4rem] w-[90%] m-[auto] ' />
                        <button className='cursor-pointer bg-black text-[white] outline-none rounded-[2rem] px-[1.6rem] py-[0.25rem] text-[1.1rem]'>Submit</button>

                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer