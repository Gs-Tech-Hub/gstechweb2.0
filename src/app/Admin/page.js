"use client"
import Image from 'next/image'
import { useRouter } from "next/navigation"
import React, { useState } from 'react'
import GsTechLogo from '../../../public/images/GsTechLogo.png'
import { HiUser } from 'react-icons/hi2';
import { HiLockClosed } from 'react-icons/hi';
import { useGeneralContext } from '../../context/GlobalContext'
import PopUpMessage from '../../components/PopUpMessage'
import { handleResponse } from '../../helperFunction/popUp';

const AdminLogin = () => {
    const router = useRouter()
    const userData = useGeneralContext()
    const { setuserName } = userData
    const [loading, setloading] = useState(false)
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('blog successfully deleted')
    const [popUpType, setpopUpType] = useState('')


    const handleButton = async (e) => {
        setloading(true)
        e.preventDefault()
        try {
            if (email === '' || password === '') {
                handleResponse('fill in all required fields', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
                return
            }
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                handleResponse(data?.error || 'Login failed', false, setpopUpMsg, setpopUpType, setdisplayPopUp)
            }
            else {
                setuserName(data.user.name);
                router.push('/Admin/AllBlogs')
            }
        } catch (err) {
            console.log(err)
            handleResponse(err?.message || 'an error occured, unable to login', false, setpopUpMsg, setpopUpType, setdisplayPopUp);
        } finally {
            setloading(false)
        }
    }
    return (
        <div className="Signup">
            <div className='pt-[6rem] pb-[9rem]'>
                <div className=' w-[20rem] m-[auto] text-center pt-[0.5rem] bg-[white] border-[1px] border-[lightgray] rounded-[0.18rem]  max-[345px]:w-[90%]'>
                    <div className='w-[6.5rem] mx-[auto] h-[fit-content]'><Image src={GsTechLogo} width={120} height={100} alt="company logo" /></div>
                    <form action="">
                        <div className="flex w-[90%] items-center m-[auto] mt-[2.5rem] border-b-[1px] border-[#bebaba]">
                            <HiUser size={23} />
                            <input placeholder="Username" onChange={(e) => setemail(e.target.value)} value={email} className='w-[84%] rounded-[0.2rem] px-[0.4rem] py-[0.56rem] bg-[none] outline-none' type="email" />
                        </div>
                        <div className="flex w-[90%] items-center m-[auto] mt-[3rem] border-b-[1px] border-[#bebaba]">
                            <HiLockClosed size={23} />
                            <input placeholder="password" onChange={(e) => setpassword(e.target.value)} value={password} className='w-[84%] rounded-[0.2rem] px-[0.4rem] py-[0.56rem] bg-[none] outline-none' type="password" />
                        </div>
                        <button onClick={(e) => handleButton(e)} disabled={loading} className="w-[90%] rounded-[0.2rem] px-[3rem] py-[0.4rem] primaryColor text-white font-bold cursor-pointer mt-[1.4rem] mb-[1.7rem] outline-none hover:bg-[#17cf5e]">
                            {
                                loading ?
                                    <div className="round animate-spin h-[1.5rem] w-[1.5rem] m-[auto] border-[3px] rounded-[50%]  border-x-[white] border-t-[white] border-b-[orange] "></div>
                                    :
                                    <h3 > Log in</h3>

                            }

                        </button>
                        {/* } */}
                    </form>
                </div>
            </div>
            <PopUpMessage popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />

        </div>
    )
}

export default AdminLogin