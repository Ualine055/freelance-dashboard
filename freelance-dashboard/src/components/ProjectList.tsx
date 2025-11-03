import { useFreelance } from "@/context/FreelanceContext"
import { searchProjects, findClientById } from "@/utils/freelance"
import ProjectCard from "./ProjectCard"
import React from 'react'

interface ProjectListProps {
  searchQuery: string
  openFormSignal?: number
}

export default function ProjectList({ searchQuery, openFormSignal }: ProjectListProps) {
  const { state, dispatch } = useFreelance()
  const [showForm, setShowForm] = React.useState(false)
  const [title, setTitle] = React.useState("")
  const [clientId, setClientId] = React.useState(state.clients[0]?.id ?? "")
  const [budget, setBudget] = React.useState<number | "">("")

  React.useEffect(() => {
    if (typeof openFormSignal === "number") {
      setShowForm(true)
    }
  }, [openFormSignal])

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !clientId || budget === "") return

    const newProject = {
      id: `p-${Date.now()}`,
      clientId,
      title,
      budget: Number(budget),
      status: "pending" as const,
      paymentStatus: "unpaid" as const,
    }

    dispatch({ type: "ADD_PROJECT", payload: newProject })
    setTitle("")
    setClientId(state.clients[0]?.id ?? "")
    setBudget("")
    setShowForm(false)
  }

  const filteredProjects = searchQuery ? searchProjects(state.projects, searchQuery) : state.projects

  if (filteredProjects.length === 0) {
    return (
      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 text-center">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Projects</h3>
          <button
            onClick={() => setShowForm((s) => !s)}
            className="rounded-lg bg-blue-600/20 px-3 py-1.5 text-sm font-medium text-blue-400 hover:bg-blue-600/30 transition-colors"
          >
            {showForm ? "Cancel" : "Add Project"}
          </button>
        </div>
        {showForm && (
          <form onSubmit={handleAddProject} className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-3 text-left">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Project title"
              className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200"
            />
            <select
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200"
            >
              {state.clients.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            <input
              type="number"
              min={0}
              value={budget}
              onChange={(e) => setBudget(e.target.value === "" ? "" : Number(e.target.value))}
              placeholder="Budget"
              className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200"
            />
            <button
              type="submit"
              className="rounded-md bg-emerald-600/20 px-3 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-600/30 transition-colors"
            >
              Save Project
            </button>
          </form>
        )}
        <p className="text-slate-400">{searchQuery ? "No projects found matching your search." : "No projects yet."}</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold">Projects</h3>
        <button
          onClick={() => setShowForm((s) => !s)}
          className="rounded-lg bg-blue-600/20 px-3 py-1.5 text-sm font-medium text-blue-400 hover:bg-blue-600/30 transition-colors"
        >
          {showForm ? "Cancel" : "Add Project"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddProject} className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project title"
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200"
          />
          <select
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200"
          >
            {state.clients.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <input
            type="number"
            min={0}
            value={budget}
            onChange={(e) => setBudget(e.target.value === "" ? "" : Number(e.target.value))}
            placeholder="Budget"
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200"
          />
          <button
            type="submit"
            className="rounded-md bg-emerald-600/20 px-3 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-600/30 transition-colors"
          >
            Save Project
          </button>
        </form>
      )}

      {filteredProjects.map((project) => {
        const client = findClientById(state.clients, project.clientId)
        return (
          <ProjectCard
            key={project.id}
            project={project}
            clientName={client?.name ?? "Client not found"}
          />
        )
      })}
    </div>
  )
}
