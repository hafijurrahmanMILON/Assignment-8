import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ ratings }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Ratings</h1>
      <div className="rounded-xl h-90 w-full p-5">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[...ratings].reverse()} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="count" fill="#8148EB" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
