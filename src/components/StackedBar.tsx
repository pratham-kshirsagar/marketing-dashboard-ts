import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';
import SectionHeader from './SectionHeader';

type Row = Record<string, number | string>;

// Design palette (bottom → top)
const COLORS: Record<string, string> = {
  Organic: '#1D4ED8', // deep blue
  Direct: '#60A5FA', // light blue
  Email: '#93C5FD', // lighter blue
  Referral: '#F59E0B', // orange
  Social: '#FBBF24', // yellow
  Other: '#FDE68A', // pale yellow
};

// Keys in the order they should stack (bottom → top)
const KEY_ORDER = ['Organic', 'Direct', 'Email', 'Referral', 'Social', 'Other'];

export default function StackedBar({ data }: { data: Row[] }) {
  // Pick only keys that exist in the provided data (in our preferred order)
  const keys = KEY_ORDER.filter((k) => k in (data?.[0] ?? {}));

  return (
    <div className="card">
      <SectionHeader title="Conversion Attribution" />
      <div className="card-body h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            stackOffset="expand" // 100% stacked
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            barCategoryGap="70%" // << slimmer columns (increase gap between groups)
          >
            {/* X labels under each column */}
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            {/* Hide Y values; we only want normalized stacks */}
            <YAxis hide domain={[0, 1]} />
            {/* A subtle dashed baseline like the mock */}
            <ReferenceLine y={0} stroke="#E5E7EB" strokeDasharray="3 4" />

            <Tooltip
              formatter={(v: number) => `${(v * 100).toFixed(1)}%`}
              labelFormatter={(l) => `${l as string}`}
            />

            {/* Place legend below chart */}
            <Legend verticalAlign="bottom" height={34} />

            {/* One narrow bar per category group */}
            {keys.map((k, i) => (
              <Bar
                key={k}
                dataKey={k}
                stackId="one"
                fill={COLORS[k] || '#ddd'}
                barSize={28} // << column width (make smaller if needed)
                radius={i === keys.length - 1 ? [8, 8, 0, 0] : 0} // round only the top stack
              />
            ))}
          </BarChart>
        </ResponsiveContainer>

        <div className="text-xs text-gray-500 mt-2">
          Data sourced from: Adobe Analytics – 1 Mar – 18 Mar
        </div>
      </div>
    </div>
  );
}
