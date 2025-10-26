import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const page = () => {
    return (
        <div>
            <div>
                <h1 className='font-bold text-[1.7rem] text-center pt-[1rem] mb-[3.3rem] max-[479px]:text-[1.55rem] max-[479px]:px-[1rem]'>Digital Presence & Marketing</h1>
                <div className='flex items-start justify-evenly max-[956px]:block'>
                    <div className='w-[40%] mx-[auto] max-[1096px]:w-[50%] max-[956px]:w-[95%]'>
                        <h1 className='font-bold text-[1.7rem] mb-[1rem] ml-[4rem] max-[511px]:ml-[1.6rem] max-[347px]:mx-[auto] max-[511px]:text-center'>What is in this service</h1>
                        <div className='flex items-start justify-evenly  flex-wrap'>
                            <div className='w-[40%] mb-[2rem]'>
                                <h3 className='font-bold text-[1.7rem] text-center text-[white] px-[0.6rem] py-[0.2rem] rounded-[50%] primaryColor mb-[1rem] w-[fit-content]'>01</h3>
                                <h2 className='font-bold text-[1.45rem]  mb-[0rem] max-[479px]:text-[1.2rem]'>Website Design <br />Development and <br />Management</h2>
                                <p className='text-[1.2rem] max-[479px]:text-[1.1rem] max-[397px]:text-[1.03rem]'>Creating, maintaining and optimizing websites for performance and user experience.</p>
                            </div>
                            <div className='w-[40%] mb-[2rem]'>
                                <h3 className='font-bold text-[1.7rem] text-center text-[white] px-[0.6rem] py-[0.2rem] rounded-[50%] primaryColor mb-[1rem] w-[fit-content]'>02</h3>
                                <h2 className='font-bold text-[1.45rem]  mb-[0rem] max-[479px]:text-[1.2rem]'>Search Engine <br />Optimization (SEO) <br /> and Content Strategy</h2>
                                <p className='text-[1.2rem] max-[479px]:text-[1.1rem] max-[397px]:text-[1.03rem]'>Improving websites visibility on search engines through keyword optimization, content planing ang technical SEO</p>
                            </div>
                            <div className='w-[40%] mb-[2rem]'>
                                <h3 className='font-bold text-[1.7rem] text-center text-[white] px-[0.6rem] py-[0.2rem] rounded-[50%] primaryColor mb-[1rem] w-[fit-content]'>03</h3>
                                <h2 className='font-bold text-[1.45rem]  mb-[0rem] max-[479px]:text-[1.2rem]'>Digital Marketing Campaigns</h2>
                                <p className='text-[1.2rem] max-[479px]:text-[1.1rem] max-[397px]:text-[1.03rem]'>Managing social media, paid ads and influencer collaborations to boost brand awareness and engagement.</p>
                            </div>
                            <div className='w-[40%] mb-[2rem]'>
                                <h3 className='font-bold text-[1.7rem] text-center text-[white] px-[0.6rem] py-[0.2rem] rounded-[50%] primaryColor mb-[1rem] w-[fit-content]'>04</h3>
                                <h2 className='font-bold text-[1.45rem]  mb-[0rem] max-[479px]:text-[1.2rem]'>Online Reputation <br /> Management and <br />Customer <br />Engagement</h2>
                                <p className='text-[1.2rem] max-[479px]:text-[1.1rem] max-[397px]:text-[1.03rem]'>Monitoring brand perception, responding to customer feedback and maintaining a positive online presence</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%] mx-[auto] max-[1096px]:w-[50%] max-[956px]:w-[85%]'>
                        <h1 className='font-bold text-[1.7rem] mb-[1rem]'>What you will get from this service</h1>
                        <p className='text-[1.1rem] w-[60%] max-[609px]:w-[85%]'>Designed to enhance brand visibility and drive customer engagement through targeted digital strategies.</p>
                        <div className='my-[2rem] '>
                            <div className='flex items-start mt-[1rem]'>
                                <div className='w-[fit-content]'>
                                    <FaCheckCircle color='green' size={18} />
                                </div>
                                <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[1.1rem]'>Website Design <br />Development and Management</h3>
                            </div>
                            <div className='flex items-start mt-[3rem]'>
                                <div className='w-[fit-content]'>
                                    <FaCheckCircle color='green' size={18} />
                                </div>
                                <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[1.1rem]'>Search Engine Optimization and Content Strategy</h3>
                            </div>
                            <div className='flex items-start mt-[3rem]'>
                                <div className='w-[fit-content]'>
                                    <FaCheckCircle color='green' size={18} />
                                </div>
                                <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[1.1rem]'>Digital Marketing Campaigns</h3>
                            </div>
                            <div className='flex items-start mt-[3rem]'>
                                <div className='w-[fit-content]'>
                                    <FaCheckCircle color='green' size={18} />
                                </div>
                                <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[1.1rem]'>Online Reputation  Management and Customer Engagement</h3>
                            </div>
                            <div className='flex items-start mt-[3rem]'>
                                <div className='w-[fit-content]'>
                                    <FaCheckCircle color='green' size={18} />
                                </div>
                                <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[1.1rem]'>Google Business and Local Directory Integration</h3>
                            </div>
                            <div className='flex items-start mt-[3rem]'>
                                <div className='w-[fit-content]'>
                                    <FaCheckCircle color='green' size={18} />
                                </div>
                                <h3 className='ml-[0.4rem] mt-[-0.2rem] font-bold text-[1.1rem]'>Performance Analytics and Data-Driven Marketing Insights</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page