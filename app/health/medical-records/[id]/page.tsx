import { AppLayout } from "@/components/layout/AppLayout"
import { ProtectedRoute } from "@/routes/ProtectedRoute"
import { MedicalRecordDetailPage } from "@/pages/health/MedicalRecordDetailPage"

export default function MedicalRecordDetail({ params }: { params: { id: string } }) {
  return (
    <ProtectedRoute>
      <AppLayout>
        <MedicalRecordDetailPage recordId={params.id} />
      </AppLayout>
    </ProtectedRoute>
  )
}
