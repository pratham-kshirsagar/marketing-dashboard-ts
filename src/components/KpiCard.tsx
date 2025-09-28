import { ChevronDown, Plus } from 'lucide-react';

type Props = {
  title: string;
  value: number;
  status: 'good' | 'bad';
  benchmark: number;
  internal: number;
};

export default function KpiCard({ title, value, status, benchmark, internal }: Props) {
  const isGood = status === 'good';
  const statusText = isGood ? 'Performing Well' : 'Needs Improvement';
  const statusBg = isGood ? 'bg-green-600' : 'bg-orange-500';

  return (
    <div className="card overflow-hidden">
      {/* subtle top gradient like the mock */}
      <div className="p-4 bg-gradient-to-b from-indigo-50/60 to-transparent">
        {/* title row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
            <span>{title}</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>

          <button
            aria-label="Add"
            className="rounded-xl border border-indigo-300 p-1.5 text-indigo-700 hover:bg-indigo-50"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* main value */}
        <div className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900">
          {value.toLocaleString()}
        </div>

        {/* full-width status bar with label */}
        <div
          className={`mt-3 h-8 ${statusBg} rounded-full text-white text-sm font-semibold flex items-center justify-center`}
        >
          {statusText}
        </div>

        {/* benchmark / internal row */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center justify-between rounded-full bg-gray-100 px-3 py-1 text-gray-600">
            <span className="opacity-70">Benchmark</span>
            <span className="ml-2 font-medium text-gray-800">{benchmark.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between rounded-full bg-gray-100 px-3 py-1 text-gray-600">
            <span className="opacity-70">Internal</span>
            <span className="ml-2 font-medium text-gray-800">{internal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
