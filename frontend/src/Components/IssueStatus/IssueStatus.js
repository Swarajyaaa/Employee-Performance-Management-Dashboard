import React from 'react'
import Chart_Donut1 from '../Charts/Chart_Donut1'

function IssueStatus() {
    const data = [
        { name: 'New', value: 400 },
        { name: 'In Progress', value: 300 },
        { name: 'Under Review', value: 300 },
        { name: 'Feedback', value: 200 },
        { name: 'Resolved', value: 300 },
        { name: 'Rejected', value: 300 },
        { name: 'Closed', value: 200 }
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#0088FE', '#00C49F', '#FFBB28',];
  return (
    <div className='bg-white shadow-md rounded-md w-[500px] '>
        <h6 className='font-semibold pt-4 pl-4 text-base'>Issues By Status</h6>
        <div className='flex justify-center items-center pb-2'>
            <Chart_Donut1 height={350} data = {data} COLORS = {COLORS} />
        </div>
        
    </div>
  )
}

export default IssueStatus