import React from 'react'
import {Link} from 'react-router-dom'
function ProjectCard({project}) {
  return (
    <Link to={"/projects/" + project.id} style = {{
        display:"block"
    }} className="flex-1" >
    <div className='bg-white  h-[200px] shadow-md rounded-md p-4 cursor-pointer'>
         <h2 class="text-2xl font-bold mb-2">{project.name}</h2>
         <p class="text-gray-600 mb-2">{project.identifier}</p>
         <p class="text-gray-600">Started on {new Date(project.created_on).toLocaleDateString()}</p>
    </div>
    </Link>
  )
}

export default ProjectCard