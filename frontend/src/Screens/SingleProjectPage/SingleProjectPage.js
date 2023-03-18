import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import ProjectTeam from '../../Components/ProjectTeam/ProjectTeam'

function SingleProjectPage() {
    const {id} = useParams();
    console.log(id)
  return (
    <div>
        <ProjectTeam id={id} />
    </div>
  )
}

export default SingleProjectPage