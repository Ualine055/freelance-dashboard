import type { Project, Payment, Client } from "@/types"
import { getPaymentStats, getTotalPayments, calculateTotalRevenue } from "@/utils/freelance"

interface DashboardStatsProps {
  projects: Project[]
  payments: Payment[]
  clients: Client[]
}

export default function DashboardStats({ projects, payments, clients }: DashboardStatsProps) {
  const paymentStats = getPaymentStats(projects)
  const totalPayments = getTotalPayments(payments)
  const totalRevenue = calculateTotalRevenue(projects)

  const stats = [
    {
      label: "Total Clients",
      value: clients.length,
      icon: "👥",
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Total Projects",
      value: paymentStats.total,
      icon: "📋",
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "Paid Projects",
      value: paymentStats.paid,
      icon: "✅",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      label: "Unpaid Projects",
      value: paymentStats.unpaid,
      icon: "⏳",
      color: "from-orange-500 to-orange-600",
    },
    {
      label: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      icon: "💰",
      color: "from-green-500 to-green-600",
    },
    {
      label: "Total Payments Recorded",
      value: `$${totalPayments.toLocaleString()}`,
      icon: "📊",
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:border-slate-600 transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
            </div>
            <div className="text-3xl">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
