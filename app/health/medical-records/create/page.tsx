import { AppLayout } from "@/components/layout/AppLayout"
import { ProtectedRoute } from "@/routes/ProtectedRoute"
import { RoleGuard } from "@/routes/RoleGuard"
import { CreateMedicalRecordPage } from "@/pages/health/CreateMedicalRecordPage"

export default function CreateMedicalRecord() {
  return (
    <ProtectedRoute>
      <AppLayout>
        <RoleGuard permission="CREATE_RECORD">
          <CreateMedicalRecordPage />
        </RoleGuard>
      </AppLayout>
    </ProtectedRoute>
  )
}
