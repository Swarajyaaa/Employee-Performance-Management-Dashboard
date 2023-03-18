import React, {useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom'
import axios from 'axios'
import IssueStatus from '../../Components/IssueStatus/IssueStatus';
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import ProjectDetailBox from '../../Components/ProjectDetailBox/ProjectDetailBox';
import ProjectTeam from '../../Components/ProjectTeam/ProjectTeam'
const BASE_URL = 'http://localhost:5000/api'

function SingleProjectPage({data}) {
    const [project, setProject] = useState({})
    const {id} = useParams();
    useEffect(() => {
      const fetchProject = async () => {
        const responseData = await axios.get(BASE_URL + '/projects/' + id);
        const projectData = responseData.data.project;
        setProject(projectData);
      }
     fetchProject();
  
     return () => {
        
      }
    }, [])
    
  return (
    <div className='flex items-start justify-between'>
      <div>
        <ProjectDetailBox project = {project} />  
        <div className='flex space-x-4 mt-4'>
          <div className='bg-white shadow-md rounded-md  flex-1'>
            <h6 className='font-semibold pt-2 pl-4 text-base'>Total Issues</h6>
            <h1 className='text-[70px] text-center mt-[-10px] text-[#2ECC71]'>52</h1>
          </div>
          <div className='bg-white shadow-md rounded-md  flex-1'>
            <h6 className='font-semibold pt-2 pl-4 text-base'>Time Elapsed</h6>
            <h1 className='text-[70px] text-center mt-[-10px] text-[#FFC300]'>22<span className='text-base'> Hrs.</span></h1>
          </div>
        </div>
      </div>
        
        <IssueStatus id= {id} />
        <ProjectTeam id={id} />
    </div>
  )
}

export default SingleProjectPage