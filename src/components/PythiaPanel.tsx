import { MoreVertical, SendHorizonal, Sparkles } from "lucide-react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const chartData = [
  { name: "Mon", a: 40, b: 25 },
  { name: "Tue", a: 60, b: 40 },
  { name: "Wed", a: 35, b: 50 },
  { name: "Thu", a: 80, b: 60 },
  { name: "Fri", a: 95, b: 75 },
  { name: "Sat", a: 70, b: 65 },
  { name: "Sun", a: 55, b: 30 },
];

export default function PythiaPanel() {
  return (
    <aside className="hidden xl:block w-[26rem] sticky top-24 self-start">
      <div className="card rounded-2xl overflow-hidden shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <div>
            <div className="font-semibold">Chat with Pythia</div>
            <div className="text-xs opacity-80">
              Ask questions in natural language
            </div>
          </div>
          <MoreVertical className="w-5 h-5" />
        </div>

        {/* Body */}
        <div className="px-4 py-4 space-y-4">
          {/* User Question */}
          <div className="bg-indigo-600 text-white rounded-xl px-4 py-2 text-sm shadow w-fit">
            Why did our conversions drop last week?
          </div>

          {/* Commentary */}
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3">
            <div className="flex items-center gap-2 mb-2 text-indigo-900 font-medium">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              Commentary
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              We identified a 15% drop in conversions from March 1–7 compared to
              the previous week. Below are the detailed factors influencing
              this:
              <br />
              <strong>Mobile Bounce Rate:</strong> Increased from 35% to 45%.
              <br />
              <strong>Region Specific Impact:</strong> Europe saw a 25% drop,
              while North America was mostly stable.
              <br />
              <strong>Likely Cause:</strong> Ad creative change on mobile
              channels.
            </p>

            {/* Chart */}
            <div className="h-40 mt-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="a"
                    stroke="#ef4444" // red
                    strokeWidth={2.5}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="b"
                    stroke="#3b82f6" // blue
                    strokeWidth={2.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="text-xs text-gray-500 mt-1">
                Data sourced from: XXXX | 1 Mar – 18 Mar
              </div>
            </div>
          </div>

          {/* Suggested Questions */}
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 rounded-full border border-indigo-200 text-indigo-700 text-sm hover:bg-indigo-50">
              What were the total Sales
            </button>
            <button className="px-3 py-1 rounded-full border border-indigo-200 text-indigo-700 text-sm hover:bg-indigo-50">
              Where are the biggest drops
            </button>
          </div>

          {/* Input Box */}
          <div className="flex items-center gap-2">
            <input
              className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm"
              placeholder="Ex: What was this compared to last year?"
            />
            <button className="rounded-full bg-indigo-600 text-white p-2 hover:bg-indigo-700">
              <SendHorizonal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
