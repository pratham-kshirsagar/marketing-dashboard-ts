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

const COLORS: Record<string, string> = {
  Organic: '#1D4ED8',
  Direct: '#60A5FA',
  Email: '#93C5FD',
  Referral: '#F59E0B',
  Social: '#FBBF24',
  Other: '#FDE68A',
};

const KEY_ORDER = ['Organic', 'Direct', 'Email', 'Referral', 'Social', 'Other'];

export default function StackedBar({ data }: { data: Row[] }) {
  const keys = KEY_ORDER.filter((k) => k in (data?.[0] ?? {}));

  return (
    <div className="card">
      <SectionHeader title="Conversion Attribution" />
      <div className="card-body h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            stackOffset="expand"
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            barCategoryGap="70%"
          >
            <XAxis dataKey="name" axisLine={false} tickLine={false} />

            <YAxis hide domain={[0, 1]} />

            <ReferenceLine y={0} stroke="#E5E7EB" strokeDasharray="3 4" />

            <Tooltip
              formatter={(v: number) => `${(v * 100).toFixed(1)}%`}
              labelFormatter={(l) => `${l as string}`}
            />

            <Legend verticalAlign="bottom" height={34} />

            {keys.map((k, i) => (
              <Bar
                key={k}
                dataKey={k}
                stackId="one"
                fill={COLORS[k] || '#ddd'}
                barSize={28}
                radius={i === keys.length - 1 ? [8, 8, 0, 0] : 0}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>

        <div className="text-xs text-gray-500 mt-2">
          Data sourced from: Adobe Analytics - 1 Mar - 18 Mar
        </div>
      </div>
    </div>
  );
}
