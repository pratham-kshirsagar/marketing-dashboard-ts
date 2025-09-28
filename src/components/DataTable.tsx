export default function DataTable() {
  const data = [
    {
      channel: "Facebook",
      impressions: 1300,
      clicks: 900,
      conversions: 600,
      cpc: "$23.12",
    },
    {
      channel: "YouTube",
      impressions: 1300,
      clicks: 900,
      conversions: 600,
      cpc: "$23.12",
    },
    {
      channel: "LinkedIn",
      impressions: 1300,
      clicks: 900,
      conversions: 600,
      cpc: "$23.12",
    },
  ];

  const totals = {
    impressions: 3900,
    clicks: 2700,
    conversions: 1800,
    cpc: "$23.12",
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-semibold">Channel Performance</h2>
      </div>
      <div className="card-body overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-gray-600">
              <th className="py-3 px-4 text-left font-medium">Channel Name</th>
              <th className="py-3 px-4 text-right font-medium">
                Impressions ↓
              </th>
              <th className="py-3 px-4 text-right font-medium">Clicks</th>
              <th className="py-3 px-4 text-right font-medium">Conversions</th>
              <th className="py-3 px-4 text-right font-medium">CPC</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-800">{row.channel}</td>
                <td className="py-3 px-4 text-right">
                  {row.impressions.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-right">
                  {row.clicks.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-right">
                  {row.conversions.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-right">{row.cpc}</td>
              </tr>
            ))}
            {/* Totals row */}
            <tr className="font-semibold">
              <td className="py-3 px-4">Total</td>
              <td className="py-3 px-4 text-right">
                {totals.impressions.toLocaleString()}
              </td>
              <td className="py-3 px-4 text-right">
                {totals.clicks.toLocaleString()}
              </td>
              <td className="py-3 px-4 text-right">
                {totals.conversions.toLocaleString()}
              </td>
              <td className="py-3 px-4 text-right">{totals.cpc}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
