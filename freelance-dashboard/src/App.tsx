import { FreelanceProvider } from '@/context/FreelanceContext'
import DashboardLayout from '@/components/DashboardLayout'

function App() {
  return (
    <FreelanceProvider>
      <DashboardLayout />
    </FreelanceProvider>
  )
}

export default App
