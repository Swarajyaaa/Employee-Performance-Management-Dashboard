import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";


function Bar_Chart3({width,height,data}) {
  return (
    <BarChart
      width={width}
      height={height}
      data={data}
      barSize= {20}
      layout = "vertical"
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="hours"  fill="#8884d8" />
    </BarChart>
  );
}

export default Bar_Chart3;
