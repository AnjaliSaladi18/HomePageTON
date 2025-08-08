import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    date: "26 May",
    fiiNet: 101135.28,
    diiNet: 33144.78,
    net: 134280.06,
  },
  {
    date: "02 Jun",
    fiiNet: 13330.44,
    diiNet: 25513.43,
    net: 38843.87,
  },
  {
    date: "09 Jun",
    fiiNet: 70923.58,
    diiNet: 18637.59,
    net: 89561.17,
  },
  {
    date: "16 Jun",
    fiiNet: 91442.02,
    diiNet: 12635.58,
    net: 104077.6,
  },
];

const Chart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="fiiNet" barSize={20} fill="#3366FF" name="Net FII Activity" />
      <Bar dataKey="diiNet" barSize={20} fill="#000000" name="Net DII Activity" />
      <Line type="monotone" dataKey="net" stroke="#999" name="Net Overall Activity" />
    </ComposedChart>
  </ResponsiveContainer>
);

export default Chart;
