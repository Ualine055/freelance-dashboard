import type { Client } from "@/types"

interface ClientCardProps {
  client: Client
  totalBudget: number
  projectCount: number
}

export default function ClientCard({ client, totalBudget, projectCount }: ClientCardProps) {
  return (
    <div className="rounded-lg border border-slate-700 bg-linear-to-br from-slate-800 to-slate-900 p-6 hover:border-slate-600 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{client.name}</h3>
          <p className="text-sm text-slate-400 mt-1">📍 {client.country}</p>
        </div>
        <div className="inline-block bg-emerald-500/20 text-emerald-400 rounded-full px-3 py-1 text-sm font-medium">
          {projectCount} {projectCount === 1 ? "Project" : "Projects"}
        </div>
      </div>

      {client.email && (
        <p className="text-sm text-slate-400 mb-4">
          <span className="text-slate-500">Email:</span> {client.email}
        </p>
      )}

      <div className="border-t border-slate-700 pt-4 mt-4">
        <p className="text-slate-400 text-sm">Total Budget</p>
        <p className="text-2xl font-bold text-emerald-400 mt-1">${totalBudget.toLocaleString()}</p>
      </div>
    </div>
  )
}
