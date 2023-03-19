import {Link,NavLink, useNavigate } from 'react-router-dom'
import React,{useState,useEffect} from 'react'

function Sidebar() {
    const normalClasses = 'p-[0.5vw] font-bold flex space-x-[0.625vw] items-center text-[#717885]'
    const activeClasses = ' bg-slate-200 rounded-lg'
    const [isAdmin, setIsAdmin] = useState(true);
    
    return (
      <div className='hidden z-20 px-[1.5vw] py-[1vw] fixed top-0 left-0 h-screen bg-white border-r w-[16.87vw] md:block'>
        <Link to='/' reloadDocument className='flex space-x-[0.4vw]'><img src="Lumiqicon.png" className='w-[2vw]  mt-[0.25vw] mr-[0.625vw]' alt="" /><h1 className='text-royalBlue font-bold text-[1.87vw]'>LUMIQ</h1></Link>
        <div className='mt-[2vw] space-y-[1vw]'>
        <NavLink to="/projects" className={({isActive} ) => isActive ? normalClasses + activeClasses : normalClasses}><img src="" className='w-[1.5vw]' alt="" /><span className='text-[1vw]'>All Projects</span></NavLink>
          <NavLink to="/" className={({isActive} ) => isActive ? normalClasses + activeClasses : normalClasses}><img src="" className='w-[1.5vw]' alt="" /><span className='text-[1vw]'>Projects Overview</span></NavLink>
        </div>
        <div className='absolute bottom-0 left-0 px-[1.5vw] border-t w-full py-[1vw]'>
          <a href="#" className='p-[0.5vw] font-bold  flex space-x-[0.625vw] items-center text-[#717885]'><img src="" className='w-[1.5vw]' alt="" /><span className='text-[1vw]'>Settings</span></a>
        </div>
      </div>
    )
  }
  
  export default Sidebar