# Freelance Dashboard (React + TypeScript)

A comprehensive freelance management dashboard built with React, TypeScript, and Context API + useReducer for type-safe global state management.

## 🎯 Project Overview

This dashboard allows freelancers to efficiently manage multiple clients, projects, and payments in one place. It demonstrates strong TypeScript typing, reusable components, and a well-organized state management system.

## ✨ Key Features

- **Client Management**: View and search clients with contact information and project counts
- **Project Tracking**: Monitor projects by status (pending, in-progress, completed) and payment status
- **Payment Recording**: Track all payments with dates and amounts linked to specific projects
- **Dashboard Statistics**: Quick overview of key metrics (total clients, projects, revenue)
- **Type-Safe State Management**: Full TypeScript typing with Context API + useReducer
- **Search Functionality**: Filter clients and projects by name or keyword
- **Mark Payments**: Easily mark unpaid projects as paid with automatic payment recording

## 🛠 Technologies Used

- **React** - UI library
- **TypeScript** - Static typing and type safety
- **Context API + useReducer** - Global state management
- **Tailwind CSS** - Styling and responsive design
- **Next.js** - React framework

## 📊 Data Models

### Client
\`\`\`typescript
interface Client {
  id: string;
  name: string;
  country: string;
  email?: string;
}
\`\`\`

### Project
\`\`\`typescript
interface Project {
  id: string;
  clientId: string;
  title: string;
  budget: number;
  status: 'pending' | 'in-progress' | 'completed';
  paymentStatus: 'paid' | 'unpaid';
}
\`\`\`

### Payment
\`\`\`typescript
interface Payment {
  projectId: string;
  amount: number;
  date: string; // ISO format
}
\`\`\`

## 🔧 Utility Functions

- **getPaymentStats** - Count paid vs unpaid projects
- **findClientById** - Safely find client by ID with type narrowing
- **getTotalPayments** - Calculate total payment amounts
- **filterProjectsByStatus** - Filter projects by completion status
- **filterProjectsByPaymentStatus** - Filter projects by payment status
- **searchClients** - Search clients by name or country
- **searchProjects** - Search projects by title
- **getProjectWithClient** - Get project with client information
- **getClientTotalBudget** - Calculate total budget for a client
- **calculateTotalRevenue** - Calculate revenue from paid projects

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── page.tsx           # Main page with provider
│   └── globals.css        # Global styles
├── components/
│   ├── DashboardLayout.tsx    # Main layout
│   ├── DashboardStats.tsx     # Stats cards
│   ├── ClientList.tsx         # Client listing
│   ├── ClientCard.tsx         # Client card component
│   ├── ProjectList.tsx        # Project listing
│   ├── ProjectCard.tsx        # Project card component
│   └── PaymentManagement.tsx  # Payment tracking
├── context/
│   └── FreelanceContext.tsx   # Context API + useReducer
├── types/
│   └── index.ts               # TypeScript interfaces
└── utils/
    └── freelance.ts           # Utility functions
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/freelance-dashboard.git
cd freelance-dashboard
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 📝 Sample Data

The dashboard includes pre-loaded sample data:
- 2 Clients (Tech Innovations Inc, Global Design Studio)
- 2 Projects (E-commerce Platform Redesign, Brand Identity Update)
- 1 Payment (Brand Identity Update - $3,000)

## 🎨 UI Components

### Reusable Components

1. **ClientCard** - Displays client information with project count and total budget
2. **ProjectCard** - Shows project details with status indicators and payment status
3. **DashboardStats** - Displays key metrics in card format

## 💡 TypeScript Highlights

- **Discriminated Unions** - Action types ensure type-safe dispatch
- **Type Narrowing** - Safe handling of optional properties
- **Generics** - Flexible, reusable utility functions
- **Interface Segregation** - Clear prop contracts for components

## 🔗 Live Demo

[View live deployment]()

