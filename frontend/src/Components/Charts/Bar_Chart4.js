import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend
  } from "recharts";

function Bar_Chart4({data,height=400}) {
  return (
    <BarChart
      width={600}
      height={height}
      data={data}
      layout = "vertical"
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <YAxis dataKey="name" type="category" />
      <XAxis type="number" />
      <Tooltip />
      <Legend />
      <Bar dataKey="total" fill="#8884d8" />
      <Bar dataKey="completed" fill="#82ca9d" />
    </BarChart>
  );
}

export default Bar_Chart4;
