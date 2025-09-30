import { Info } from 'lucide-react';

export default function SummaryCard() {
  return (
    <div className="border border-indigo-200 rounded-xl bg-indigo-50/30 p-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-indigo-200 pb-2 mb-3">
        <div className="flex items-center space-x-2 text-indigo-700 font-semibold">
          <Info className="w-4 h-4" />
          <span>Summary</span>
        </div>
        <button className="text-sm text-indigo-600 hover:underline">Was this helpful?</button>
      </div>

      {/* Content */}
      <div className="space-y-3 text-sm text-gray-700">
        <h3 className="font-semibold text-gray-800">Traffic</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Overall, in this time period, campaign QQQ_Fund_Infomercial drove the highest traffic,
            with an 22% above average campaign traffic.
          </li>
          <li>Facebook underperformed this month, missing click through target by 12%.</li>
          <li>Page QQQ Fund Facts is the top visited site at 31,592 visits in this time period.</li>
        </ul>
      </div>
    </div>
  );
}
