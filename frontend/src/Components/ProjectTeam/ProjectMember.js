import React from 'react'

function ProjectMember({member,setIsOpen,setClickedUserObject}) {
  return (
    <div onClick = {() => {
      setIsOpen(true)
      setClickedUserObject(member);
    }} className="projectMember cursor-pointer rounded-md p-2 flex items-center bg-gray-50">
          <img
            className="h-10 w-10 mr-4 rounded-full object-cover"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
          <div>
            <h2 className="text-md font-semibold text-gray-900 ">{member.user.name}</h2>
            <p className="text-gray-700 text-sm">{member.roles[0].name}</p>
          </div>
    </div>
  )
}

export default ProjectMember