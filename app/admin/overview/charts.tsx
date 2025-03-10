"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

const Charts = ({
  data: { salesData },
}: {
  data: {
    salesData: {
      month: string;
      totalSales: number;
    }[];
  };
}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={salesData}>
        <XAxis
          dataKey="month"
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
          tickFormatter={(value) => `Ksh${value}`}
        />
        <Bar
          dataKey="totalSales"
          fill="current"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
