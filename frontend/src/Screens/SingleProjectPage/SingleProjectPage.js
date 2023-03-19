import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import IssueStatus from "../../Components/IssueStatus/IssueStatus";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ProjectDetailBox from "../../Components/ProjectDetailBox/ProjectDetailBox";
import ProjectTeam from "../../Components/ProjectTeam/ProjectTeam";
import WorkHourByResources from "../../Components/WorkHourByResources/WorkHourByResources";
import UserModal from "../../Components/UserModal/UserModal";

const BASE_URL = "http://localhost:5000/api";

function SingleProjectPage({ data }) {
  const [project, setProject] = useState({});
  const [noOfHoursElapsedPerson, setNoOfHoursElapsedPerson] = useState({})
  const [chartData, setChartData] = useState([]);
  const [noOfIssues, setNoOfIssues] = useState(0);
  const [noOfIssuesResolved, setNoOfIssuesResolved] = useState(0)
  const [noOfHoursElapsed, setNoOfHoursElapsed] = useState(0);
  const [estimatedRemainingHours, setEstimatedRemainingHours] = useState(0);
  const [projectCompletionPercentage, setProjectCompletionPercentage] = useState(0)
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [clickedUserObject, setClickedUserObject] = useState({});
  const [loader, setLoader] = useState(true)
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const fetchProject = async () => {
      setLoader(true);
      const responseData = await axios.get(BASE_URL + "/projects/" + id);
      const projectData = responseData.data.project;
      setProject(projectData);
    };
    fetchProject();
    const fetchTotalHours = async () => {
      // id = project id here
      const responseData = await axios.get(
        BASE_URL + "/totalHoursByProject/" + id
      );
      console.log(responseData)
      const timeEntriesData = responseData.data;
      let hours = 0;
      let hoursByPerson = {};
      timeEntriesData.forEach(time_entry => {
        hours += time_entry.hours;

        if (!hoursByPerson[time_entry.user.id]) {
          hoursByPerson[time_entry.user.id] = { name: time_entry.user.name, hours: 0 };
        }
      
        hoursByPerson[time_entry.user.id].hours += time_entry.hours;
      })

      const tempData = [];
      for (let key in hoursByPerson){
        tempData.push(hoursByPerson[key]);
      }

      setNoOfHoursElapsedPerson(tempData);
      setNoOfHoursElapsed(hours);
      setLoader(false)
    };
    fetchTotalHours();
    const fetchAllIssues = async () => {
      // here id is project id
       const responseData = await axios.get(BASE_URL + '/issues/' + id);
       const total_count = responseData.data.total_count;
       setNoOfIssues(total_count)
       let allIssuesData = responseData.data.issues;
       const obj = {
         1:{"name":"New","count":0},
         2:{"name":"In Progress","count":0},
         3:{"name":"Resolved","count":0},
         4:{"name":"Feedback","count":0},
         5:{"name":"Closed","count":0},
         6:{"name":"Rejected","count":0},
         7:{"name":"Under Review","count":0},
       }
       allIssuesData.forEach(issue  => {
         obj[issue.status.id].count++;
       });
       setNoOfIssuesResolved(obj[3].count);
       const tempData = [];
       for (let key in obj){
         tempData.push(obj[key]);
       }
       setChartData(tempData);
       setLoader(false);
       let hoursPerIssue = noOfIssuesResolved != 0 ? parseFloat(noOfHoursElapsed / noOfIssuesResolved ) : 0;
       console.log(hoursPerIssue);
       let eta = noOfIssues * hoursPerIssue;
       let remainingTime = parseInt(eta - noOfHoursElapsed);
       setEstimatedRemainingHours(remainingTime)
       let projectCompletionPercentage = noOfIssues != 0 ? Math.round(parseFloat(noOfIssuesResolved / noOfIssues) * 100) : 0;
       console.log(projectCompletionPercentage)
       setProjectCompletionPercentage(projectCompletionPercentage);
   }
   fetchAllIssues();

    return () => {};
  }, []);

  return (
    <>
    {loader ? (
      <div className="w-full h-[85vh] flex justify-center items-center">
        <img src="http://localhost:3000/loader.svg" style={{
          width:"100px"
        }} alt="" />
      </div>
    ) : (<div className="flex items-start justify-between">
    <div className="space-y-[1vw] w-[32vw]">
      <ProjectDetailBox project={project} />
      <div className="flex space-x-[1vw] ">
        <div className="bg-white shadow-md rounded-[0.375vw] flex-1">
          <h6 className="font-semibold pt-[0.5vw] pl-[1vw] text-[1vw]">Time Elapsed</h6>
          <h1 className="text-[3.4vw] text-center mt-[-0.625vw] text-[#FFC300]">
            {noOfHoursElapsed}
            <span className="text-[1vw]"> Hrs.</span>
          </h1>
        </div>
        <div className="bg-white shadow-md rounded-[0.375vw]  flex-1">
          <h6 className="font-semibold pt-[0.5vw] pl-[1vw] text-[1vw]">Total Issues</h6>
          <h1 className="text-[3.4vw] text-center mt-[-0.625vw] text-[#0099CC]">
            {noOfIssues}
          </h1>
        </div>
        <div className="bg-white shadow-md rounded-[0.375vw] flex-1">
          <h6 className="font-semibold  pt-[0.5vw] pl-[1vw] text-[1vw]">
            Total Resolved
          </h6>
          <h1 className="text-[3.4vw] text-center mt-[-0.625vw] text-[#2ECC71]">
            {noOfIssuesResolved}
          </h1>
        </div>
      </div>
        <WorkHourByResources noOfHoursElapsedPerson = {noOfHoursElapsedPerson} />
    </div>
    <div className="space-y-4 w-[26vw]">
      <div className="p-4 pt-2 bg-white rounded-md shadow-md w-[100%] h-[240px]">
        <h6 className='font-semibold  text-base'>Project Predictions</h6>
        <h3 className='text-[#413e89] text-[12px]'></h3>
        <h3 className='text-[12px] mt-2'>An estimate of <span className="text-xl text-[#0099CC]">{estimatedRemainingHours} - {estimatedRemainingHours + 50}</span> hours are required more to complete this project.</h3>
        <h3 className='text-[12px] mt-4'>Around <span className="text-xl text-[#8ed567]"> {projectCompletionPercentage} - {projectCompletionPercentage + 10} % </span> of project is completed</h3> 
      </div>
      <IssueStatus chartData={chartData}  />
    </div>
    <div className="w-[20vw]">
      <ProjectTeam setClickedUserObject = {setClickedUserObject} id={id} setIsOpen = {setIsOpen} />
    </div>
    {isOpen && (<UserModal projectDate = {project.created_on} clickedUserObject = {clickedUserObject} toggleModal = {toggleModal} setIsOpen = {setIsOpen} />) }
  </div>)}
      
    </>
  );
}

export default SingleProjectPage;
