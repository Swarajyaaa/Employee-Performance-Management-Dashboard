import React from 'react'

function ProjectDetailBox({project}) {
  return (
    <div className='bg-white p-4 shadow-md rounded-md'>
        <h2 className="text-[17px] font-bold mb-2">{project.name}</h2>
        <p className="text-gray-600 mb-2">Identifier : {project.identifier}</p>
         <p className="text-gray-600">Started on {new Date(project.created_on).toLocaleDateString()}</p>
    </div>
  )
}

export default ProjectDetailBox