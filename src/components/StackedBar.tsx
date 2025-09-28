import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionHeader from "./SectionHeader";
const palette = [
  "#3b82f6",
  "#93c5fd",
  "#60a5fa",
  "#f59e0b",
  "#fbbf24",
  "#d1d5db",
];
type Row = { name: string; [key: string]: number | string };
export default function StackedBar({ data }: { data: Row[] }) {
  const keys = Object.keys(data[0]).filter((k) => k !== "name");
  return (
    <div className="card">
      <SectionHeader title="Conversion Attribution" />
      <div className="card-body h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {keys.map((k, i) => (
              <Bar
                key={k}
                dataKey={k}
                stackId="s"
                fill={palette[i % palette.length]}
                radius={[6, 6, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
        <div className="small-foot mt-2">
          Data sourced from: Adobe Analytics – 1 Mar – 18 Mar
        </div>
      </div>
    </div>
  );
}
