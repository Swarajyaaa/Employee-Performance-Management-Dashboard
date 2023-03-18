import React from 'react'

function ProjectDetailBox({project}) {
  return (
    <div className='bg-white p-[1vw] shadow-md rounded-[0.375vw]'>
        <h2 className="text-[1.25vw] font-bold mb-[0.5vw]">{project.name}</h2>
        <p className="text-gray-600 text-[1vw] mb-[0.5vw">Identifier : {project.identifier}</p>
         <p className="text-gray-600 text-[1vw]">Started on {new Date(project.created_on).toLocaleDateString()}</p>
    </div>
  )
}

export default ProjectDetailBox