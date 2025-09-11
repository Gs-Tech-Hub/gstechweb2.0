import React from 'react'

const MileStone = () => {
    return (
        <div className='w-[75%] relative bottom-[-7rem] bg-[white] sh  pb-[2rem] rounded-[0.5rem] mx-[auto] border-[1px] border-[#e0dddd]' >
            <h2 className='font-medium text-[1.7rem] text-center pt-[1rem] mb-[1.3rem]'>Our MileStones</h2>
            <div className='flex items-center justify-around'>
                <div className='text-center'>
                    <h3 className='font-bold text-[3rem] mb-[-0.5rem]'>22k</h3>
                    <p>Satisfied<br />Clients</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-bold text-[3rem] mb-[-0.5rem]'>15k</h3>
                    <p>Completed <br />Jobs</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-bold text-[3rem] mb-[-0.5rem]'>121</h3>
                    <p>Skilled <br />Employees</p>
                </div>
                <div className='text-center'>
                    <h3 className='font-bold text-[3rem] mb-[-0.5rem]'>15</h3>
                    <p>Notable <br />Awards</p>
                </div>
            </div>
        </div>
    )
}

export default MileStone