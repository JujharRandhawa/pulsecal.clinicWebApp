"use client"

import { AppLayout } from "@/components/layout/AppLayout"
import { ProtectedRoute } from "@/routes/ProtectedRoute"
import { RoleGuard } from "@/routes/RoleGuard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CreatePrescription() {
  return (
    <ProtectedRoute>
      <AppLayout>
        <RoleGuard permission="CREATE_PRESCRIPTION">
          <div className="space-y-6 max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Create Prescription</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prescription creation form will be implemented similar to medical records.
                </p>
              </CardContent>
            </Card>
          </div>
        </RoleGuard>
      </AppLayout>
    </ProtectedRoute>
  )
}
