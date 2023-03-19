import React from 'react'
import {Link} from 'react-router-dom'
function ProjectCard({project}) {
  return (
    <Link to={"/projects/" + project.id} style = {{
        display:"block"
    }} className="flex-1" >
    <div className='bg-white h-[150px] shadow-md rounded-md p-4 cursor-pointer'>
         <h2 className="text-xl font-bold mb-2">{project.name}</h2>
         <p className="text-gray-600 mb-2">Identifier : {project.identifier}</p>
         <p className="text-gray-600">Started on {new Date(project.created_on).toLocaleDateString()}</p>
    </div>
    </Link>
  )
}

export default ProjectCard