import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import Link from "next/link"

const Pricing = () => {
    return (
        <div className='secondaryBgColor py-[1.5rem] pb-[4rem] px-[1rem]  max-[1029px]:px-[0.3rem] max-[563px]:pb-[0.5rem]'>
            <h1 className='font-bold text-[1.8rem] text-center mb-[3rem]'>Our Pricing</h1>
            <div className='flex items-start justify-evenly max-[1029px]:justify-around max-[563px]:block'>
                <div className='bg-[white] w-[27rem] border-[#e0dddd] border-[1px] rounded-[0.6rem] p-[1rem] max-[939px]:w-[45%] max-[563px]:w-[80%] max-[563px]:mx-[auto] max-[563px]:mb-[3.2rem]'>
                    <h2 className='font-bold text-[1.5rem] mb-[1rem]'>Executive Package</h2>
                    <div className='flex items-center mb-[0.6rem]'><b className='text-[2.8rem]  max-[769px]:text-[2.3rem]'>$500</b> <p className='mb-[-0.9rem] text-[1.1rem]'>/year</p></div>
                    <p className='border-b-[1px] border-[#cdcbcb] pb-[2rem] text-[#555353] max-[741px]:pb-[1rem]'>Control your choices for effective business growth and more customers.</p>
                    <div className='my-[2rem] max-[741px]:mt-[1.3rem]'>
                        <div className='flex items-start mt-[1rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='w-[93%] ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>Automate your core operations</h3>
                        </div>
                        <div className='flex items-start mt-[2rem] max-[741px]:mt-[1.3rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='w-[93%] ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>No hidden charges, no suprise fees</h3>
                        </div>
                        <div className='flex items-start mt-[2rem] max-[741px]:mt-[1.3rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='w-[93%] ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>Full setup and training included</h3>
                        </div>
                    </div>
                    <Link href='/contactUs'><button className='primaryColor text-[white] outline-none rounded-[2rem] w-[100%] font-bold px-[0.6rem] py-[0.7rem] cursor-pointer text-[1.1rem]'>Choose Package</button></Link>
                </div>
                <div className='bg-[white] w-[27rem] border-[#e0dddd] border-[1px] rounded-[0.6rem] p-[1rem] max-[939px]:w-[45%] max-[563px]:w-[80%] max-[563px]:mx-[auto] max-[563px]:mb-[3.2rem]'>
                    <h2 className='font-bold text-[1.5rem] mb-[1rem]'>Premium Package</h2>
                    <div className='flex items-center mb-[0.6rem]'><b className='text-[2.8rem] max-[769px]:text-[2.3rem]'>$1,500</b> <p className='mb-[-0.9rem] text-[1.1rem]'>/year</p></div>
                    <p className='border-b-[1px] border-[#cdcbcb] pb-[2rem] text-[#555353] max-[741px]:pb-[1rem]'>Control your choices for effective business growth and more customers.</p>
                    <div className='my-[2rem] max-[741px]:mt-[1.3rem]'>
                        <div className='flex items-start mt-[1rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='w-[93%] ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>Complete business automation</h3>
                        </div>
                        <div className='flex items-start mt-[2rem] max-[741px]:mt-[1.3rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='w-[93%] ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>Piority support</h3>
                        </div>
                        <div className='flex items-start mt-[2rem] max-[741px]:mt-[1.3rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='w-[93%] ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>Custom features for your specific needs</h3>
                        </div>
                    </div>
                    <Link href='/contactUs'><button className='primaryColor text-[white] outline-none rounded-[2rem] w-[100%] font-bold px-[0.6rem] py-[0.7rem] cursor-pointer text-[1.1rem]'>Choose Package</button></Link>
                </div>
            </div >



        </div >
    )
}

export default Pricing