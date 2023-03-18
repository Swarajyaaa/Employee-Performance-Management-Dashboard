import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className='bg-white shadow-md  rounded-md w-[200px] p-4 border'>
          <p className='text-black'>{payload[0].name + " : " + payload[0].value + ' Hrs'}</p>
      </div>
    );
  }

  return null;
};

function Chart_Pie({width = 200 , height = 200 , data = []}) {
  return (
        <PieChart width={width} height={height}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}      
          </Pie>
          <Legend />
          <Tooltip content={<CustomTooltip />} />
          
        </PieChart>
  )
}

export default Chart_Pie;