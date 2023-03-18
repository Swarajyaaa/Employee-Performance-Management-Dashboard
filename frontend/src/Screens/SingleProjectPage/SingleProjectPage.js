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
  const [noOfIssues, setNoOfIssues] = useState(0);
  const [noOfHoursElapsed, setNoOfHoursElapsed] = useState(0);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };



  useEffect(() => {
    const fetchProject = async () => {
      const responseData = await axios.get(BASE_URL + "/projects/" + id);
      const projectData = responseData.data.project;
      setProject(projectData);
    };
    fetchProject();

    const fetchTotalHours = async () => {
      const responseData = await axios.get(
        BASE_URL + "/totalHoursByProject/" + id
      );
      const timeEntriesData = responseData.data.time_entries;
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
    };
    fetchTotalHours();
    return () => {};
  }, []);

  return (
    <div className="flex items-start justify-between">
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
            <h1 className="text-[3.4vw] text-center mt-[-0.625vw] text-[#2ECC71]">
              {noOfIssues}
            </h1>
          </div>
          <div className="bg-white shadow-md rounded-[0.375vw] flex-1">
            <h6 className="font-semibold  pt-[0.5vw] pl-[1vw] text-[1vw]">
              Total Blockers
            </h6>
            <h1 className="text-[3.4vw] text-center mt-[-0.625vw] text-[#E74C3C]">
              {noOfIssues}
            </h1>
          </div>
        </div>
        <WorkHourByResources noOfHoursElapsedPerson = {noOfHoursElapsedPerson} />
      </div>
      <div className="space-y-4 w-[26vw]">
        <div className="bg-white rounded-md shadow-md w-[100%] h-[240px]"></div>
        <IssueStatus id={id} setNoOfIssues={setNoOfIssues} />
      </div>
      <div className="w-[20vw]">
        <ProjectTeam id={id} setIsOpen = {setIsOpen} />
      </div>
      {isOpen && (<UserModal toggleModal = {toggleModal} setIsOpen = {setIsOpen} />) }
    </div>
  );
}

export default SingleProjectPage;
