import React from 'react'
import { PieChart, Pie, Cell,Legend, Tooltip } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#00C49F','#FFBB28'];

function Chart_Pie1() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
      <Tooltip />
    </PieChart>
  )
}

export default Chart_Pie1