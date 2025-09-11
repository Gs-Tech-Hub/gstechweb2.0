import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
const Pricing = () => {
    return (
        <div className='secondaryBgColor py-[1.5rem] pb-[7rem] px-[1rem] '>
            <h1 className='font-bold text-[1.8rem] text-center mb-[3rem]'>Our Pricing</h1>
            <div className='flex items-center justify-evenly'>
                <div className='bg-[white] w-[27rem] border-[#e0dddd] border-[1px] rounded-[0.6rem] p-[1rem]'>
                    <h2 className='font-bold text-[1.5rem] mb-[1rem]'>Executive Package</h2>
                    <div className='flex items-center mb-[0.6rem]'><b className='text-[2.8rem]'>$500</b> <p className='mb-[-0.9rem] text-[1.1rem]'>/year</p></div>
                    <p className='border-b-[1px] border-[#cdcbcb] pb-[2rem] text-[#555353]'>Control your choices for effective business growth and more customers.</p>
                    <div className='my-[2rem] '>
                        <div className='flex items-start mt-[1rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>Automate your core operations</h3>
                        </div>
                        <div className='flex items-start mt-[2rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>No hidden charges, no suprise fees</h3>
                        </div>
                        <div className='flex items-start mt-[2rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>Full setup and training included</h3>
                        </div>
                    </div>
                    <button className='primaryColor text-[white] outline-none rounded-[2rem] w-[100%] font-bold px-[0.6rem] py-[0.7rem] text-[1.1rem]'>Choose Package</button>
                </div>
                <div className='bg-[white] w-[27rem] border-[#e0dddd] border-[1px] rounded-[0.6rem] p-[1rem]'>
                    <h2 className='font-bold text-[1.5rem] mb-[1rem]'>Premium Package</h2>
                    <div className='flex items-center mb-[0.6rem]'><b className='text-[2.8rem]'>$1,500</b> <p className='mb-[-0.9rem] text-[1.1rem]'>/year</p></div>
                    <p className='border-b-[1px] border-[#cdcbcb] pb-[2rem] text-[#555353]'>Control your choices for effective business growth and more customers.</p>
                    <div className='my-[2rem] '>
                        <div className='flex items-start mt-[1rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>Complete business automation</h3>
                        </div>
                        <div className='flex items-start mt-[2rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>Piority support</h3>
                        </div>
                        <div className='flex items-start mt-[2rem]'>
                            <FaCheckCircle color='green' size={18} />
                            <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[#423f3f] text-[1.1rem]'>Custom features for your specific needs</h3>
                        </div>
                    </div>
                    <button className='primaryColor text-[white] outline-none rounded-[2rem] w-[100%] font-bold px-[0.6rem] py-[0.7rem] cursor-pointer text-[1.1rem]'>Choose Package</button>
                </div>
            </div >



        </div >
    )
}

export default Pricing