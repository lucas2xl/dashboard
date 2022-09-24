import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", total: 1200 },
  { name: "February", total: 2100 },
  { name: "March", total: 800 },
  { name: "April", total: 1600 },
  { name: "May", total: 900 },
  { name: "June", total: 1700 },
];

interface ChartProps {
  aspect: number;
  title: string;
}

export const Chart = ({ aspect, title }: ChartProps) => {
  return (
    <div className="flex-[4] p-2 rounded text-zinc-400 shadow dark:shadow-white">
      <p className="mb-5 dark:text-zinc-500">{title}</p>

      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
