import React, {useEffect,useState} from 'react'
import { PieChart, Pie, Cell,Legend, Tooltip } from "recharts";



function Chart_Pie2() {
  const data = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 }
];
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        data={data}
        cx={200}
        cy={200}
        innerRadius={40}
        outerRadius={80}
        fill="#82ca9d"
        label
      />
      <Tooltip />
    </PieChart>
  )
}

export default Chart_Pie2