export default function SummaryCard() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title flex items-center gap-2">
          <span className="text-brand-700">+</span> Summary
        </div>
        <a href="#" className="text-sm text-brand-700 hover:underline">
          Was this helpful?
        </a>
      </div>
      <div className="card-body">
        <div className="font-semibold mb-2">Traffic</div>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>
            Campaign QQQ_Fund_Infomercial drove the highest traffic (22% above
            average).
          </li>
          <li>
            Facebook underperformed this month, missing CTR target by 12%.
          </li>
          <li>
            QQQ Fund Facts is the top visited site at 31,592 visits in this
            period.
          </li>
        </ul>
      </div>
    </div>
  );
}
