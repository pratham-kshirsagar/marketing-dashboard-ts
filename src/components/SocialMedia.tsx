import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import SectionHeader from './SectionHeader';
type Row = {
  day: string;
  liImp: number;
  fbImp: number;
  liCtr: number;
  fbCtr: number;
};
export default function SocialMedia({ data }: { data: Row[] }) {
  return (
    <div className="card">
      <SectionHeader title="Social Media" />
      <div className="card-body h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              label={{ value: 'By Day', position: 'insideBottom', offset: -5 }}
            />
            <YAxis
              yAxisId="left"
              label={{
                value: 'Impressions',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={(v) => `${v}%`}
              label={{ value: 'CTR %', angle: -90, position: 'insideRight' }}
            />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="liImp"
              name="LinkedIn Impressions"
              fill="#fbbf24"
              radius={[6, 6, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="fbImp"
              name="Facebook Impressions"
              fill="#f59e0b"
              radius={[6, 6, 0, 0]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="liCtr"
              name="LinkedIn CTR"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="fbCtr"
              name="Facebook CTR"
              stroke="#93c5fd"
              strokeWidth={3}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
        <div className="small-foot mt-2">Data sourced from: Adobe Analytics - 1 Mar - 18 Mar</div>
      </div>
    </div>
  );
}
