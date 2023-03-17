import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Topbar from './Components/Topbar/Topbar'

function Layout({children}) {
  return (
    <React.Fragment>
      <Sidebar/>
      <Topbar/>
      <div className='p-4 md:ml-[270px] relative'>
        {children}
      </div>
    </React.Fragment>
  )
}

export default React.memo(Layout)