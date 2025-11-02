// Utility functions for the Freelance Dashboard

import type { Client, Project, Payment } from "@/types"

// Count paid vs unpaid projects
export function getPaymentStats(projects: Project[]): {
  total: number
  paid: number
  unpaid: number
} {
  return {
    total: projects.length,
    paid: projects.filter((p) => p.paymentStatus === "paid").length,
    unpaid: projects.filter((p) => p.paymentStatus === "unpaid").length,
  }
}

// Find client by ID safely with type narrowing
export function findClientById(clients: Client[], clientId: string): Client | null {
  const client = clients.find((c) => c.id === clientId)
  return client ?? null
}

// Get total amount from all payments
export function getTotalPayments(payments: Payment[]): number {
  return payments.reduce((sum, payment) => sum + payment.amount, 0)
}

// Filter projects by status
export function filterProjectsByStatus(
  projects: Project[],
  status: "pending" | "in-progress" | "completed",
): Project[] {
  return projects.filter((p) => p.status === status)
}

// Filter projects by payment status
export function filterProjectsByPaymentStatus(projects: Project[], status: "paid" | "unpaid"): Project[] {
  return projects.filter((p) => p.paymentStatus === status)
}

// Search clients by name (case-insensitive)
export function searchClients(clients: Client[], query: string): Client[] {
  const lowerQuery = query.toLowerCase()
  return clients.filter(
    (client) => client.name.toLowerCase().includes(lowerQuery) || client.country.toLowerCase().includes(lowerQuery),
  )
}

// Search projects by title
export function searchProjects(projects: Project[], query: string): Project[] {
  const lowerQuery = query.toLowerCase()
  return projects.filter((project) => project.title.toLowerCase().includes(lowerQuery))
}

// Get project with client information
export function getProjectWithClient(project: Project, clients: Client[]): { project: Project; client: Client | null } {
  const client = findClientById(clients, project.clientId)
  return { project, client }
}

// Get client's total project budget
export function getClientTotalBudget(clientId: string, projects: Project[]): number {
  return projects.filter((p) => p.clientId === clientId).reduce((sum, p) => sum + p.budget, 0)
}

// Calculate project revenue (all paid projects)
export function calculateTotalRevenue(projects: Project[]): number {
  return projects.filter((p) => p.paymentStatus === "paid").reduce((sum, p) => sum + p.budget, 0)
}
