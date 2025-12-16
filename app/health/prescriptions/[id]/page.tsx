import { AppLayout } from "@/components/layout/AppLayout"
import { ProtectedRoute } from "@/routes/ProtectedRoute"
import { PrescriptionDetailPage } from "@/pages/health/PrescriptionDetailPage"

export default function PrescriptionDetail({ params }: { params: { id: string } }) {
  return (
    <ProtectedRoute>
      <AppLayout>
        <PrescriptionDetailPage prescriptionId={params.id} />
      </AppLayout>
    </ProtectedRoute>
  )
}
