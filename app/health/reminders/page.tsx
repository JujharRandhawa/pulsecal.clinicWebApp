"use client"

import { AppLayout } from "@/components/layout/AppLayout"
import { ProtectedRoute } from "@/routes/ProtectedRoute"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Bell, Clock } from "lucide-react"

export default function Reminders() {
  const reminders = [
    { id: "1", title: "Take medication", time: "08:00 AM", frequency: "Daily", active: true },
    { id: "2", title: "Blood pressure check", time: "07:00 PM", frequency: "Weekly", active: true },
    { id: "3", title: "Doctor appointment", time: "10:00 AM", frequency: "One-time", active: false },
  ]

  return (
    <ProtectedRoute>
      <AppLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-balance">Health Reminders</h1>
              <p className="text-muted-foreground">Set up reminders for medications and appointments</p>
            </div>
            <Button size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Add Reminder
            </Button>
          </div>

          <div className="grid gap-4">
            {reminders.map((reminder) => (
              <Card key={reminder.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      {reminder.title}
                    </CardTitle>
                    <Badge variant={reminder.active ? "default" : "secondary"}>
                      {reminder.active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {reminder.time}
                    </p>
                    <p className="text-sm text-muted-foreground">{reminder.frequency}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AppLayout>
    </ProtectedRoute>
  )
}
