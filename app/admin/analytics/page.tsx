"use client"

import { Card } from "@/components/ui/card"
import { Users, Calendar, DollarSign, TrendingUp } from "lucide-react"
import { StatsCard } from "@/components/dashboard/StatsCard"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground mt-2">Detailed insights and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value="$125.4k"
          icon={DollarSign}
          color="bg-success"
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="New Patients"
          value="342"
          icon={Users}
          color="bg-primary"
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Appointments"
          value="1,456"
          icon={Calendar}
          color="bg-secondary"
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Growth Rate"
          value="23%"
          icon={TrendingUp}
          color="bg-accent"
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Performance</h3>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            Chart visualization would be rendered here
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">User Distribution</h3>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            Pie chart visualization would be rendered here
          </div>
        </Card>
      </div>
    </div>
  )
}
