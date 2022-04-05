import React from "react";
import {
  CartesianGrid,
  Legend,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

const GraphFour = () => {
  const data01 = [
    {
      investment: 10000,
      sell: 120,
      revenue: 12401,
    },
    {
      investment: 20000,
      sell: 260,
      revenue: 28500,
    },
    {
      investment: 50000,
      sell: 500,
      revenue: 45010,
    },
    {
      investment: 50000,
      sell: 450,
      revenue: 52405,
    },
    {
      investment: 60000,
      sell: 570,
      revenue: 33900,
    },
    {
      investment: 70000,
      sell: 623,
      revenue: 57000,
    },
  ];
  const data02 = [
    {
      investment: 14000,
      sell: 241,
      revenue: 10401,
    },
    {
      investment: 34000,
      sell: 423,
      revenue: 24500,
    },
    {
      investment: 45000,
      sell: 726,
      revenue: 67010,
    },
    {
      investment: 47000,
      sell: 529,
      revenue: 40405,
    },
    {
      investment: 52000,
      sell: 601,
      revenue: 50900,
    },
    {
      investment: 63000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div>
      <ScatterChart
        width={350}
        height={250}
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="investment" name="kilowatt" unit="" />
        <YAxis dataKey="sell" name="million" unit="usd" />
        <ZAxis dataKey="revenue" range={[64, 144]} name="score" unit="km" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="BATMAN" data={data01} fill="red" />
        <Scatter name="SUPERMAN" data={data02} fill="black" />
      </ScatterChart>
    </div>
  );
};

export default GraphFour;
