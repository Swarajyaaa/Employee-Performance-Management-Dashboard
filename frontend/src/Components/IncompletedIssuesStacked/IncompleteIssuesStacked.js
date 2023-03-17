import React from 'react'
import Bar_Chart5 from '../Charts/Bar_Chart5'

function IncompleteIssuesStacked() {
  const data = [
    {
      name: "Project 1",
      low: 10,
      normal: 15,
      high: 4,
      urgent:2,
      immediate:1
    },
    {
      name: "Project 2",
      low: 15,
      normal: 5,
      high: 10,
      urgent:1,
      immediate:2
    },
    {
      name: "Project 3",
      low: 3,
      normal: 20,
      high:14,
      urgent:2,
      immediate:5
    },
    {
      name: "Project 4",
      low: 20,
      normal: 4,
      high: 8,
      urgent:0,
      immediate:10
    },
    {
      name: "Project 5",
      low: 2,
      normal: 10,
      high: 4,
      urgent:9,
      immediate:2
    },
    {
      name: "Project 6",
      low: 9,
      normal: 4,
      high: 2,
      urgent:5,
      immediate:2
    }
  ];
  return (
    <div className='bg-white shadow-md rounded-md w-[600px] '>
    <h6 className='font-semibold pt-4 pl-4 text-base pb-4'>Issues By Status</h6>
    <div className='flex justify-center items-center pb-4'>
        <Bar_Chart5 data={data}  />
    </div>
</div>
  )
}

export default IncompleteIssuesStacked