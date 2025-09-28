import SectionHeader from "./SectionHeader";
type Row = {
  channel: string;
  impressions: number;
  clicks: number;
  conversions: number;
  cpc: number;
};
export default function DataTable({ rows }: { rows: Row[] }) {
  const totals = rows.reduce(
    (a, r) => ({
      impressions: a.impressions + r.impressions,
      clicks: a.clicks + r.clicks,
      conversions: a.conversions + r.conversions,
      cpc: r.cpc, // display same sample
    }),
    { impressions: 0, clicks: 0, conversions: 0, cpc: 23.12 }
  );
  return (
    <div className="card overflow-hidden">
      <SectionHeader title="Channel Performance" />
      <div className="card-body p-0">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3">Channel Name</th>
                <th className="text-right px-4 py-3">Impressions ↓</th>
                <th className="text-right px-4 py-3">Clicks</th>
                <th className="text-right px-4 py-3">Conversions</th>
                <th className="text-right px-4 py-3">CPC</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.channel} className="border-t">
                  <td className="px-4 py-3 font-medium">{r.channel}</td>
                  <td className="px-4 py-3 textright">
                    {r.impressions.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 textright">
                    {r.clicks.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 textright">
                    {r.conversions.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-right">${r.cpc.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="border-t bg-gray-50 font-semibold">
                <td className="px-4 py-3">Total</td>
                <td className="px-4 py-3 textright">
                  {totals.impressions.toLocaleString()}
                </td>
                <td className="px-4 py-3 textright">
                  {totals.clicks.toLocaleString()}
                </td>
                <td className="px-4 py-3 textright">
                  {totals.conversions.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right">
                  ${totals.cpc.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
