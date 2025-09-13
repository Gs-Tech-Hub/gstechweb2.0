import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import GsTechLogo from '../assets/GsTechLogo.png'
import { HiUser } from 'react-icons/hi2';
import { HiLockClosed } from 'react-icons/hi';

const AdminLogin = () => {
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [errormsg, seterrormsg] = useState('')




    const handleButton = (e) => {
        e.preventDefault()

    }
    return (
        <div className="Signup">
            {/* style={{ boxShadow: ' 0px 2px 5px rgba(0, 0, 0, 0.4)' }} */}
            <div className='pt-[11rem]'>
                <div className=' w-[20rem] m-[auto] text-center pt-[0.5rem] bg-[white] border-[1px] border-[lightgray] rounded-[0.18rem]  max-[345px]:w-[90%]'>
                    <div className='w-[6.5rem] mx-[auto] h-[fit-content]'><img src={GsTechLogo} alt="company logo" /></div>
                    <form action="">
                        <div className="flex w-[90%] items-center m-[auto] mt-[2.5rem] border-b-[1px] border-[#bebaba]">
                            <HiUser size={23} />
                            <input placeholder="Username" onChange={(e) => setemail(e.target.value)} value={email} className='w-[84%] rounded-[0.2rem] px-[0.4rem] py-[0.56rem] bg-[none] outline-none' type="email" />
                        </div>
                        <div className="flex w-[90%] items-center m-[auto] mt-[3rem] border-b-[1px] border-[#bebaba]">
                            <HiLockClosed size={23} />
                            <input placeholder="password" onChange={(e) => setpassword(e.target.value)} value={password} className='w-[84%] rounded-[0.2rem] px-[0.4rem] py-[0.56rem] bg-[none] outline-none' type="password" />
                        </div>
                        <p className='font-bold text-[red] mt-[0.5rem]'>{errormsg}</p>
                        <button onClick={(e) => handleButton(e)} className="w-[90%] rounded-[0.2rem] px-[3rem] py-[0.4rem] primaryColor text-white font-bold cursor-pointer mt-[1.4rem] mb-[1.7rem] outline-none hover:bg-[#17cf5e]">
                            {
                                loading ?
                                    <div class="round animate-spin h-[1.5rem] w-[1.5rem] m-[auto] border-[3px] rounded-[50%]  border-x-[white] border-t-[white] border-b-[orange] "></div>
                                    :
                                    <h3 > Log in</h3>

                            }

                        </button>
                        {/* } */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin