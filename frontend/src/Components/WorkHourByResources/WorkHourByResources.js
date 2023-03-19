import React from 'react'
import Bar_Chart3 from '../../Components/Charts/Bar_Chart3'


function WorkHourByResources({noOfHoursElapsedPerson}) {
  return (
    
    <div className='bg-white shadow-md h-[410px] rounded-md w-[full] '>
        <h6 className='font-semibold pt-4 pl-4 text-base'>Work Hours By Resources</h6>
        <div className='flex justify-center items-center pb-2'>
         {noOfHoursElapsedPerson.length === 0 ? <p className='mt-32 w-[250px] text-center'>No time entries data available to draw chart</p> : <Bar_Chart3 width={480} height={360} data = {noOfHoursElapsedPerson} />}
        </div>
        
    </div>
  )
}

export default WorkHourByResources