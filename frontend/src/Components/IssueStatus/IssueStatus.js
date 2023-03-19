import React, {useState, useEffect} from 'react'
import Chart_Donut1 from '../Charts/Chart_Donut1'
import axios from 'axios'
const BASE_URL = 'http://localhost:5000/api'

function IssueStatus({setNoOfIssues,setNoOfIssuesResolved,chartData}) {
  
  const COLORS = ['#FFC300', '#0099CC', '#2ECC71', '#FF7f50','7f8c8d', '#E74C3C', '#FF5733',];


  return (
    <div className='bg-white shadow-md rounded-md w-[100%] '>
        <h6 className='font-semibold pt-4 pl-4 text-base'>Issues By Status</h6>
        <div className='flex justify-center items-center pb-2'>
            <Chart_Donut1 height={350} width={400} data = {chartData} COLORS = {COLORS} />
        </div>
        
    </div>
  )
}

export default IssueStatus