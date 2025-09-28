import { Plus, Info } from "lucide-react";
export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="card-header">
      <div className="card-title">{title}</div>
      <div className="flex items-center gap-2">
        <select className="select hidden sm:block">
          <option>All Campaigns</option>
        </select>
        <select className="select hidden sm:block">
          <option>Conversions</option>
        </select>
        <button className="btn-outline">
          <Plus className="w-4 h-4" /> View Summary
        </button>
        <button className="rounded-full border p-2 text-gray-500">
          <Info className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
