import React, {useState} from 'react'

function MultiSelectDropdown() {
    const [showDropDownItems, setShowDropDownItems] = useState(false)
    const [selectedOptions, setSelectedOptions] = useState([])
    const toggleDropdownItems = () => {
        setShowDropDownItems(!showDropDownItems)
    }
    const manageSelectedOptions = (e) => {
        const clickedElement = e.target;
        if (e.target.checked){
            setSelectedOptions([...selectedOptions,e.target.value])
        }else{
            const newData = selectedOptions.filter((value) => value !== e.target.value);
            setSelectedOptions(newData);
        }
        
    }
  return (
    <>
    <div className='bg-white shadow-md p-2 w-[300px] rounded-md'>  
        <h6 className="dropdownHeading text-[13px] font-[500] mb-[8px]">Projects</h6>
        <div className='border flex justify-between items-center cursor-pointer p-[4px] overflow-hidden' onClick={toggleDropdownItems}>
            <p>{selectedOptions.length == 0 ? 'Select Option' : selectedOptions.join(',')}</p>
            <button>&gt;</button>
        </div>
    </div>
     {showDropDownItems && (
        <div className='dropdownItems shadow-md rounded-md p-4 mt-[8px] bg-white w-[300px] '>  
            <div className='mb-2 dropdownItem'><input type="checkbox" value={"Project1"} onChange={manageSelectedOptions} name="" id="" className='mr-[5px]' /><span>Project 1</span></div>
            <div className='mb-2 dropdownItem'><input type="checkbox" value={"Project2"} onChange={manageSelectedOptions} name="" id="" className='mr-[5px]' /><span>Project 2</span></div>
            <div className='mb-2 dropdownItem'><input type="checkbox" value={"Project3"} onChange={manageSelectedOptions} name="" id="" className='mr-[5px]' /><span>Project 3</span></div>
            <div className='mb-2 dropdownItem'><input type="checkbox" value={"Project4"} onChange={manageSelectedOptions} name="" id="" className='mr-[5px]' /><span>Project 4</span></div>
            <div className='mb-2 dropdownItem'><input type="checkbox" value={"Project3"} onChange={manageSelectedOptions} name="" id="" className='mr-[5px]' /><span>Project 3</span></div>
            <div className='mb-2 dropdownItem'><input type="checkbox" value={"Project4"} onChange={manageSelectedOptions} name="" id="" className='mr-[5px]' /><span>Project 4</span></div>
        </div>
    )}
    </>
  )
}

export default MultiSelectDropdown