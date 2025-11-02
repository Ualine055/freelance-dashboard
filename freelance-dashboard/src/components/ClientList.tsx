import { useFreelance } from "@/context/FreelanceContext"
import { searchClients, getClientTotalBudget } from "@/utils/freelance"
import ClientCard from "./ClientCard"

interface ClientListProps {
  searchQuery: string
}

export default function ClientList({ searchQuery }: ClientListProps) {
  const { state } = useFreelance()

  const filteredClients = searchQuery ? searchClients(state.clients, searchQuery) : state.clients

  if (filteredClients.length === 0) {
    return (
      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 text-center">
        <p className="text-slate-400">{searchQuery ? "No clients found matching your search." : "No clients yet."}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {filteredClients.map((client) => (
        <ClientCard
          key={client.id}
          client={client}
          totalBudget={getClientTotalBudget(client.id, state.projects)}
          projectCount={state.projects.filter((p) => p.clientId === client.id).length}
        />
      ))}
    </div>
  )
}
