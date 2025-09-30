import SectionHeader from './SectionHeader';

type Row = { name: string; value: number };

const COLORS = ['#DDE8FF', '#9FBBFF', '#4E6BFF'];

export default function FunnelBlock({ data }: { data: Row[] }) {
  const steps = (
    data.length
      ? data
      : [
          { name: 'Impressions', value: 11920 },
          { name: 'Clicks', value: 9000 },
          { name: 'Form Submissions', value: 6000 },
        ]
  ).slice(0, 3);

  const VW = 1000;
  const VH = 560;
  const TOP_W = 880;
  const CX = VW / 2;
  const TOP_Y = 30;
  const BTM_Y = 440;

  const bounds = [0, 0.42, 0.74, 1];
  const yAt = (t: number) => TOP_Y + (BTM_Y - TOP_Y) * t;
  const halfWAt = (y: number) => (TOP_W / 2) * (1 - (y - TOP_Y) / (BTM_Y - TOP_Y));

  const slicePoly = (y0: number, y1: number) => {
    const hw0 = halfWAt(y0);
    const hw1 = halfWAt(y1);
    const p1 = `${CX - hw0},${y0}`;
    const p2 = `${CX + hw0},${y0}`;
    const p3 = `${CX + hw1},${y1}`;
    const p4 = `${CX - hw1},${y1}`;
    return `${p1} ${p2} ${p3} ${p4}`;
  };

  return (
    <div className="card">
      <SectionHeader title="Marketing’s Contributions to Sales Pipeline" />

      <div className="card-body relative">
        <div className="w-full h-80">
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {steps.map((s, i) => {
              const y0 = yAt(bounds[i]);
              const y1 = yAt(bounds[i + 1]);
              const midY = (y0 + y1) / 2;
              return (
                <g key={s.name}>
                  <polygon
                    points={slicePoly(y0, y1)}
                    fill={COLORS[i]}
                    stroke="#ffffff"
                    strokeWidth={12}
                    strokeLinejoin="round"
                  />

                  <text
                    x={CX}
                    y={midY - 8}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize={22}
                    fontWeight={600}
                  >
                    {s.name}
                  </text>
                  <text
                    x={CX}
                    y={midY + 18}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize={20}
                    fontWeight={600}
                  >
                    {s.value.toLocaleString()}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="absolute right-4 top-[63%] translate-y-[-50%] text-sm font-medium text-gray-700">
          Cost Per conversion – $23.02
        </div>

        <div className="mt-2 text-xs text-gray-500">
          Data sourced from: Adobe Analytics – 1 Mar – 18 Mar
        </div>
      </div>
    </div>
  );
}
