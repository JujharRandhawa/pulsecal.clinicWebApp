import { AppLayout } from "@/components/layout/AppLayout"
import { ProtectedRoute } from "@/routes/ProtectedRoute"
import { PrescriptionsPage } from "@/pages/health/PrescriptionsPage"

export default function Prescriptions() {
  return (
    <ProtectedRoute>
      <AppLayout>
        <PrescriptionsPage />
      </AppLayout>
    </ProtectedRoute>
  )
}
