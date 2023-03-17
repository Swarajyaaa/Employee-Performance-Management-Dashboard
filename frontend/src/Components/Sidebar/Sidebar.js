import {Link,NavLink, useNavigate } from 'react-router-dom'
import React,{useState,useEffect} from 'react'

function Sidebar() {
    const normalClasses = 'p-2 font-bold flex space-x-[10px] items-center text-[#717885]'
    const activeClasses = ' bg-slate-200 rounded-lg'
    const [isAdmin, setIsAdmin] = useState(true);
    
    return (
      <div className='hidden z-20 px-6 py-4 fixed top-0 left-0 h-screen bg-white border-r w-[270px] md:block'>
        <Link to='/' reloadDocument className='flex space-x-[5px]'><img src="Lumiqicon.png" className='w-8  mt-[4px] mr-[10px]' alt="" /><h1 className='text-royalBlue font-bold text-3xl'>LUMIQ</h1></Link>
        <div className='mt-8 space-y-4'>
          <NavLink to="/" className={({isActive} ) => isActive ? normalClasses + activeClasses : normalClasses}><img src="homeIcon.svg" className='w-6' alt="" /><span className='text-base'>Dashboard</span></NavLink>
          {isAdmin && <NavLink to="/departments" className={({isActive} ) => isActive ? normalClasses + activeClasses : normalClasses}><img src="department.svg" className='w-6' alt="" /><span className='text-base'>Departments</span></NavLink>}
          {isAdmin && <NavLink to="/salary" className={({isActive} ) => isActive ? normalClasses + activeClasses : normalClasses}><img src="dollar.svg" className='w-6' alt="" /><span className='text-base'>Pay Salary</span></NavLink>}
          <button onClick={() => {

          }} className={normalClasses}><img src="logout.svg" className='w-6' alt="" /><span className='text-base'>Logout</span></button>
        </div>
        <div className='absolute bottom-0 left-0 px-6 border-t w-full py-4'>
          <a href="#" className='p-2 font-bold  flex space-x-[10px] items-center text-[#717885]'><img src="settings.svg" className='w-6' alt="" /><span className='text-base'>Settings</span></a>
        </div>
      </div>
    )
  }
  
  export default Sidebar