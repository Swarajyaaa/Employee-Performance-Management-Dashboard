import React, {useState,useEffect} from 'react'
import axios from 'axios'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
const BASE_URL = 'http://localhost:5000/api'

function AllProjectsPage() {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    const fetchAllProjects = async () => {
        const responseData = await axios.get(BASE_URL + '/projects');
        const allProjectsData = responseData.data.projects;
        setAllProjects(allProjectsData.slice(0,9));
      }
    fetchAllProjects();
    
    return () => {
      
    }
  }, [])
    

  return (
    <div className='space-y-4'>
        <div className="row flex space-x-4 ">
            {allProjects.slice(0,3).map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
        <div className="row flex space-x-4 ">
            {allProjects.slice(3,6).map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
        <div className="row flex space-x-4 ">
        {allProjects.slice(6,9).map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
    </div>
  )
}

export default AllProjectsPage