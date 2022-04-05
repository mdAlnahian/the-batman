import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const GraphOne = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 100401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 245000,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 670810,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 404005,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 70000,
      sell: 670,
      revenue: 610000,
    },
  ];
  return (
    <div>
      <BarChart width={350} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="black" />
        <Bar dataKey="revenue" fill="red" />
      </BarChart>
    </div>
  );
};

export default GraphOne;
