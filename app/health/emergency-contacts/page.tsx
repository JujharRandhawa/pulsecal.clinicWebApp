"use client"

import { AppLayout } from "@/components/layout/AppLayout"
import { ProtectedRoute } from "@/routes/ProtectedRoute"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Phone, User } from "lucide-react"

export default function EmergencyContacts() {
  return (
    <ProtectedRoute>
      <AppLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-balance">Emergency Contacts</h1>
              <p className="text-muted-foreground">Manage your emergency contact information</p>
            </div>
            <Button size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Add Contact
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Primary Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">Jane Doe</p>
                <p className="text-sm text-muted-foreground">Spouse</p>
                <p className="text-sm flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (555) 123-4567
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Secondary Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">John Smith</p>
                <p className="text-sm text-muted-foreground">Brother</p>
                <p className="text-sm flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (555) 987-6543
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AppLayout>
    </ProtectedRoute>
  )
}
