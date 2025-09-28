import { ChevronDown, Plus } from "lucide-react";
import type { KPI } from "../data";
export default function KpiCard({
  title,
  value,
  status,
  benchmark,
  internal,
}: KPI) {
  return (
    <div className="card">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{title}</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <button className="rounded-xl border p-1 text-gray-600 hover:bggray-50">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-3 text-3xl font-semibold">
          {value.toLocaleString()}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span
            className={`pill ${
              status === "good"
                ? "bg-green-100 textgreen-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {status === "good" ? "Performing Well" : "Needs Improvement"}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-gray-500">
          <div>
            <div className="text-gray-500">Benchmark</div>
            <div className="font-medium text-gray-700">
              {benchmark.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-gray-500">Internal</div>
            <div className="font-medium textgray-700">
              {internal.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-gray-500"> </div>
            <div className="font-medium text-gray-700"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
