import React from 'react'

const MileStone = () => {
    return (
        <div className='w-[75%] relative bottom-[-7rem] bg-[white] sh pb-[2rem] rounded-[0.5rem] mx-[auto] border-[1px] border-[#e0dddd] max-[1008px]:w-[90%] max-[733px]:w-[95%] max-[500px]:bottom-[-6rem]  max-[431px]:pb-[0.8rem] max-[431px]:bottom-[-4.5rem]' >
            <h2 className='font-medium text-[1.7rem] text-center pt-[1rem] mb-[1.3rem] max-[500px]:mb-[0.8rem] max-[500px]:pt-[0.7rem] max-[431px]:text-[1.5rem]  max-[431px]:pt-[0.5rem] max-[431px]:mb-[0.6rem]'>Our MileStones</h2>
            <div className='flex items-center justify-around'>
                <div className='text-center'>
                    <h3 className='font-bold text-[3rem] mb-[-0.5rem] max-[635px]:text-[2.4rem] max-[500px]:text-[2rem] max-[431px]:text-[1.6rem]'>22k</h3>
                    <p className='max-[431px]:text-[0.9rem] mt-[0.4rem]'>Satisfied<br />Clients</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-bold text-[3rem] mb-[-0.5rem] max-[635px]:text-[2.4rem] max-[500px]:text-[2rem] max-[431px]:text-[1.6rem]'>15k</h3>
                    <p className='max-[431px]:text-[0.9rem] mt-[0.4rem]'>Completed <br />Jobs</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-bold text-[3rem] mb-[-0.5rem] max-[635px]:text-[2.4rem] max-[500px]:text-[2rem] max-[431px]:text-[1.6rem]'>121</h3>
                    <p className='max-[431px]:text-[0.9rem] mt-[0.4rem]'>Skilled <br />Employees</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-bold text-[3rem] mb-[-0.5rem] max-[635px]:text-[2.4rem] max-[500px]:text-[2rem] max-[431px]:text-[1.6rem]'>15</h3>
                    <p className='max-[431px]:text-[0.9rem] mt-[0.4rem]'>Notable <br />Awards</p>
                </div>
            </div>
        </div>
    )
}

export default MileStone