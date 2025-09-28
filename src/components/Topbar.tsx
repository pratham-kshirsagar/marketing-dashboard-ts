import { Database, CircleHelp, User } from "lucide-react";
export default function Topbar() {
  return (
    <header
      className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b
border-gray-100"
    >
      <div className="mx-auto max-w-[120rem] px-4 py-3 flex items-center">
        <div className="text-2xl font-bold tracking-tight">Logo</div>
        <div className="ml-auto flex items-center gap-2">
          <button className="badge">
            <Database className="w-4 h-4" />{" "}
            <span className="hidden sm:inline">Data Source</span>
          </button>
          <button className="badge">
            <CircleHelp className="w-4 h-4" />{" "}
            <span className="hidden sm:inline">Help</span>
          </button>
          <button className="badge">
            <User className="w-4 h-4" />{" "}
            <span className="hidden sm:inline">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}
