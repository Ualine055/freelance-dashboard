# Freelance Dashboard (React + TypeScript)

A comprehensive freelance management dashboard built with React, TypeScript, and Context API + useReducer for type-safe global state management.

## 🎯 Project Overview

This dashboard allows freelancers to efficiently manage multiple clients, projects, and payments in one place. It demonstrates strong TypeScript typing, reusable components, and a well-organized state management system.

## 🛠 Technologies Used

- **React** - UI library
- **TypeScript** - Static typing and type safety
- **Context API + useReducer** - Global state management
- **Tailwind CSS** - Styling and responsive design
- **Next.js** - React framework

## ✨ Key Features

- **Client Management**: View and search clients with contact information and project counts
- **Project Tracking**: Monitor projects by status (pending, in-progress, completed) and payment status
- **Payment Recording**: Track all payments with dates and amounts linked to specific projects
- **Dashboard Statistics**: Quick overview of key metrics (total clients, projects, revenue)
- **Type-Safe State Management**: Full TypeScript typing with Context API + useReducer
- **Search Functionality**: Filter clients and projects by name or keyword
- **Mark Payments**: Easily mark unpaid projects as paid with automatic payment recording


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


## 📁 Project Structure

\`\`\`
src/
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


### Installation

### Clone the repository
\`\`\`bash
git clone https://github.com/Ualine055/freelance-dashboard.git
cd freelance-dashboard
\`\`\`

## 📝 Sample Data

The dashboard includes pre-loaded sample data:
- 2 Clients (Tech Innovations Inc, Global Design Studio)
- 2 Projects (E-commerce Platform Redesign, Brand Identity Update)
- 1 Payment (Brand Identity Update - $3,000)


## 🔗 Live Demo

[View live deployment](freelance-dashboard-2s0dfydzg-ualine055-5515s-projects.vercel.app)

## Screenshots
[
  ![Freelance-dashboard page](../freelance-dashboard/freelance-dashboard/src/assets/screenshoot.PNG)
]