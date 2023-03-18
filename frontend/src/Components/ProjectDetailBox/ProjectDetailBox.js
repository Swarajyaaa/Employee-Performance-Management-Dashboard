import React from 'react'

function ProjectDetailBox({project}) {
    console.log(project)
  return (
    <div className='bg-white p-4 w-[400px] shadow-md rounded-md'>
        <h2 class="text-xl font-bold mb-2">{project.name}</h2>
        <p class="text-gray-600 mb-2">Identifier : {project.identifier}</p>
         <p class="text-gray-600">Started on {new Date(project.created_on).toLocaleDateString()}</p>
    </div>
  )
}

export default ProjectDetailBox