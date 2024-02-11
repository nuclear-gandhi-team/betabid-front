"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export type GraphItem = {
  amount: number;
  time: string;
};

const RateChangesGraph = ({ data }: { data: GraphItem[] }) => {
  if (data.length === 0) {
    return (
      <div className="mt-20 flex justify-center items-center text-muted-foreground">
        No data
      </div>
    );
  }
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="time"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="amount"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RateChangesGraph;
