"use client"
import { useState } from 'react'
import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import PopUpMessage from '../components/PopUpMessage'
import { handleResponse } from '../helperFunction/popUp';
import { ContactApi } from '../lib/utils/api';


const Contact = () => {
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('')
    const [loading, setloading] = useState(false)
    const [name, setname] = useState('')
    const [message, setmessage] = useState('')
    const [email, setemail] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')

    const clearInputFields = () => {
        setmessage('')
        setemail('')
        setphoneNumber('')
        setname('')
    }
    const handleButton = async (e) => {
        setloading(true)
        e.preventDefault()
        try {
            if (email === '' || name === '' || message === '') handleResponse('fill in all required fields', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
            else {
                let contactData = { email, name, message, phoneNumber }
                let resp = await ContactApi.create(contactData)
                if (!resp?.status) {
                    handleResponse(resp?.message || 'unable to send message, an error occured', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
                } else {
                    handleResponse('message successfully sent', true, setpopUpMsg, setpopUpType, setdisplayPopUp)
                    clearInputFields()
                }
            }
        } catch (err) {
            handleResponse(err?.message || 'unable to send message, an error occured', false, setpopUpMsg, setpopUpType, setdisplayPopUp);
        } finally {
            setloading(false)
        }
    }

    return (
        <div id='contact-us'>
            <div className='pb-[5rem]'>
                <h1 className='font-bold text-[1.7rem] text-center pt-[1rem] mb-[3.3rem]'>Contact us for more enquiry</h1>
                <div>
                    <div className="mx-[auto] w-[70%] max-[807px]:w-[85%] max-[657px]:w-[90%]">
                        <div className='flex items-center justify-end mb-[1rem] max-[617px]:block '>
                            <div className='flex items-center max-[617px]:mb-[1rem]'>
                                <MdEmail size={22} />
                                <p>info@gstechhub.com.ng</p>
                            </div>
                            <div className='w-[1px] mx-[0.5rem] h-[1.1rem] border-[1px] border-[#3a3535] max-[617px]:hidden'></div>
                            <div className='flex items-center max-[617px]:mb-[1rem]'>
                                <FaPhoneSquareAlt size={21} />
                                <p>+234 815 561 9895</p>
                            </div>
                            <div className='w-[1px] mx-[0.5rem] h-[1.1rem] border-[1px] border-[#3a3535] max-[617px]:hidden'></div>
                            <div className='flex items-center max-[617px]:mb-[1rem]'>
                                <RiWhatsappFill size={22} />
                                <p>+44 7425 199 9895</p>
                            </div>
                        </div>
                        <div className='w-[100%] mb-[1rem] mt-[1rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                            <h3 className='font-medium mb-[0.4rem]'>Email <b className='text-[red]'>*</b></h3>
                            <input type='email' onChange={(e) => setemail(e.target.value)} value={email} className='bg-[none] outline-none pl-[0.55rem]  py-[0.4rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                        </div>
                        <div className='w-[100%] mb-[1rem] mt-[1rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                            <h3 className='font-medium mb-[0.4rem]'>Name<b className='text-[red]'>*</b></h3>
                            <input type='text' onChange={(e) => setname(e.target.value)} value={name} className='bg-[none] outline-none pl-[0.755em]  py-[0.4rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                        </div>
                        <div className='w-[100%] mb-[1rem] mt-[1rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                            <h3 className='font-medium mb-[0.4rem]'>Phone Number </h3>
                            <input type='text' onChange={(e) => setphoneNumber(e.target.value)} value={phoneNumber} className='bg-[none] outline-none pl-[0.755em]  py-[0.4rem] w-[100%] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                        </div>
                        <div className='w-[100%] mb-[1rem] mt-[1rem] max-[427px]:mb-[0rem] max-[427px]:mt-[1.3rem]'>
                            <h3 className='font-medium mb-[0.4rem]'>Message <b className='text-[red]'>*</b></h3>
                            <textarea onChange={(e) => setmessage(e.target.value)} value={message} className='bg-[none] outline-none pl-[0.7rem] py-[0.4rem] w-[100%] h-[9rem] border-[1px] border-[#dcd7d7] m-[auto] rounded-md ' />
                        </div>
                        <div className='text-end'>
                            <button onClick={(e) => handleButton(e)} className="cursor-pointer primaryColor text-[white] outline-none rounded-[0.3rem] px-[0.6rem] w-[11rem] py-[0.5rem] text-[1.1rem] font-bold max-[427px]:mt-[2rem] max-[360px]:w-[100%]">
                                {
                                    loading ?
                                        <div className="round animate-spin h-[1.5rem] w-[1.5rem] m-[auto] border-[3px] rounded-[50%]  border-x-[white] border-t-[white] border-b-[orange] "></div>
                                        :
                                        <h3 >Submit</h3>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <PopUpMessage popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />
        </div>
    )
}

export default Contact