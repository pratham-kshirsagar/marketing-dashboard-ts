// src/components/Funnel.tsx
import SectionHeader from "./SectionHeader";

type Row = { name: string; value: number };

// Top → bottom shades (match the mock)
const COLORS = ["#DDE8FF", "#9FBBFF", "#4E6BFF"];

export default function FunnelBlock({ data }: { data: Row[] }) {
  // Ensure exactly three steps (Impressions, Clicks, Form Submissions)
  const steps = (data.length ? data : [
    { name: "Impressions", value: 11920 },
    { name: "Clicks", value: 9000 },
    { name: "Form Submissions", value: 6000 },
  ]).slice(0, 3);

  // SVG geometry (responsive via viewBox)
  const VW = 1000;     // virtual width
  const VH = 560;      // virtual height of the drawing zone
  const TOP_W = 880;   // width of the top edge of the funnel
  const CX = VW / 2;   // center x
  const TOP_Y = 30;    // top padding
  const BTM_Y = 440;   // apex (point) y

  // horizontal slice boundaries as percentages of total height (from top to apex)
  const bounds = [0, 0.42, 0.74, 1]; // 3 slices => 4 boundaries

  const yAt = (t: number) => TOP_Y + (BTM_Y - TOP_Y) * t;
  const halfWAt = (y: number) => (TOP_W / 2) * (1 - (y - TOP_Y) / (BTM_Y - TOP_Y));

  // helper to build a slice polygon between two y's
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
          <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            {/* Slices */}
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
                    strokeWidth={12}     // white dividers like the mock
                    strokeLinejoin="round"
                  />
                  {/* Label + value centered in slice */}
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

        {/* Cost per conversion — positioned mid-right like the design */}
        <div className="absolute right-4 top-[63%] translate-y-[-50%] text-sm font-medium text-gray-700">
          Cost Per conversion – $23.02
        </div>

        {/* Footer */}
        <div className="mt-2 text-xs text-gray-500">
          Data sourced from: Adobe Analytics – 1 Mar – 18 Mar
        </div>
      </div>
    </div>
  );
}
