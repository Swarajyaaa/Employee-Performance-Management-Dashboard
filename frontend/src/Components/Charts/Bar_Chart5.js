import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Bar_Chart5({data}) {
    
  return (
    <div>
        <BarChart
          width={600}
          height={200}
          data={data}
          margin={{
            right:"20"
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="low" stackId="a" barSize={40} fill="#8884d8" />
          <Bar dataKey="normal" stackId="a" fill="#0088FE" />
          <Bar dataKey="high" stackId="a" fill="#00C49F" />
          <Bar dataKey="urgent" stackId="a" fill="#FFBB28" />
          <Bar dataKey="immediate" stackId="a" fill="#FF8042" />
        </BarChart>
    </div>
  )
}

export default Bar_Chart5