import React from 'react'
import './Temp.css'

function Temp() {
  return (

    <>
     <div className="bg-white p-2 w-[300px] shadow-md rounded-md">
        
        <h6 className="dropdownHeading text-[13px] font-[500] mb-[8px]">Projects</h6>
        <span class="anchor">Select Fruits</span>
    </div>

    <div id="list1" className="dropdown-check-list" tabIndex={100}>
    <span className="anchor">Select Project</span>
    <ul className="items">
      <li>
        <input type="checkbox" />
        Project 1
      </li>
      <li>
        <input type="checkbox" />
        Project 2
      </li>
      <li>
        <input type="checkbox" />
        Project 2
      </li>
    </ul>
  </div>
    </>

   
  
  )
}

export default Temp