import React,{useEffect,useState} from 'react'
import axios from 'axios'
import CompareTaskGraph from '../../Components/CompareTaskGraph/CompareTaskGraph';
import IssueStatus from '../../Components/IssueStatus/IssueStatus'
import IncompleteIssuesStacked from '../../Components/IncompletedIssuesStacked/IncompleteIssuesStacked'
import TaskCompletionRate from '../../Components/TaskCompletionRate/TaskCompletionRate'
const BASE_URL = 'http://localhost:5000/api'


function Homepage() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(BASE_URL + '/pvct');
      console.log(data);
    }
    fetchData();
  
    return () => {
      
    }
  }, [])
  
  return (
    <>    
      
      <div className='flex items-end space-x-2'>
        <div className='space-y-2'>
          <CompareTaskGraph />
          <IncompleteIssuesStacked />
        </div>
        <div className='space-y-2'>
          <div className='flex space-x-2' >
          <TaskCompletionRate />
          {/* <TaskCompletionRate /> */}
          </div>
        
        <IssueStatus chartData={[
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]} />
        </div>
        
      </div>
     
      
        
    </>
  );
}

export default Homepage;
