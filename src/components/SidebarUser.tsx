export default function SidebarUser() {
  return (
    <aside className="hidden 2xl:block w-80 sticky top-20 self-start">
      <div className="card p-0 overflow-hidden">
        <div className="p-4 bg-brand-600 text-white">Assistant</div>
        <div className="p-4 space-y-3">
          <div className="text-sm text-gray-600">Ask anything about your metrics.</div>
          <div className="rounded-xl border p-3">
            <div className="text-sm font-medium">“How did paid compare to organic last week?”</div>
          </div>
          <button className="w-full rounded-xl bg-brand-600 text-white py-2 font-medium hover:bg-brand-700">
            Open Chat
          </button>
        </div>
      </div>
    </aside>
  );
}
