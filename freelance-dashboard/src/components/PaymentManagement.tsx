import { useFreelance } from "@/context/FreelanceContext"
import { findClientById, getTotalPayments } from "@/utils/freelance"

export default function PaymentManagement() {
  const { state } = useFreelance()

  const totalPayments = getTotalPayments(state.payments)

  if (state.payments.length === 0) {
    return (
      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 text-center">
        <p className="text-slate-400">No payments recorded yet.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
        <p className="text-sm text-slate-400">Total Payments Recorded</p>
        <p className="text-4xl font-bold text-emerald-400 mt-2">${totalPayments.toLocaleString()}</p>
      </div>

      <div className="space-y-3">
        {state.payments.map((payment, index) => {
          const project = state.projects.find((p) => p.id === payment.projectId)
          const client = project ? findClientById(state.clients, project.clientId) : null

          return (
            <div
              key={index}
              className="rounded-lg border border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900 p-4 hover:border-slate-600 transition-all"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-white">{project?.title || "Unknown Project"}</p>
                  <p className="text-sm text-slate-400 mt-1">👤 {client?.name || "Unknown Client"}</p>
                  <p className="text-xs text-slate-500 mt-1">📅 {new Date(payment.date).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-emerald-400">${payment.amount.toLocaleString()}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
