import React, {useState,useEffect} from 'react'
import { useParams,useLocation } from 'react-router-dom'
import axios from 'axios'
import IssueStatus from '../../Components/IssueStatus/IssueStatus';
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import ProjectDetailBox from '../../Components/ProjectDetailBox/ProjectDetailBox';
import ProjectTeam from '../../Components/ProjectTeam/ProjectTeam'
import WorkHourByResources from '../../Components/WorkHourByResources/WorkHourByResources';

const BASE_URL = 'http://localhost:5000/api'


function SingleProjectPage({data}) {
    const [project, setProject] = useState({})
    const [noOfIssues, setNoOfIssues] = useState(0)
    const [noOfHoursElapsed, setNoOfHoursElapsed] = useState(0)
    const {id} = useParams();
    useEffect(() => {
      const fetchProject = async () => {
        const responseData = await axios.get(BASE_URL + '/projects/' + id);
        const projectData = responseData.data.project;
        setProject(projectData);
      }
     fetchProject();
     
     const fetchTotalHours = async () => {
      const responseData = await axios.get(BASE_URL + '/totalHoursByProject/' + id);
      const timeEntriesData = responseData.data.time_entries;
      let hours = 0;
      timeEntriesData.forEach(time_entry => {
        hours += time_entry.hours;
      })
      setNoOfHoursElapsed(hours);
     }
     fetchTotalHours();
     return () => {
        
      }
    }, [])
    
  return (
    <div className='flex items-start justify-between'>
      <div className='space-y-4'>
  
            <ProjectDetailBox project = {project} />
  
          <div className='flex space-x-4 '>
          <div className='bg-white shadow-md rounded-md  flex-1'>
            <h6 className='font-semibold pt-2 pl-4 text-base'>Time Elapsed</h6>
            <h1 className='text-[55px] text-center mt-[-10px] text-[#FFC300]'>{noOfHoursElapsed}<span className='text-base'> Hrs.</span></h1>
          </div>
          <div className='bg-white shadow-md rounded-md  flex-1'>
            <h6 className='font-semibold pt-2 pl-4 text-base'>Total Issues</h6>
            <h1 className='text-[55px] text-center mt-[-10px] text-[#2ECC71]'>{noOfIssues}</h1>
          </div>
          <div className='bg-white shadow-md rounded-md  flex-1'>
            <h6 className='font-semibold pt-2 pl-4 text-base'>Total Blockers</h6>
            <h1 className='text-[55px] text-center mt-[-10px] text-[#E74C3C]'>{noOfIssues}</h1>
          </div>
          
        </div>
        <WorkHourByResources />
      </div>
        <div className='space-y-4'>
          <div className='bg-white rounded-md shadow-md w-[100%] h-[240px]'>

          </div>
          <IssueStatus id= {id} setNoOfIssues = {setNoOfIssues} />
        </div>
        
        <ProjectTeam id={id} />

    </div>
  )
}

export default SingleProjectPage