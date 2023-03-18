import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Topbar from './Components/Topbar/Topbar'

function Layout({children}) {
  return (
    <React.Fragment>
      <Sidebar/>
      <Topbar/>
      <div className='p-[1vw] md:ml-[16.87vw] relative'>
        {children}
      </div>
    </React.Fragment>
  )
}

export default React.memo(Layout)