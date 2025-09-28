import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';
import SectionHeader from './SectionHeader';

type Row = { name: string; value: number };
const colors = ['#3b82f6', '#f59e0b', '#60a5fa', '#fbbf24', '#6366f1', '#f97316'];

export default function Donut({
  data,
  title,
  total,
}: {
  data: Row[];
  title: string;
  total?: number;
}) {
  const sum = total ?? data.reduce((s, r) => s + r.value, 0);

  return (
    <div className="card relative">
      <SectionHeader title={title} />
      <div className="card-body h-80 flex flex-col">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              startAngle={90}
              endAngle={450}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={colors[i % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Centered total */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold">{sum.toLocaleString()}</span>
        </div>

        {/* Legend below chart */}
        <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-700 justify-center">
          {data.map((d, i) => (
            <div key={i} className="flex items-center gap-1">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[i % colors.length] }}
              ></span>
              {d.name}
            </div>
          ))}
        </div>

        <div className="text-xs text-gray-500 mt-2">
          Data sourced from: Adobe Analytics – 1 Mar – 18 Mar
        </div>
      </div>
    </div>
  );
}
