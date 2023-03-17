import React from 'react'
import Pie_Needle from '../Charts/Pie_Needle'

function TaskCompletionRate() {
  return (
    <div className='bg-white shadow-md rounded-md w-[250px] '>
    <h6 className='font-semibold pt-2 pl-4 text-base pb-4'>Project Completion Rate</h6>
    <div className='flex justify-center items-center pb-4'>
        <Pie_Needle />
    </div>
    <div >
        <h5 className='text-center text-sm font-semibold pb-4'>52%</h5>
    </div>
    </div>
  )
}

export default TaskCompletionRate