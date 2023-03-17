import React from 'react'
import Bar_Chart4 from '../Charts/Bar_Chart4'


function CompareTaskGraph() {
    const data = [
        {
          name: "HDFC Ergo",
          completed: 45,
          total : 60
        },
        {
            name: "Project 2",
            completed: 40,
            total : 80
          },
          {
            name: "Project 3",
            completed: 30,
            total : 100
          },
          {
            name: "Project 4",
            completed: 60,
            total : 70
          },
          {
            name: "Project 5",
            completed: 10,
            total : 50
          },
          {
            name: "Project 6",
            completed: 20,
            total : 40
          },
        
      ];
  return (
    <div className='bg-white shadow-md rounded-md w-[600px] '>
        <h6 className='font-semibold pt-4 pl-4 text-base pb-4'>Planned vs Completed Task Based on Projects</h6>
        <div className='flex justify-center items-center pb-2'>
            <Bar_Chart4 data={data} height={350} />
        </div>
    </div>
  )
}

export default CompareTaskGraph