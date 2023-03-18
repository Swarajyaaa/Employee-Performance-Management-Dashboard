import React, {useState, useEffect} from 'react'
import Chart_Donut1 from '../Charts/Chart_Donut1'
import axios from 'axios'
const BASE_URL = 'http://localhost:5000/api'

function IssueStatus({id,setNoOfIssues}) {
   const [chartData, setChartData] = useState([]);
    const COLORS = ['#FFC300', '#0099CC', '#2ECC71', '#FF7f50','7f8c8d', '#E74C3C', '#FF5733',];
    const renderChartData = [];
  const [allIssues  , setAllIssues] = useState([]);
  useEffect(() => {
      const fetchAllIssues = async () => {
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
          const tempData = [];
          for (let key in obj){
            tempData.push(obj[key]);
          }
          setChartData(tempData);
      }
      fetchAllIssues();
      return () => {
        
      }
    }, [])

  return (
    <div className='bg-white shadow-md rounded-md w-[400px] '>
        <h6 className='font-semibold pt-4 pl-4 text-base'>Issues By Status</h6>
        <div className='flex justify-center items-center pb-2'>
            <Chart_Donut1 height={350} width={400} data = {chartData} COLORS = {COLORS} />
        </div>
        
    </div>
  )
}

export default IssueStatus