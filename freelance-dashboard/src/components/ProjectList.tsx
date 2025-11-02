import { useFreelance } from "@/context/FreelanceContext"
import { searchProjects, findClientById } from "@/utils/freelance"
import ProjectCard from "./ProjectCard"

interface ProjectListProps {
  searchQuery: string
}

export default function ProjectList({ searchQuery }: ProjectListProps) {
  const { state } = useFreelance()

  const filteredProjects = searchQuery ? searchProjects(state.projects, searchQuery) : state.projects

  if (filteredProjects.length === 0) {
    return (
      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 text-center">
        <p className="text-slate-400">{searchQuery ? "No projects found matching your search." : "No projects yet."}</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
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
