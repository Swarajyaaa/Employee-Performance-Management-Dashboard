import React, { useState } from "react";

const Dropdown = ({ heading, onSelect }) => {
  return (
    <div className="bg-white p-2 w-[300px] shadow-md rounded-md">
        
        <h6 className="dropdownHeading text-[13px] font-[500] mb-[8px]">{heading}</h6>
        <select name="" id="" className="w-[100%] border rounded-[4px] py-[6px] text-[12px] px-[4px] focus:outline-none">
        <option value="Project 1">  Project 1</option>
            <option value="Project 1"> <input type="checkbox" name="" id="" />Project 2</option>
            <option value="Project 1">Project 3</option>
        </select>
    </div>
  );
};

export default Dropdown;


