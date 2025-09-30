import Topbar from './components/Topbar';
import PythiaPanel from './components/PythiaPanel';
import KpiCard from './components/KpiCard';
import SummaryCard from './components/SummaryCard';
import StackedBar from './components/StackedBar';
import FunnelBlock from './components/Funnel';
import Donut from './components/Donut';
import DataTable from './components/DataTable';
import SocialMedia from './components/SocialMedia';

import {
  kpis,
  stacked,
  funnel,
  donutVisitTopic,
  donutFocusFunds,
  donutDownloads,
  social,
} from './data';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />

      <div className="mx-auto w-full max-w-[120rem] px-4 pt-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-lg font-semibold">Welcome, User</div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-sm text-gray-500">User Role</div>
            <select className="select">
              <option>Marketing Operations</option>
            </select>

            <div className="text-sm text-gray-500 ml-2">Date Range</div>
            <select className="select">
              <option>01-03 - 18-03-2024</option>
            </select>

            <div className="text-sm text-gray-500 ml-2">Comparison</div>
            <select className="select">
              <option>Previous Period</option>
            </select>
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-[120rem] px-4 py-6 grid grid-cols-1 xl:grid-cols-[1fr_26rem] gap-6">
        <section className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
            {kpis.map((k) => (
              <KpiCard key={k.title} {...k} />
            ))}
          </div>
          <div className="small-foot">Data sourced from: Adobe Analytics - 1 Mar - 18 Mar</div>

          <SummaryCard />

          <StackedBar data={stacked} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <FunnelBlock data={funnel} />
            <Donut title="Visit to Blog Post by Topic" data={donutVisitTopic} total={12130} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Donut title="Visits by Focus Funds" data={donutFocusFunds} total={1400} />
            <Donut title="Downloads by Type" data={donutDownloads} total={12130} />
          </div>

          <DataTable />

          <SocialMedia data={social} />
        </section>

        <PythiaPanel />
      </main>
    </div>
  );
}
