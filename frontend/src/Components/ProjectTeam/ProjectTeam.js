import React, {useState,useEffect} from "react";
import axios from 'axios'
import ProjectMember from "./ProjectMember";
const BASE_URL = 'http://localhost:5000/api'


function ProjectTeam({id}) {
    const [allMembers  , setAllMembers] = useState([]);
    useEffect(() => {
      const fetchAllMembers = async () => {
          const responseData = await axios.get(BASE_URL + '/projects/' + id +  '/membership');
          let allMembersData = responseData.data.memberships;
          allMembersData = allMembersData.filter(member => member.roles[0].id !== 8 && member.roles[0].id !== 9 )
          setAllMembers(allMembersData);
      }
      fetchAllMembers();
      return () => {
        
      }
    }, [])
  return (
    <div className="bg-white shadow-md rounded-md w-[300px] pb-4">
      <h6 className="font-semibold pt-4 pl-4 pb-2 text-base">Project Members</h6>
      <div className="projectMembers p-4 space-y-2 h-[78vh] overflow-y-auto">
         {allMembers.map(members => <ProjectMember key={members.id} member={members} />)}
      </div>
    </div>
  );
}

export default ProjectTeam;
