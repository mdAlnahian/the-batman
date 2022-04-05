import React from "react";
import { Pie, PieChart } from "recharts";

const GraphThree = () => {
  const data01 = [
    {
      month: "Mar",
      investment: 100000,
    },
    {
      month: "Apr",
      investment: 200000,
    },
    {
      month: "May",
      investment: 500000,
    },
    {
      month: "Jun",
      investment: 500000,
    },
    {
      month: "Jul",
      investment: 600000,
    },
    {
      month: "Aug",
      investment: 700000,
    },
  ];
  const data02 = [
    {
      month: "Mar",
      revenue: 10401,
    },
    {
      month: "Apr",
      revenue: 24500,
    },
    {
      month: "May",
      revenue: 67010,
    },
    {
      month: "Jun",
      revenue: 40405,
    },
    {
      month: "Jul",
      revenue: 50900,
    },
    {
      month: "Aug",
      revenue: 61000,
    },
  ];
  return (
    <div>
      <PieChart width={350} height={250}>
        <Pie
          data={data01}
          dataKey="investment"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="red"
        />
        <Pie
          data={data02}
          dataKey="revenue"
          nameKey="month"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="black"
          label
        />
      </PieChart>
    </div>
  );
};

export default GraphThree;
