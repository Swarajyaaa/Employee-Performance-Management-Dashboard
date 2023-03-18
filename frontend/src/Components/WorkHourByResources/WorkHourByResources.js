import React from 'react'
import Bar_Chart3 from '../../Components/Charts/Bar_Chart3'


function WorkHourByResources({noOfHoursElapsedPerson}) {
  return (
    
    <div className='bg-white shadow-md rounded-md w-[full] '>
        <h6 className='font-semibold pt-4 pl-4 text-base'>Work Hours By Resources</h6>
        <div className='flex justify-center items-center pb-2'>
            <Bar_Chart3 width={480} height={360} data = {noOfHoursElapsedPerson} />
        </div>
        
    </div>
  )
}

export default WorkHourByResources