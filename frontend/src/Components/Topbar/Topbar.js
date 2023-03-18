import React from 'react'

function Topbar() {
  return (
    <div className='flex sticky top-0 z-10 justify-between items-center md:justify-end px-[1vw] py-[1vw] h-[4vw] bg-white border-b shadow-sm w-full'>
      <a href="#" className='flex space-x-[0.3125vw] md:hidden'><img src="" className='w-[2vw]  mt-[0.25vw]' alt="" /><h1 className='text-royalBlue font-bold text-[1.87vw]'>SalaryFlow</h1></a>
      <div className='flex items-center justify-end space-x-[0.5vw]'>
        <a href="#"><img src="" className='rounded-full w-[2.68vw] h-[2.68vw] shadow-sm border border-[#717885]' alt="" /></a>
      </div>
      
    </div>
  )
}

export default Topbar