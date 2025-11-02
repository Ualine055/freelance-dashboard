import { useState } from "react"
import { useFreelance } from "@/context/FreelanceContext"
import DashboardStats from "./DashboardStats"
import ClientList from "./ClientList"
import ProjectList from "./ProjectList"
import PaymentManagement from "./PaymentManagement"

type TabType = "clients" | "projects" | "payments"

export default function DashboardLayout() {
  const { state } = useFreelance()
  const [activeTab, setActiveTab] = useState<TabType>("clients")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Freelance Dashboard</h1>
              <p className="mt-1 text-slate-400">Manage your clients, projects, and payments</p>
            </div>
            <div className="text-sm text-slate-400">
              Total Projects: <span className="text-emerald-400 font-semibold">{state.projects.length}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <DashboardStats projects={state.projects} payments={state.payments} clients={state.clients} />

        {/* Search Bar */}
        <div className="mt-8 mb-6">
          <input
            type="text"
            placeholder="Search clients or projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 border-b border-slate-700">
          {(["clients", "projects", "payments"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-emerald-500 text-emerald-400"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "clients" && <ClientList searchQuery={searchQuery} />}
          {activeTab === "projects" && <ProjectList searchQuery={searchQuery} />}
          {activeTab === "payments" && <PaymentManagement />}
        </div>
      </main>
    </div>
  )
}
