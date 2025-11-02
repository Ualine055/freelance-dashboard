import type { Project } from "@/types"
import { useFreelance } from "@/context/FreelanceContext"

interface ProjectCardProps {
  project: Project
  clientName: string
}

export default function ProjectCard({ project, clientName }: ProjectCardProps) {
  const { dispatch } = useFreelance()

  const statusColors: Record<Project["status"], string> = {
    pending: "bg-slate-500/20 text-slate-300",
    "in-progress": "bg-blue-500/20 text-blue-300",
    completed: "bg-emerald-500/20 text-emerald-300",
  }

  const paymentColors: Record<Project["paymentStatus"], string> = {
    paid: "bg-emerald-500/20 text-emerald-300",
    unpaid: "bg-orange-500/20 text-orange-300",
  }

  const handleMarkPaid = () => {
    dispatch({ type: "MARK_PROJECT_PAID", payload: project.id })
    dispatch({
      type: "ADD_PAYMENT",
      payload: {
        projectId: project.id,
        amount: project.budget,
        date: new Date().toISOString().split("T")[0],
      },
    })
  }

  return (
    <div className="rounded-lg border border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900 p-4 hover:border-slate-600 transition-all">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-semibold text-white">{project.title}</h4>
          <p className="text-sm text-slate-400 mt-1">👤 {clientName}</p>
          <div className="flex gap-2 mt-3">
            <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${statusColors[project.status]}`}>
              {project.status}
            </span>
            <span
              className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${paymentColors[project.paymentStatus]}`}
            >
              {project.paymentStatus}
            </span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold text-emerald-400">${project.budget.toLocaleString()}</p>
          {project.paymentStatus === "unpaid" && (
            <button
              onClick={handleMarkPaid}
              className="mt-2 rounded-lg bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400 hover:bg-emerald-500/30 transition-colors"
            >
              Mark Paid
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
