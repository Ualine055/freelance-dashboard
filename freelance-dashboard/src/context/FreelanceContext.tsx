import React, { createContext, useReducer, type ReactNode } from "react"
import type { DashboardState, FreelanceAction } from "@/types"

export const FreelanceContext = createContext<{
  state: DashboardState
  dispatch: React.Dispatch<FreelanceAction>
} | null>(null)

const initialState: DashboardState = {
  clients: [
    {
      id: "c1",
      name: "Tech Innovations Inc",
      country: "United States",
      email: "contact@techinnovations.com",
    },
    {
      id: "c2",
      name: "Global Design Studio",
      country: "Canada",
      email: "hello@globaldesign.ca",
    },
  ],
  projects: [
    {
      id: "p1",
      clientId: "c1",
      title: "E-commerce Platform Redesign",
      budget: 5000,
      status: "in-progress",
      paymentStatus: "unpaid",
    },
    {
      id: "p2",
      clientId: "c2",
      title: "Brand Identity Update",
      budget: 3000,
      status: "completed",
      paymentStatus: "paid",
    },
  ],
  payments: [
    {
      projectId: "p2",
      amount: 3000,
      date: "2025-10-15",
    },
  ],
}

function freelanceReducer(state: DashboardState, action: FreelanceAction): DashboardState {
  switch (action.type) {
    case "ADD_CLIENT":
      return {
        ...state,
        clients: [...state.clients, action.payload],
      }
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      }
    case "MARK_PROJECT_PAID": {
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload ? { ...project, paymentStatus: "paid" } : project,
        ),
      }
    }
    case "ADD_PAYMENT":
      return {
        ...state,
        payments: [...state.payments, action.payload],
      }
    case "INIT_DATA":
      return action.payload
    default:
      return state
  }
}

export function FreelanceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(freelanceReducer, initialState)

  return <FreelanceContext.Provider value={{ state, dispatch }}>{children}</FreelanceContext.Provider>
}

export function useFreelance() {
  const context = React.useContext(FreelanceContext)
  if (!context) {
    throw new Error("useFreelance must be used within FreelanceProvider")
  }
  return context
}
